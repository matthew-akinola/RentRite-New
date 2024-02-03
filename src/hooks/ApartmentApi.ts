"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { DynamicObject } from "@/types";



export const ApartmentApi = () => {
  const [apartmentData, setApartmentData] = useState<DynamicObject[]>([]);
  

  const fetchApartments = async () => {
    try {
      const response = await axios.get<DynamicObject[]>('/api/apartments');
      setApartmentData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      fetchApartments();
    }, []);

  return apartmentData;
};
