import './Card.css';
import Countries from './Countries';

const Card = ({key, name, flag}) => {
    return (
        <div id={key} className='card'>
            <img className='image' src={flag} alt={name}/>
            <h2>{name}</h2>
        </div>
    );
};

export default Card;