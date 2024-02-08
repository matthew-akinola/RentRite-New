"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { DynamicObject } from "@/types";

export const useFetchApartment = () => {
  const [myData, setMydata] = useState<DynamicObject[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);

  const fetchApartments = async () => {
    try {
      setIsPending(true);
      const response = await axios.get<DynamicObject[]>('/api/apartments');
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
  };
};
