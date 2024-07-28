/*Create The Action Types and State Types*/
type StateType = {
    count: number
}
type ActionType = {
    type: "Increment",
    payload: number
} | {
    type: "Decrement",
    payload: number
}

export const InitialState: StateType = {
    count: 0
}
export const Reducer = (state: StateType, action: ActionType): StateType => {
    switch(action.type) {
        case "Increment" :
            return {
                count: state.count + action.payload
            }
        case "Decrement" :
            return {
                count: state.count - action.payload
            }
        default : 
            return state;
    }
}