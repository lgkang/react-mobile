import actionsTypes from "../constants/actionTypes";

const initState = {
    record: {
        a: 1,
        b: 2
    }
};
export default (state = initState, action) => {
    switch (action.type) {
        case actionsTypes.HOME_PHOTO_RECORD:
            const record = action.record;
            return {...state, record};
            break;
        default:
            return state;
    }
};
