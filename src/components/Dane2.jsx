import React from "react";
function Dane2(props) {
    return (
        <div className={props.class1}>
            <div className={props.class2}>
                <h2 className={props.class3} >{props.name}</h2>
                <p className={props.class4}> {props.opis}</p>
                <a className={props.class5} href='#'><button className={props.but2}>Ucz się 7 dni za darmo </button></a>
                <img src={props.link} alt="" className={props.classzdj}></img>
            </div>
        </div>
    );
}
export default Dane2

