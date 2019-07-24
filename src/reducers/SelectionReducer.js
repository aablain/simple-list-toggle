export default (state = null, action) => {
    switch (action.type) {
        case "SELECT_LIBRARY":
            if (state === action.payload) {
                return null;
            }
            return action.payload;
        default:
            return state;
    }
}