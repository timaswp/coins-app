const initialState = {
    categories: [],
    loading: true,
    error: false,
    filterIsOpen: false,
    advancedOptions: {},
    coins: {
        count: 0,
        data: []
    },
    coin: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CATALOG_LOADED':
            return {
                ...state,
                categories: action.payload,
                loading: false
            };
        case 'CATALOG_REQUESTED':
            return {
                ...state,
                categories: state.categories,
            };
        case 'LOADING_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            };
        case 'TOGGLE_FILTER':
            return {
                ...state,
                filterIsOpen: !state.filterIsOpen
            };
        case 'OPTIONS_LOADED':
            return {
                ...state,
                advancedOptions: action.payload
            };
        case 'OPTIONS_REQUESTED':
            return {
                ...state,
                advancedOptions: state.advancedOptions,
            };
        case 'COINS_LOADED':
            return {
                ...state,
                coins: action.payload,
                loading: false
            };
        case 'COINS_REQUESTED':
            return {
                ...state,
                coins: state.coins,
            };
        case 'COIN_LOADED':
            return {
                ...state,
                coin: action.payload,
                loading: false
            };
        case 'COIN_REQUESTED':
            return {
                ...state,
                coin: state.coin,
            };
        default:
            return state;
    }
};

export default reducer;