const initialState = {
    categories: [],
    loading: true,
    error: false,
    filterIsOpen: false,
    advancedOptions: {},
    coins: []
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
                coins: action.payload
            };
        case 'COINS_REQUESTED':
            return {
                ...state,
                coins: state.coins,
            };
        default:
            return state;
    }
};

export default reducer;