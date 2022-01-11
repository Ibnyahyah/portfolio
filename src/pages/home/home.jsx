import About from '../../component/about/about';
import Contact from '../../component/contact/contact';
import Footer from '../../component/footer/footer';
import Navbar from '../../component/nav-bar/nav';
import Project from '../../component/project/project';
import Technologies from '../../component/technologies/technologies';
import Testimony from '../../component/testimony/testimony';
import TopSection from '../../component/top-section/top-section';

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <TopSection/>
            <Project/>
            <Technologies/>
            <About/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Home