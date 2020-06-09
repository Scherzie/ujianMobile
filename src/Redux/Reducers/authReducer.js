const INITIAL_STATE = {
    username: '',
    kittyList: [],
    image: '',
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.payload
            }
        case 'GET_DATA':
            return {
                ...state,
                kittyList: action.payload
            }
        case 'IMAGE':
            return {
                ...state,
                image: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                username: ''
            }
        default:
            return state;
    }
}