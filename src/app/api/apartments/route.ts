import { DynamicObject } from '@/types';
import axios, { AxiosInstance } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET ({ nextUrl }: NextRequest) {

    const url: string | undefined = process.env.BASE_URL;
    console.log("nextUrl+", nextUrl.searchParams);


  try {
    
    let endpoint = url + "/apartment/";
              
      if (nextUrl.searchParams.size > 0) {
        const queryString = Array.from(nextUrl.searchParams).map(([key, value]) => `${key}=${value}`).join('&');
        endpoint += `?${queryString}`;
      }

      const response = await axios.get<DynamicObject[]>(endpoint);
      
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in GET request:', error);

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
