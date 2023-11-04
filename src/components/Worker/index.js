import './Worker.css'

export const Worker = ({name,imagePath,work,backgColor}) => {
    //imagePath = 'https://github.com/vitoralho.png'
    //console.log("",name,imagePath,work)
    return (
        <div className='worker'>
            <div className='header' style={{backgroundColor:backgColor}}>
                <img src= {imagePath} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{work}</h5>
            </div>
        </div>
    )
}

