//CustomHook encargado de cargar las imagenes
import { useEffect, useState } from "react";
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) =>{
    
    const [state, setState] = useState({
     data: [],
     loading: true
    });
    
    //useEffect me permite ejecutar cierto codigo de manera condicional
    //en este caso cuando cambie la categoria
    useEffect(() => {    
        getGifs(category)        //hago la peticion
            .then(img =>{
                setTimeout(()=>{
                    setState({
                        data: img,
                        loading: false
                    });
                }, 1000);

            })
    },[category]) //con el array vacio indico que no tengo niguna dependencia, entonces el getGifs se va a disparar 1 sola vez

    return state; //{data:[], loading: true}
}