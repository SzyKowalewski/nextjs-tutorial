import { useEffect, useState } from "react";
import Item from "./item";
import styles from "./itemList.module.css"
import { json } from "stream/consumers";


const ItemList = () => {
    const [lista, setLista] = useState([])
    useEffect(()=>{pobierz()},[])
    const pobierz = () => {
        fetch("/api/items")
            .then(resp => {return resp.json() })
            .then(dzejson => { setLista(dzejson) })
    }
    return (<div className={styles.ItemList}>
        <div className={styles.Sort}>

        </div>
        <div className={styles.Items}>
            {
                lista.length ?
                    lista.map((a) => {
                        return (<Item name={a.name}></Item>)
                    })
                    :
                    <></>
            }
        </div>
    </div>)
}
export default ItemList;