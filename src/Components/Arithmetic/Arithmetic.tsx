import { useReducer } from "react";
import { InitialState, Reducer } from "./Reducer";
import { Code1 } from "./Code1";
export const Arithmetic: React.FC = () => {
    const [state, dispatch] = useReducer(Reducer, InitialState);

    const SubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let form = e.target as HTMLFormElement;
        let formdata = new FormData(form);
        let formobj = Object.fromEntries(formdata.entries());

        const num1 = parseInt(formobj.num1 as string);
        const num2 = parseInt(formobj.num2 as string);
        const operation = formobj.option as string;

        switch (operation) {
            case "Addition":
                dispatch({
                    type: "Addition",
                    payload: { num1, num2 }
                });
                break;

            case "Subtraction":
                dispatch({
                    type: "Subtraction",
                    payload: { num1, num2 }
                })
                break;

            case "Multiplication":
                dispatch({
                    type: "Multiplication",
                    payload: { num1, num2 }
                })
                break;

            case "Division":
                dispatch({
                    type: "Division",
                    payload: { num1, num2 }
                })
                break;

            case "Modulo":
                dispatch({
                    type: "Modulo",
                    payload: { num1, num2 }
                })
                break;

            default:
                break;
        }

    }
    return (
        <>
            <form onSubmit={SubmitHandler}>
                <input required name="num1" type="text" />
                <select name="option">
                    <option value="Addition">+</option>
                    <option value="Subtraction">-</option>
                    <option value="Multiplication">*</option>
                    <option value="Division">/</option>
                    <option value="Modulo">%</option>
                </select>
                <input required name="num2" type="text" />
                <input type="submit" value="Go" />
                <input readOnly type="text" value={isNaN(state.res) ? "" : state.res.toString()} />
            </form>

            <div>
                <Code1 />
            </div>
        </>
    );
}