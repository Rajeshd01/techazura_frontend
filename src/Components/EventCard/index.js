import { useNavigate } from "react-router-dom";
import './index.css';


export default function EventCard({ event }) {

    const navigate = useNavigate()

    return (
        <div
            className="event-card"
            onClick={() => {
                navigate(`/detail`, { state: event })
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

            }}
        >
            <div className="event-img">
                <img src={event.image} alt={event.name} />
            </div>
            <div className="event-content">
                <h3>{event.name}</h3>
                <div>
                    <p>Duration: {event.duration}</p>
                    <button>View</button>
                </div>
            </div>

        </div>)
}