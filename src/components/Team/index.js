
import { Worker } from '../Worker'
import './Team.css'
import hexToRgba from 'hex-to-rgba'

export const Team = (props) => {
    //debugger
    const css = {backgroundColor: hexToRgba(props.color,'0.6')}
    return (
        <section className='team' style={css}>
            
            <input value={props.color} onChange={event=> props.changeColor(event.target.value,props.id)} type='color' className='input-color'/>
            <h3 style={{borderColor:props.color}}>{props.name}</h3>
            <div className='coworkers'>
                {props.coworkers.map((coworkers,index) => {
                    //console.log(coworkers)
                    return (                        
                        <Worker backgColor={props.color} 
                                            key={index} 
                                            coworker={coworkers}
                                            toDelete={props.toDelete}
                                            toFavorite={props.toFavorite}
                        />
                    )
                })}
            </div>
        </section>
    )
}
