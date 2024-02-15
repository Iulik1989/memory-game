import React, {useEffect, useState} from "react";
import {getCatsItems} from "../api/cats.ts";

interface CardItem {
    url: string;
    id: string;
}

export type CatsContent = {
    items: CardItem[]
    getCats: () => void
}

const defaultValue = {
    items: [],
    getCats: () => {}
}

export const CatsContext = React.createContext<CatsContent>(defaultValue)

export const CatsProvider = ({children}: any) => {
    const [items, setItems] = useState([])

    const getCats = () => {
        getCatsItems().then((data) => {
            data.length = 6
            setItems(data)
        }).catch((err) => console.log(err))
    }

    useEffect(()=>{
        getCats()
    },[])

    return (
        <CatsContext.Provider value={{
            items,
            getCats,
        }}>
            {children}
        </CatsContext.Provider>
    )
}
