import { useEffect, useState   } from "react";
import axios from 'axios'

const url = process.env.BASE_URL ?? 'https://rentrite-homes.up.railway.app';

function usePost (postData){

    const [myData, setMydata] = useState([]);
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        const post = async () => {
          try {
            const res = await axios.get(`${url}/apartment/`);
            if (res) { 
              const dataArray = res?.data;
              console.log(typeof res?.data)
              setMydata(dataArray);
              setIsPending(false)
              setIsError(null)             
            

            }
          } catch (err ) {
            console.log(err.message);
            setIsPending(false)
            setIsError(err.message)
          }
        }
      
        post();
    }, []);

    return {
        myData,
        isError,
        isPending
    }
}

export default usePost