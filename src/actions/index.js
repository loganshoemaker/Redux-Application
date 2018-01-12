import { ADDITION, SUBTRACTION, UPDATEINPUTMESSAGE } from "../constants/action-types";

const addition = () => ({
    type: ADDITION,
})

const updateInputMessage = (data) => ({
    type: UPDATEINPUTMESSAGE,
    payload: data,
})

const subtraction = () => ({
    type: SUBTRACTION,
})

export { addition, subtraction, updateInputMessage };
