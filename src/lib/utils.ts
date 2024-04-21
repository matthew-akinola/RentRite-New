"use client"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Payment from "payment";
import { RefObject, useEffect } from "react";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: (value: any) => void, setIsValidated: (Value: any) => void) => {
  const emailValue = e.target.value;
  setValue(emailValue);
  setIsValidated(validateEmail(emailValue));
};

function clearNumber(value: string = ""): string {
  return value.replace(/\D+/g, "");
}

export function formatCreditCardNumber(value: string): string {
  if (!value) {
    return value;
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue: string;

  switch (issuer) {
    case "amex":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 10)} ${clearValue.slice(10, 15)}`;
      break;
    case "dinersclub":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 10)} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 8)} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

  return nextValue.trim();
}

export function formatCVC(value: string, allValues: Record<string, string> = {}): string {
  const clearValue = clearNumber(value);
  let maxLength = 4;

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number);
    maxLength = issuer === "amex" ? 4 : 3;
  }

  return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value: string): string {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}


export function formatFormData(data: Record<string, string>): string[] {
  return Object.keys(data).map(d => `${d}: ${data[d]}`);
}


export function isEmpty(obj:any) {
  return Object.keys(obj).length === 0;
}

export const convertStringToNumber = (input: string): number => {
  const numericString = input.replace(/\D/g, "");
  return Number(numericString);
}


export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, callback: () => void): void => {
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
          if (ref.current && !ref.current.contains(event.target as Node)) {
              callback();
          }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref, callback]);
};

