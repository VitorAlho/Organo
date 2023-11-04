import { useState } from 'react';
import { Button } from '../Button';
import { FloatList } from '../FloatList';
import {TextField} from '../TextField'
import './Form.css'

export const Form = (props) => {

    const [name,setName] = useState('');
    const [work,setWork] = useState('');
    const [image,setImage] = useState('');
    const [team,setTeam] = useState('');

    const toSave = (event) => {
        event.preventDefault();
        //console.log('To Save =>',name,work,image,team);
        props.newRegisteredCoworker({
            name,
            work,
            image,
            team
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
                <TextField 
                    required={true} 


                    
                    label="Name" 
                    placeholder="Type your name"
                    value={name}
                    setValue={value=> setName(value)}
                />    
                <TextField 
                    required={true} 
                    label="Work" 
                    placeholder="Type your work"
                    value={work}
                    setValue={value=> setWork(value)}
                />    
                <TextField 
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
        </section>
    );
} 