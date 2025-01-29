
interface InputProps {
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

function Input({ value, onChange, placeholder }: InputProps) {

    return (
        <div className="input-group mb-3">
            <span className="input-group-text">S/.</span>
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type="number" name="valor2"
                className="form-control"
                aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    );

}

export default Input;
