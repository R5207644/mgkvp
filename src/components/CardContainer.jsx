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
                    <Card iconLink="fa-solid fa-dharmachakra" iconText="GRIEVANCE REDRESSAL "/>
                    <Card iconLink="fa-regular fa-file" iconText="Time Table"/>
                    <Card iconLink="fa-solid fa-graduation-cap" iconText="Evaluation/Result"/>
                    <Card iconLink="fa-regular fa-file" iconText="Syllabus"/>
                </div>

                <div className="Card-Row">
                    <Card iconLink="fa-regular fa-folder" iconText="Research (Ph.D) "/>
                    <Card iconLink="fa-regular fa-file" iconText="ABC"/>
                    <Card iconLink="fa-regular fa-file" iconText="Policy"/>
                    <Card iconLink="fa-regular fa-file" iconText="National Education Policy"/>
                </div>

                <div className="Card-Row">
                    <Card iconLink="fa-regular fa-gem" iconText="MGKVP ACTIVITY CLUB"/>
                    <Card iconLink="fa-solid fa-book" iconText="E-Library"/>
                    <Card iconLink="fa-solid fa-graduation-cap" iconText="Webinar"/>
                    <Card iconLink="fa-solid fa-graduation-cap" iconText="Webinar Content"/>
                </div>

                <div className="Card-Row">
                <    Card iconLink="fa-regular fa-file" iconText="Right to information (RTI)"/>
                    <Card iconLink="fa-regular fa-file" iconText="News Services"/>
                    <Card iconLink="fa-solid fa-dharmachakra" iconText="Incubation Center"/>
                    <Card iconLink="fa-solid fa-medal" iconText="University Sport Council"/>
                </div>

                <div className="Card-Row">
                <    Card iconLink="fa-solid fa-book-open-reader" iconText="Central Library"/>
                    <Card iconLink="fa-solid fa-book-atlas" iconText="Research and Development"/>
                    <Card iconLink="fa-regular fa-user" iconText="Practical Marks Posting"/>
                    <Card iconLink="fa-solid fa-check-square" iconText="Copy Code Correction"/>
                </div>

            </div>
            
        </div>
    );
}