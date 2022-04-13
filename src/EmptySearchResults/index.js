import React from "react";

function EmptySearchResults ({ searchValue }) {
    return <p>¡No hay Resultados para {searchValue}!</p>;
}

export { EmptySearchResults };