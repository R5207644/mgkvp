import Globe from "../../assets/img/Globe.gif";
import MgkvpLogo from "../../assets/img/MgkvpLogo.png";
import "./HeaderContainer.css";

export default function HeaderContainer() {
    return (
        <div className="HeaderContainer">
            <div className="img1">
                <img src={MgkvpLogo} alt="mgkvp-logo" />
            </div>
            <div className="Heading">
                <h2 style={{fontSize : '1.9rem', color: 'darkBlue'}}>MAHATMA GANDHI KASHI VIDYAPITH, VARANASI</h2>
                <span style={{fontSize : '1.9rem', color: 'red', fontWeight:700}}>महात्मा गांधी काशी विद्यापीठ, वाराणसी</span>
                <h5 style={{fontSize : '1.12rem', color: 'black'}}>(A Uttar Pradesh State University)</h5>
            </div>
            <div className="img2">
                <img src={Globe} alt="" />
            </div>
        </div>
    );
}