import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    const [status, updateStatus] = useState(true);
    useEffect(()=> {
        window.addEventListener("online", () => {
            updateStatus(true)
        })

        window.addEventListener("offline", ()=> {
            updateStatus(false)
        })
    }, [])
    return status;
}

export default useOnlineStatus;