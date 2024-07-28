import { useReducer } from "react";
import { InitialState, Reducer } from "./Reducer";

export const Counter = () => {
    const [state, dispatch] = useReducer(Reducer, InitialState);

    const Increment = (): void => {
        dispatch ({
            type: "Increment",
            payload: 1
        })
    }
    
    const Decrement = (): void => {
        dispatch ({
            type: "Decrement",
            payload: 1
        })
    }
    return (
        <>
            <button onClick={Increment}>+</button>
            <h1>{state.count}</h1>
            <button onClick={Decrement}>-</button>
        </>
    );
}