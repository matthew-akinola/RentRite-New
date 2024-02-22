import axios, { AxiosInstance } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const BASE_URL: string | undefined = process.env.BASE_URL;
const APP_APP_URL: string | undefined = process.env.APP_APP_URL;
const BEARER_TOKEN: string | undefined = process.env.BEARER_TOKEN;

if (!BASE_URL || !APP_APP_URL || !BEARER_TOKEN) {
  throw new Error('Environment variables are not properly configured.');
}

const API: AxiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': APP_APP_URL,
    'Authorization' : `Bearer ${BEARER_TOKEN}`,
  },
  baseURL: BASE_URL,
  withCredentials: true,
});

export async function POST (req: Request, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { body } = req;
  const response = await axios.post(`${BASE_URL}/payments/pay/card-deposit-paystack/`, body, {
      headers: { 'Content-Type': 'application/json', 'Authorization' : `Bearer ${BEARER_TOKEN}` },
    });
    console.log(response)
    return NextResponse.json({ success: true});
    // return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error(`Error submitting form: ${error}`);
    return NextResponse.error();
  }
}
