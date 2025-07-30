import Banner from "./Banner";
import Recommended from "./Recommened";
import TopSellers from "./TopSellers";


const Home = () => {
    return (
        <div>
            <Banner/>
            <TopSellers />
            <Recommended />
        </div>
    );
};

export default Home;