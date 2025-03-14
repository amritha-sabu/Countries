import './Card.css';
import Countries from './Countries';

const Card = ({name, flag}) => {
    return (
        <div className='countryCard'>
            <img className='image' src={flag} alt={name}/>
            <h2>{name}</h2>
        </div>
    );
};

export default Card;