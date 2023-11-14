import { useState } from 'react';
import { Button } from '../Button';
import { FloatList } from '../FloatList';
import {Field} from '../Field'
import './Form.css'
import { v4 as uuidv4 } from 'uuid';

export const Form = (props) => {

    const [name,setName] = useState('');
    const [work,setWork] = useState('');
    const [image,setImage] = useState('');
    const [team,setTeam] = useState('');
    const [teamName,setTeamName] = useState('');
    const [teamColor,setTeamColor] = useState('#000000');

    const toSave = (event) => {
        event.preventDefault();
        const id = uuidv4();
        const favorite = false;
        //console.log('To Save =>',name,work,image,team);
        props.newRegisteredCoworker({
            id,
            name,
            work,
            image,
            team,
            favorite
        })
       
        setName('')
        setWork('')
        setImage('')
        setTeam('')
    }
    //console.log(props.teams)

    return (
        <section className="form">
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field 
                    required={true}                     
                    label="Name" 
                    placeholder="Type your name"
                    value={name}
                    setValue={value=> setName(value)}
                />    
                <Field 
                    required={true} 
                    label="Work" 
                    placeholder="Type your work"
                    value={work}
                    setValue={value=> setWork(value)}
                />    
                <Field 
                    required={true} 
                    label="Image" 
                    placeholder="Type your image path"
                    value={image}
                    setValue={value=> setImage(value)}
                />  
                <FloatList 
                    required={true} 
                    label="Team" 
                    itens={props.teams}
                    value={team}
                    setValue={value=>setTeam(value)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
            <form onSubmit={(event)=>{
                event.preventDefault();
                props.registerNewTeam({name: teamName, color: teamColor})
                setTeamName('')
                setTeamColor('')
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Field 
                    required={true}  
                    type='text'                   
                    label="Team name" 
                    placeholder="Type new team name"
                    value={teamName}
                    setValue={value=> setTeamName(value)}
                />    
                <Field 
                    required={true} 
                    type='color'
                    label="Color" 
                    placeholder="Type your team color"
                    value={teamColor}
                    setValue={value=> setTeamColor(value)}
                />                    
                <Button>
                    Create new team
                </Button>
            </form>
        </section>
    );
} 