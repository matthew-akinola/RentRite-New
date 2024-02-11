import { useEffect, useState   } from "react";
import axios from 'axios'

const url = process.env.BASE_URL ?? 'https://rentrite-homes.up.railway.app';

function useFetchApartment (){

    const [myData, setMydata] = useState([]);
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        const post = async () => {
          try {
            const res = await axios.get(`${url}/apartment/`);
            if (res) { 
              console.log(res)
              const dataArray = res?.data;
              console.log(dataArray)
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

export default useFetchApartment