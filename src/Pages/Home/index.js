import { useEffect } from "react";
import DisplayEvent from "../../Components/DisplayEvent";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import useEvent from "../../hooks/useEvent";
import "./index.css";

function Home() {


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    }, [])

    const [technical] = useEvent(`${process.env.REACT_APP_BACKEND}/api/v1/event`)
    const [nontechnical] = useEvent(`${process.env.REACT_APP_BACKEND}/api/v1/event?isTechnical=false`)


    return (
        <div className="home-container">
            <Banner />
            <DisplayEvent title="Technical Events" events={technical?.data} />
            <DisplayEvent title="Non Technical Events" events={nontechnical?.data} />
            <Footer />
        </div>
    );
}

export default Home;