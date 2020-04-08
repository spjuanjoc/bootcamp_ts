import React, { useRef} from "react";
import './Form.css'

interface IForm {
    onAdd: (text:string) => void;
}

const Form: React.FC<IForm> = (props) => {
    const textRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if(textRef.current) {
            const enteredText = textRef.current.value;
            // console.log(enteredText);
            props.onAdd(enteredText);
        }
        else {
            console.log("Null current");
        }

    };

    return (<form onSubmit={submitHandler}>
        <div>
            <label htmlFor="Form text">Form text</label>
            <input type="text" id="form-text" ref={textRef}/>
        </div>
        <button type="submit">Add entry</button>
    </form>);
};

export default Form;
