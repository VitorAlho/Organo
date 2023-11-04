import './TextField.css'

export const TextField = (props) => {
     
    const Typing = (event) => {
        props.setValue(event.target.value);
        //console.log(value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={Typing} required={props.required}  placeholder={props.placeholder}/>
        </div>
    );
}