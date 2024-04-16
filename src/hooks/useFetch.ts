import { useEffect, useState   } from "react";
import axios from 'axios'

const url = process.env.BASE_URL;

function useFetch (endpoint:string){

    const [myData, setMydata] = useState([]);
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(null)
    

    useEffect(() => {
        const get = async () => {
          try {
            const res = await axios.get(url+endpoint);
            if (res) { 
              const dataArray = res?.data;
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
      
        get();
    }, []);

    return {
        myData,
        isError,
        isPending

    }
}

export default useFetch