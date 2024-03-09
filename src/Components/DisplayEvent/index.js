import EventCard from "../EventCard";
import { Skeleton } from "@mui/material";
import './index.css';

function DisplayEvent({ title, events }) {
    const load = [1, 2, 3]

    return (
        <div className="event-card-container">
            <h3>{title}</h3>
            <div className="event-card-content-container">
                {
                  events ?

                events.map((event, index) => {
                    return (
                        <EventCard
                            event={event}
                            key={index} />
                    )
                }):
                
                        (load.map((box) => {
                            return (
                                <Skeleton variant="rectangular" width={300} height={200} key={box} />
                            )
                        }))
            }
            </div>
        </div>
    );
}

export default DisplayEvent;