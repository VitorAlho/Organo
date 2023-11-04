
import { Worker } from '../Worker'
import './Team.css'

export const Team = (props) => {

    const css = {backgroundColor: props.secondaryColor}
    return (
        <section className='team' style={css}>
            <h3 style={{borderColor:props.primaryColor}}>{props.name}</h3>
            <div className='coworkers'>
                {props.coworkers.map(coworkers => <Worker backgColor={props.primaryColor} key={coworkers.name} name={coworkers.name} imagePath={coworkers.image} work={coworkers.work}/>)}
            </div>
        </section>
    )
}
