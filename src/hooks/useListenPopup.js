import React, { useEffect, useState } from 'react'

export const useListenPopup = ({callBack}) => {
    const [listenPopup, setListenPopup] = useState({});

    window.addEventListener("message", (e) => {
        window.popup && e.data.active && setListenPopup(e.data);
    });

    useEffect(() => {
        listenPopup && listenPopup.active && callBack(listenPopup.id);
    }, [listenPopup]);

}
