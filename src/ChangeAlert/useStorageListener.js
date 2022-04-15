import React from "react";

function useStorageListener(sincronize) {
    const [storageChange, setStorageChange] = React.useState(false);

    // Evento de añadir TODOs

    window.addEventListener('storage', (change) =>{
        if (change.key === 'TODOS_V1') {
            console.log('Hubo cambios en TODOS_V1!');
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    };

    return {
        // Retorna el estado
        show: storageChange,
        toggleShow,
    };
}

export { useStorageListener }