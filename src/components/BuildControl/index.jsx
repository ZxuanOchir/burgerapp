import React from "react";
import css from './style.module.css'

const BuildControl = (props) => {
    return(
        <div className={css.BuildControl}>
            <div className={css.Label}>{props.orts}</div>
            <button disabled={props.disabled[props.type]} 
                    className={css.Less} 
                    onClick={()=>props.ortsHasah(props.type)}>Хасах
            </button>
            <button className={css.More} onClick={()=>props.ortsNemeh(props.type)}>Нэмэх</button>
        </div>
    )
}

export default BuildControl;