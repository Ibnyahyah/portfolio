import About from '../../component/about/about';
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
            <Footer/>
        </div>
    )
}
export default Home