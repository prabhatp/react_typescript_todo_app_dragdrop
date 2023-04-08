import './styles.css';
import {useRef} from 'react';

type InputFieldProps = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (event: React.FormEvent) => void
}


const InputField = ({todo, setTodo, handleAdd}: InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur()
            }}>
            <input ref={inputRef} type="input" placeholder="Enter a task" className="input__box" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="input__submit">Go</button>
        </form>
    )
}

export default InputField