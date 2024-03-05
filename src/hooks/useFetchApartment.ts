"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { DynamicObject } from "@/types";

export const useFetchApartment = () => {
  const [myData, setMydata] = useState<DynamicObject[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);

  const fetchApartments = async (queryParameters: { [key: string]: any } = {}) => {
    try {
      setIsPending(true);
      let url = '/api/apartments';
      if (Object.keys(queryParameters).length > 0) {
        const queryString = Object.keys(queryParameters).map(key => `${key}=${queryParameters[key]}`).join('&');
        url += `?${queryString}`;
      }
      const response = await axios.get<DynamicObject[]>(url);
      setMydata(response.data);
      setIsError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  return {
    myData,
    isError,
    isPending,
    fetchApartments
  };
};
