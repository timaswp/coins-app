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
    };
};

const optionsLoaded = (obj) => {
    return {
        type: 'OPTIONS_LOADED',
        payload: obj
    };
};

const optionsRequested = () => {
    return {
        type: 'OPTIONS_REQUESTED'
    };
};

const coinsRequested = () => {
    return {
        type: 'COINS_REQUESTED'
    };
};

const coinsLoaded = (newCoinsList) => {
    return {
        type: 'COINS_LOADED',
        payload: newCoinsList
    };
};

export {
    catalogLoaded,
    catalogRequested,
    toggleFilter,
    optionsLoaded,
    optionsRequested,
    coinsLoaded,
    coinsRequested
};