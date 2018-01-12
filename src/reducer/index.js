import { ADDITION, CHECKVALIDITY, SUBTRACTION } from "../constants/action-types";
import { longEnough } from "../validation";

const initialState = {
    count: 0,
    inputValid: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDITION:
            return { ...state, count: state.count + 1 };
        case CHECKVALIDITY:
            return { ...state, inputValid: longEnough(action.payload), }
        case SUBTRACTION:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
};

export default rootReducer;
