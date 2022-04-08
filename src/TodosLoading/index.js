import React from "react";
import './TodosLoading.css';

function TodosLoading () {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadinTodo-container"></span>
            <p className="LoadingTodo-text">Cargando TODOs</p>
            <span className="LoadingTodo-deleteIcon"></span>
            <span className="LoadindTodo-deleteIcon"></span>
        </div>
    );
}

export { TodosLoading };