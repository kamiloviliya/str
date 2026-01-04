import { useState, useEffect } from "react";
import './Mobile.css' ;


function ВерхнийБлок () {
    return (
    <div className="фото22">
        <div className="верхнийБар">Ле круассан</div>
        <div className="текстБаланс">Баланс</div>
        <div className="баланс">8
            <div className="круассан"/>
        </div>
        <div className="окноПриложений22">
            <div className="прил п1"/>
            <div className="прил п2"/>
            <div className="прил п3"/>
            <div className="прил п4"/>
            <div className="прил п5"/>
            <div className="прил п6"/>
        </div>
        <div className="окноКатегорий22">
            <div className="категория">Классика</div>
            <div className="категория">Авторское</div>
            <div className="категория">Горячее</div>
            <div className="категория">Десерты</div>
        </div>
        <div className="нижнийБар"/>
    </div>
)
}




function Mobile (){
    return (
    <div className="фонМоб">
            <ВерхнийБлок/>   
        <div className="блокКарт">
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>
            <div className="карта"/>

        </div>
    </div>
)

}

export default Mobile;