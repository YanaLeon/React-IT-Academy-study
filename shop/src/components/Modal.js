import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { load, add } from "../redux/basketSlice.js";

import $ from 'jquery'; 

export default function Modal() {
    
    const basket = useSelector( state => state.basket );
    const dispatch = useDispatch();
    const addBasket = useSelector( state => state.basket.addBasket );
    const loaded = useSelector( state => state.basket.loaded );
    console.log(loaded)

    useEffect(() => {
        console.log(addBasket)
        if(addBasket) {
            basketUpdate();
        }
        
    }, [addBasket]);

    function basketUpdate() {
    
        let ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
        let basketName = 'LEONOVICH_SHOP';
        let updatePassword;
        
        function send () {
            updatePassword = Math.random();
            $.ajax({
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'LOCKGET', n : basketName, p : updatePassword },
                success : lockGetReady, error : errorHandler
            });
        }
        send()
        
        function lockGetReady(callresult) {
            if ( callresult.error != undefined )
                 console.log(callresult.error);
            else {
                $.ajax({
                    url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                    data : { f : 'UPDATE', n : basketName,
                    v : JSON.stringify(basket), p : updatePassword },
                    success : updateReady, error : errorHandler
                });
            }
        }
        
        function updateReady(callresult) {
            if ( callresult.error != undefined ) {
                console.log(callresult.error);
            } else {
                console.log('sd')
                dispatch(load(true))
            }
        }
        
        function errorHandler(jqXHR,statusStr,errorStr) {
            console.log(errorStr);
        }
    };

    function closeModal () {
        dispatch(add(false));
        dispatch(load(false))
    }

    function modalWindowClick(eo) {
        eo.stopPropagation();
    }

  return (
    <div className={loaded?"SModalGlassGet":"SModalGlass"}>
        <div className="SModalWindow" onClick={modalWindowClick}>
            <p className="SModalText">{loaded?"The product has been successfully added to the basket":"не успешно"}</p>
            <input type="button" className="SModalInput" defaultValue={"Continue shopping"} onClick={closeModal}/>
            </div>
    </div>
  )
}
