import './Card.css';

export default function Card({iconLink, iconText, cardStyle}) {
    return (
        <div className="Card" style={{backgroundColor:cardStyle}}>
            <i className={iconLink}></i>
            <h4>{iconText}</h4>
        </div>
    );
}