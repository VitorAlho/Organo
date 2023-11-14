import { useState } from 'react';
import {Banner} from './components/Banner';
import { Form } from './components/Form';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams,setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programming',
      color: '#D9F7E9'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#E8F8FF'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#F0F8E2'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#FDE7E8'
    },
    {
      id: uuidv4(),
      name: 'Ux e Design',
      color: '#FAE9F5'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFF5D9'
    },
    {
      id: uuidv4(),
      name: 'Manage and Inovation',
      color: '#FFEEDF'
    }
  ]);

  const [coworkers, setCoworkers] = useState([])

  const toNewAddedCoworker = (coworker) => {
    //console.log(coworker)

    setCoworkers((prevState)=>[...prevState,coworker])
    //setCoworkers([...coworker,coworker])
    //console.log(coworkers)
  }

  const toDeleteCoworker = (id) => {
    //debugger
    //console.log(coworkers)
    setCoworkers(coworkers.filter(coworker=> coworker.id !== id ))
    
  }

  function changeTeamColor(color,id) {
    //debugger
    setTeams(teams.map(team =>{
      if(team.id === id){
        team.color = color;
      }
      return team;
    }));
  }

  function registerNewTeam(newTeam){
    setTeams([...teams,{...newTeam,id:uuidv4()}])
  }

  function toFavorite(id){
    setCoworkers(coworkers.map(coworker=>{
      if(coworker.id === id) {coworker.favorite = !coworker.favorite;}
      return coworker;
    }))
  }

  return (
    <div className="App">
      <Banner/>        
      <Form 
        teams={teams.map(team => team.name)} 
        newRegisteredCoworker={coworker => toNewAddedCoworker(coworker)}
        registerNewTeam ={registerNewTeam}
      />

      {teams.map((team,index) =>{

        const teamMembers = coworkers.filter(coworker => coworker.team === team.name)
        //console.log("TeamMembers",teamMembers)
        if(teamMembers.length){
          return (
            <Team 
              changeColor = {changeTeamColor}
              key={index} 
              id={team.id}
              name={team.name} 
              color={team.color} 
              coworkers={teamMembers}
              toDelete={toDeleteCoworker}
              toFavorite={toFavorite}
            />
          )
        }   
        return ''     
      })}
      
      <Footer/>
    </div>
  );
}

export default App;
