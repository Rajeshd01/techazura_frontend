import { monthNames } from '../../utils/constants'
import date from '../../Assets/date.png'
import duration from '../../Assets/duration.png'
import venue from '../../Assets/venue.png'
import group from '../../Assets/group.png'
import phone from '../../Assets/phone.png'
import start from '../../Assets/start.png'
import price from '../../Assets/price.png'
import './index.css'

function Overview({ data }) {


    const eventdate = new Date(data.timing)
    const monthIndex = eventdate.getMonth();
    const monthName = monthNames[monthIndex];
    const day = eventdate.getDate();
    const minutes = eventdate.getMinutes();
    let hours = eventdate.getHours();
    const convertedTime = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    function addLeadingZero(value) {
        return value < 10 ? "0" + value : value;
    }




    return (
        <div className="overview-container">
            <h3>Overview</h3>
            <div className='overview-content'>

                <div className='overview-info'>
                    <img src={date} alt='date' />
                    <div className='overview-sub-content'>
                        <span>Event Date</span>
                        <p>{`${monthName}  ${day}`}</p>
                    </div>
                </div>



                <div className='overview-info'>
                    <img src={venue} alt='venue' />
                    <div className='overview-sub-content'>
                        <span>Venue</span>
                        <p>{data.venue}</p>
                    </div>

                </div>

                <div className='overview-info'>
                    <img src={duration} alt='duration' />

                    <div className='overview-sub-content'>
                        <span>Duration</span>
                        <p>{data.duration}</p>
                    </div>

                </div>

                <div className='overview-info'>
                    <img src={group} alt='group' />
                    <div className='overview-sub-content'>
                        <span>Whatapp group</span>
                       <a href={data.whatsappGroup}> <p>{data.whatsappGroup}</p></a>
                    </div>
                    
                </div>

                <div className='overview-info'>
                    <img src={phone} alt='phone' />
    
                    <div className='overview-sub-content'>
                        <span>co-ordinate number</span>
                        <p>{data.coOrdinateNumber}</p>
                    </div>

                </div>

                <div className='overview-info'>
                    <img src={start} alt='start' />
                    <div className='overview-sub-content'>
                        <span>Starts at</span>
                        <p>{`${hours}:${addLeadingZero(minutes) + ":" + convertedTime}`}</p>
                    </div>

                </div>

                <div className='overview-info'>
                    <img src={price} alt='price' />

                    <div className='overview-sub-content'>
                        <span>Price money</span>
                        <p>{start?.price === undefined ? "1000" : start?.price}</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Overview;