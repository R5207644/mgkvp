import Card from './Card.jsx';
import './CardContainer.css';

export default function CardContainer () {
    return (
        <div className="CardContainer">
            <h2>Student <b>Zone</b></h2>

            <div className="Card-Box">

                <div className="Card-Row">
                    <Card iconLink="fa-regular fa-user" iconText="Student Login"/>
                    <Card iconLink="fa-regular fa-file" iconText="Examination"/>
                    <Card iconLink="fa-regular fa-book-open" iconText="Admission"/>
                    <Card iconLink="fa-regular fa-file" iconText="NIRF"/>
                </div>

                <div className="Card-Row">
                <Card iconLink="fa-regular fa-calendar-days" iconText="Notice Board"/>
                    <Card iconLink="fa-regular fa-file" iconText="Janhit Guarntee Portal"/>
                    <Card iconLink="fa-solid fa-lock" iconText="NAD - Digilocker"/>
                    <Card iconLink="fa-solid fa-computer-mouse" iconText="E-Content / E-Learning"/>
                </div>

                <div className="Card-Row">
                <Card iconLink="fa-regular fa-calendar-days" iconText="Notice Board"/>
                    <Card iconLink="fa-regular fa-file" iconText="Janhit Guarntee Portal"/>
                    <Card iconLink="fa-solid fa-lock" iconText="NAD - Digilocker"/>
                    <Card iconLink="fa-solid fa-computer-mouse" iconText="E-Content / E-Learning"/>
                </div>

                <div className="Card-Row">
                <Card iconLink="fa-regular fa-calendar-days" iconText="Notice Board"/>
                    <Card iconLink="fa-regular fa-file" iconText="Janhit Guarntee Portal"/>
                    <Card iconLink="fa-solid fa-lock" iconText="NAD - Digilocker"/>
                    <Card iconLink="fa-solid fa-computer-mouse" iconText="E-Content / E-Learning"/>
                </div>

                <div className="Card-Row">
                <Card iconLink="fa-regular fa-calendar-days" iconText="Notice Board"/>
                    <Card iconLink="fa-regular fa-file" iconText="Janhit Guarntee Portal"/>
                    <Card iconLink="fa-solid fa-lock" iconText="NAD - Digilocker"/>
                    <Card iconLink="fa-solid fa-computer-mouse" iconText="E-Content / E-Learning"/>
                </div>

                <div className="Card-Row">
                <Card iconLink="fa-regular fa-calendar-days" iconText="Notice Board"/>
                    <Card iconLink="fa-regular fa-file" iconText="Janhit Guarntee Portal"/>
                    <Card iconLink="fa-solid fa-lock" iconText="NAD - Digilocker"/>
                    <Card iconLink="fa-solid fa-computer-mouse" iconText="E-Content / E-Learning"/>
                </div>

                <div className="Card-Row">
                    <Card iconLink="fa-regular fa-calendar-days" iconText="Notice Board"/>
                    <Card iconLink="fa-regular fa-file" iconText="Janhit Guarntee Portal"/>
                    <Card cardStyle="rgb(245, 245, 245)" />
                    <Card cardStyle="rgb(245, 245, 245)" />
                </div>
            </div>
            
        </div>
    );
}