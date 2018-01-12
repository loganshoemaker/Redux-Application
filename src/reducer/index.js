import { ADDITION, SUBTRACTION } from "../constants/action-types";

const initialState = {
    count: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDITION:
            return { ...state, count: state.count + 1 };
        case SUBTRACTION:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
};

export default rootReducer;
