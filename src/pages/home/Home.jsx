import { Link } from "react-router-dom";
import Address from "../../components/templates/address/Address";
import Advantage from "../../components/templates/advantages/Advantage";
import Contact from "../../components/templates/Contact/Contact";
import Footer from "../../components/templates/footer/Footer";
import { Header } from "../../components/templates/header";
import Infos from "../../components/templates/infos/Infos";
import Discounts from "../../components/templates/production/Discounts";
import Models from "../../components/templates/production/Models";
import Technology from "../../components/templates/texnology/Tecnology";

function Home(){
    return(
    <>
        <Header/>
        <Infos/>
        <Models/>
        <Discounts/>
        <Technology/>
        <Advantage/>
        <Address/>
        
        <Contact/>
        <Footer />
    </>
    );
}
export default Home;