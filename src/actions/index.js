const catalogLoaded = (newCatalog) => {
    return {
        type: 'CATALOG_LOADED',
        payload: newCatalog
    };
};

const catalogRequested = () => {
    return {
        type: 'CATALOG_REQUESTED'
    };
};

const toggleFilter = () => {
    return {
        type: 'TOGGLE_FILTER'
    }
};

const optionsLoaded = (obj) => {
    return {
        type: 'OPTIONS_LOADED',
        payload: obj
    }
};

const optionsRequested = () => {
    return {
        type: 'OPTIONS_REQUESTED'
    };
};

export {
    catalogLoaded,
    catalogRequested,
    toggleFilter,
    optionsLoaded,
    optionsRequested
};