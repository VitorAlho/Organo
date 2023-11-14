import './field.css'

export const Field = ({type='text',required,label,placeholder,value,setValue}) => {
     
    const Typing = (event) => {
        setValue(event.target.value);
        //console.log(value);
    }
    //debugger
    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={Typing} 
                required={required}  
                placeholder={placeholder}
            />
        </div>
    );
}