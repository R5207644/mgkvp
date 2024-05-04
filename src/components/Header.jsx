import "./Header.css";
import HeaderRow from "./HeaderRow";
import HeaderRow2 from "./HeaderRow2";
import IconList from "./IconList";

export default function Header() {
    return (
        <div>
            <HeaderRow />
            <IconList />
            <HeaderRow2 />
            <div>
                <input type="text" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}