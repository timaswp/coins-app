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

const loadingError = () => {
    return {
        type: 'LOADING_ERROR'
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

const coinRequested = () => {
    return {
        type: 'COIN_REQUESTED'
    };
};

const coinLoaded = (newCoin) => {
    return {
        type: 'COIN_LOADED',
        payload: newCoin
    };
};

export {
    catalogLoaded,
    catalogRequested,
    loadingError,
    toggleFilter,
    optionsLoaded,
    optionsRequested,
    coinsLoaded,
    coinsRequested,
    coinRequested,
    coinLoaded
};