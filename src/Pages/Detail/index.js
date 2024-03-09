import { useLocation } from "react-router-dom";
import "./index.css";
import Overview from "../../Components/Overview";

function Detail() {

    const location = useLocation();
    const { state } = location

    return (
        <div className="display-container">
            <div className="display-img-container">
                <img src={state.image} alt={state.name} loading="lazy"/>
            </div>
            <div className="display-content-container">
                <h2>{state.name}</h2> 
                <Overview data={state} />
                <p><span>Description:</span> {state.description}</p>
                <p><span>Task:</span> {state.task}</p>
            </div>
        </div>
    );
}

export default Detail;