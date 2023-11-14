
import {AiFillCloseCircle, AiFillHeart, AiOutLineHeart, AiOutlineHeart} from 'react-icons/ai';
import './Worker.css'

export const Worker = ({coworker,backgColor,toDelete,toFavorite}) => {
    //imagePath = 'https://github.com/vitoralho.png'
    console.log("",coworker.name,coworker.image,coworker.work)
    //debugger
    return (
        <div className='worker' >
            <AiFillCloseCircle 
                size={25} 
                className="delete" 
                onClick={()=>(toDelete(coworker.id))}/>
            <div className='header' style={{backgroundColor:backgColor}}>
                <img src= {coworker.image} alt={coworker.name} />
            </div>
            <div className='footer'>
                <h4>{coworker.name}</h4>
                <h5>{coworker.work}</h5>                
                <div className='favorite'>
                   {coworker.favorite ? <AiFillHeart onClick={()=>{toFavorite(coworker.id)}} color='#ff0000'/> : <AiOutlineHeart onClick={()=>{toFavorite(coworker.id)}} color='#000000'/>}
                </div>
            </div>
        </div>
    )
}

