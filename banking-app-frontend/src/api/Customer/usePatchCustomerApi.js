import { useEffect, useState } from "react"


const usePatchCustomerApi = (url, data) => {

    const [result, setResult] = useState(false);

    const patchApi = () => {
        fetch(url,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify({
                password: data
            }),
        })
        // .then((res) => {
            //         if(res.status === 200)setResult(true);
            //     })
            .then((res) => {
                setResult(true);
                return res.json();
            })
        .catch((err) => console.log('error: ', err))
    };
    
    useEffect(() => {
        if(data){
            patchApi();
        }
    },[]);
    return result;
}

export default usePatchCustomerApi;