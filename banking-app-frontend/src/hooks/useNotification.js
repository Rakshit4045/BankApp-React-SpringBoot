import { useEffect } from 'react';
import { ToastContainer, toast} from 'react-toastify';

const useNotification = (toastType, toastMsg) => {
    useEffect(() => {
        if(toastType === "success"){
            toast.success(toastMsg, 
                {position: toast.POSITION.TOP_CENTER, toastId: 'success1',});
        }else if(toastType === "danger"){
            toast.error(toastMsg, 
                {position: toast.POSITION.TOP_CENTER, toastId: 'success1',});
        }else if(toastType === "warning"){
            toast.warning(toastMsg, 
                {position: toast.POSITION.TOP_CENTER, toastId: 'success1',});
        }
    },[toastMsg, toastType])
    return(
        <ToastContainer />
    )
}

export default useNotification;