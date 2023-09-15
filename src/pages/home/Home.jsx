import Address from "../../components/templates/address/Address";
import Contact from "../../components/templates/Contact/Contact";
import Footer from "../../components/templates/footer/Footer";
import { Header } from "../../components/templates/header";

function Home(){
    return(
    <>
        <Header/>
        <Address/>
        <Contact/>
        <Footer />
    </>
    );
}
export default Home;