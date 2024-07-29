type StateType = {
    num1: number,
    num2: number,
    res: number
}
type ActionType = {
    type: "Addition" | "Subtraction" | "Multiplication" | "Division" | "Modulo",
    payload: {
        num1: number, 
        num2: number
    }
}

export const InitialState: StateType = {
    num1: 0,
    num2: 0,
    res: 0
}

export const Reducer = (state:StateType, action:ActionType):StateType => {
    const {num1, num2} = action.payload;
    switch(action.type) {
        case "Addition" : 
            return {
                ...state,
                res: num1 + num2
            }
        case "Subtraction" : 
            return {
                ...state,
                res: num1 - num2
            }
        case "Multiplication" : 
            return {
                ...state,
                res: num1 * num2
            }
        case "Division" : 
            return{
                ...state,
                res: num2 !== 0 ? num1 / num2 : 0
            }
        case "Modulo" : 
            return {
                ...state,
                res: num2 !== 0 ? num1 % num2 : 0
            }
        default : 
            return state;
    }
}