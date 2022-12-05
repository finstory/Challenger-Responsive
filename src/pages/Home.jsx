import React, { useEffect } from "react";
import { ModalDetails } from "../components/Global/Details/ModalDetails";
import { Galery } from "../components/Home/Galery/Galery";
import { Info } from "../components/Home/Info/Info";
import { useReduxContext } from "../context/useRedux";
import { useHomeServices } from "../services/useHomeServices";
export const Home = () => {
  const {
    redux: { listViews },
    setRedux,
  } = useReduxContext();

  const { setListViews } = useHomeServices();

  // const getListViews = JSON.parse(window.localStorage.getItem("listViews"));

  useEffect(() => {
    listViews.length &&
      window.localStorage.setItem("listViews", JSON.stringify(listViews));
  }, [listViews]);

  useEffect(() => {
    setListViews();
  }, []);

  return (
    <main>
      <Galery />
      <Info />
    </main>
  );
};
