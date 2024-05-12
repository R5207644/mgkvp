import CardContainer from '../CardContainer.jsx';
import Corousel from "../Corousel.jsx";
import Header from "../Header.jsx";
import Nav from "../Nav/Nav.jsx";
import NavMarque from "../Nav/NavMarque.jsx";
import HeaderContainer from "./HeaderContainer";


export default function HeaderContainee() {
    return (
        <>
        <Header />
        <HeaderContainer/>
        <Nav />
        <NavMarque />
        <Corousel />
        <CardContainer />
        </>
    );
}