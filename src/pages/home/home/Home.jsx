import About from "../about/About";
import Banner from "../banner/Banner";
import Services from "../services/service/Services";

const Home = () => {
    return (
        <div className="mt-5 pt-5">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;