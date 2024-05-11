import Image1 from '../assets/img/first.jpg';
import './Corousel.css';
import QuoteSection from './QuoteSection';

export default function Corousel() {
    return(
        <>
        <div className="Corousel">
            <img src={Image1} alt="first" />
        </div>
        <QuoteSection />
        </>
    );
}
