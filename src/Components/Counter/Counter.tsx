import { useReducer } from "react";
import { InitialState, Reducer } from "./Reducer";
import '../Style/Counter.css';
export const Counter:React.FC = () => {
    const [state, dispatch] = useReducer(Reducer, InitialState);

    const Increment = (): void => {
        dispatch({
            type: "Increment",
            payload: 1
        })
    }

    const Decrement = (): void => {
        dispatch({
            type: "Decrement",
            payload: 1
        })
    }
    return (
        <>
            <div className="CDIV">
                <button onClick={Increment} className="plus btn">+</button>
                <h1 className="ph1">{state.count}</h1>
                <button onClick={Decrement} className="minus btn">-</button>
            </div>
        </>
    );
}