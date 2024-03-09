import { useEffect, useState } from "react";



function useEvent(url,options) {
    const [event, setevent] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    


    useEffect(() => {
            const fetchevent = async() => {
                try {
                setloading(true);
    
                    const response = await fetch(url, options)
                    const data = await response.json();
                    setevent(data)
                }
                catch (error) {
                    seterror(error)
                }
                setloading(false)
                
             
            }
    
            fetchevent()
      
        
    }, [url,options])

    return [event,loading,error]
}

export default useEvent;