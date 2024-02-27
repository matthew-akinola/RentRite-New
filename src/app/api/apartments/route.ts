import { DynamicObject } from '@/types';
import axios, { AxiosInstance } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET ({ nextUrl }: NextRequest) {

    const url: string | undefined = process.env.BASE_URL;

  try {
    const response = await axios.get<DynamicObject[]>(url + "/apartment/");

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in GET request:', error);

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
