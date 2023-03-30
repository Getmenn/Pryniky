import "./preloader.scss"
import circle from '../../assets/circle.svg'

const Preloader: React.FC = () => {
    
    return (  
        <div className='container'>
            <img src={circle} alt='circle'/>
        </div>
    )
};

export {Preloader};