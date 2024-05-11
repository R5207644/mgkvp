import Gandhiji from '../assets/img/Gandhiji.png';
import './QuoteSection.css';

export default function QuoteSection() {
    return(
        <div className="QuoteSection">
            <div className="QuoteImage">
                <img src={Gandhiji} alt="Gandhiji" />
            </div>
            <div className="QuoteText">
                <p>
                "Literacy in itself is no education. Literacy is not the end of education or even the beginning. By education I mean an all-round drawing out of the best in the child and man-body, mind and spirit."
                </p>
                <em>- Mahatma Gandhi</em>
            </div>
        </div>
    );
}