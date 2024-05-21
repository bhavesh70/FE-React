import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";

const useRestroMenu = resId => {
    const [menuDetails, setDetails] = useState([])

    
    console.log(resId);
    useEffect( () => {
        getMenuDetailData();
    },  [])

    const getMenuDetailData = async () => {
        const data = await fetch(MENU_URL + resId);
        const jsonData = await data.json();
        console.log(jsonData.data.cards);

        setDetails(jsonData.data.cards)
    }

    return menuDetails;
}

export default useRestroMenu;