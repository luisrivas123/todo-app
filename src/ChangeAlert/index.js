import React from "react";
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };