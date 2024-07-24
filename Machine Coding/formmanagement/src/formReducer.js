export const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIRST_NAME':
            return { ...state, firstName: action.payload };
        case 'SET_LAST_NAME':
            return { ...state, lastName: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        default:
            return state;
    }
};