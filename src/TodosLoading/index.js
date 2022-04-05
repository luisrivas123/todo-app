import React from "react";
import './TodosLoading.css';

function TodosLoading () {
    return (
        <div>
            <span className="LoadinTodo-container"></span>
            <p className="LoadingTodo-text">Cargando TODOs</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export { TodosLoading };