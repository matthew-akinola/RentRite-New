import { useEffect, useState   } from "react";
import axios from 'axios'

const url = process.env.BASE_URL ?? 'https://rentrite-homes.up.railway.app';

function useFetch (endpoint:string){

    const [myData, setMydata] = useState([]);
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
      console.log(url+endpoint)
        const post = async () => {
          try {
            const res = await axios.get(url+endpoint);
            if (res) { 
              const dataArray = res?.data;
              console.log(res?.data)
              setMydata(dataArray);
              setIsPending(false)
              setIsError(null)             
            

            }
          } catch (err: any ) {
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

export default useFetch