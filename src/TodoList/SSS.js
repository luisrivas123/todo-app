import React from "react";
import './TodoList.css';

function TodoList(props) {
    return(
        <section className="TodoList-container">
            {/* si el componente app tiene un error utiliza la render prop onError*/}
            {props.error && props.onError()}
            {/* si el componente app esta cargando utiliza la render prop onLoading*/}
            {props.loading && props.onLoading()}
            
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.lenght) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map(renderFunc)}
        </section>
    );
}

export { TodoList };