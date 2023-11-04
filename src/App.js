import { useState } from 'react';
import {Banner} from './components/Banner';
import { Form } from './components/Form';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programming',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06869',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Ux e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Manage and Inovation',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [coworkers, setCoworkers] = useState([])

  const toNewAddedCoworker = (coworker) => {
    //console.log(coworker)

    setCoworkers((prevState)=>[...prevState,coworker])
    //setCoworkers([...coworker,coworker])
    //console.log(coworkers)
  }

  return (
    <div className="App">
      <Banner/>        
      <Form teams={teams.map(team => team.name)} newRegisteredCoworker={coworker => toNewAddedCoworker(coworker)}/>

      {teams.map(team =>{

        const teamMembers = coworkers.filter(coworker => coworker.team === team.name)
        //console.log("TeamMembers",teamMembers)
        if(teamMembers.length){
          return (
            <Team 
              key={team.name} 
              name={team.name} 
              primaryColor={team.primaryColor} 
              secondaryColor={team.secondaryColor}
              coworkers={teamMembers}
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
