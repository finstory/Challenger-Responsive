import React from 'react'
import { useReduxContext } from '../context/useRedux';
import itemsFromDB from "../database/items.json";
export const useHomeServices = () => {
  const { redux, setRedux } = useReduxContext();
  const resolution4k = window.screen.width < 3800 ? false : true;
  const isMobilActive = window.screen.width < 1024 ? false : true;
  const getListViews = JSON.parse(window.localStorage.getItem("listViews"));


  const setListViews = () => {
    if (getListViews) setRedux({
      listViews: getListViews
    });
    else setRedux({
      listViews: itemsFromDB.map((item) => ({ id: item.id, views: 0 })),
    });
  }

  const getViewItem = (idItem) => {
    const { listViews } = redux;
    const itemGet = listViews.find((item) => item.id === idItem);
    return itemGet.views;
  };

  const addViewItem = (idItem) => {
    const { listViews } = redux;
    const listUpdate = listViews.map((item) => {
      if (item.id === idItem) return { ...item, views: ++item.views };
      else return item;
    });
    setRedux({ listViews: listUpdate });
  };

  const openPopup = (idItem, title) => {
    window.popup = window.open(
      `/popup_wallpaper/${idItem}?from=${window.location.href}`,
      "popUpWindow",
      "height=600,width=800,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes,title=hola"
    );
    setTimeout(() => {
      window.popup.document.title = title;
    }, 500);
  };

  const openDetails = (item, i, isTriggerInfo) => {
    if (i % 2 !== 0) {
      if (isMobilActive || isTriggerInfo) {
        setRedux({ modalDetails: { active: true, item } });
        addViewItem(item.id);
      }
    } else {
      if (isMobilActive || isTriggerInfo) {
        setRedux({ poPupDetails: { item } });
        openPopup(item.id, item.title);
      }
    }
  };

  return { addViewItem, getViewItem, setListViews, openDetails, resolution4k }
}
