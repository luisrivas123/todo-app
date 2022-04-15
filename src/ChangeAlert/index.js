import React from "react";
import { useStorageListener } from './useStorageListener';
// import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Hubo cambios en tus TODOs!</p>
                    <p>¿Quieres sincronizar cambios?</p>
                    <button
                        className="TodoFrom-button TodoForm-button--add"
                        onClick={() => toggleShow(false)}
                    >
                        Volver a cargar la información
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert };