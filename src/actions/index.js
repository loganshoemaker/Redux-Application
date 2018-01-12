import { ADDITION, SUBTRACTION, CHECKVALIDITY } from "../constants/action-types";

const addition = () => ({
    type: ADDITION,
})

const checkvalidity = (data) => (
    {
        type: CHECKVALIDITY,
        payload: data,
    })

const subtraction = () => ({
    type: SUBTRACTION,
})

export { addition, checkvalidity, subtraction };
