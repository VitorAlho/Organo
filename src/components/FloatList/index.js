import './FloatList.css'

export const FloatList = (props) => {
    //console.log(props.itens)
    return (
        <div key={props.label} className='floatlist'>
            <label >{props.label}</label>
            <select onChange={event => props.setValue(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>        
    );
}