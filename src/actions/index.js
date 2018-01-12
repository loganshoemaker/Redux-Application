import { ADDITION, SUBTRACTION } from "../constants/action-types";

const addition = () => ({
    type: ADDITION,
})

const subtraction = () => ({
    type: SUBTRACTION,
})

export { addition, subtraction };
