import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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



function detectCardType(cardNumber: string): string {
  const patterns: Record<string, RegExp> = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
  };

  for (const cardType in patterns) {
    if (patterns[cardType].test(cardNumber)) {
      return cardType;
    }
  }

  return "Unknown";
}


export function validateLuhnAlgorithm(cardNumber: string): boolean {
  let sum = 0;
  let isEven = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isEven = !isEven;
  }
  detectCardType(cardNumber);
  return sum % 10 === 0;
}


export function validateExpirationDate(expirationMonth: number, expirationYear: number): boolean {
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  const currentMonth: number = currentDate.getMonth() + 1; // January is 0

  if (expirationYear > currentYear) {
      return true;
  } else if (expirationYear === currentYear && expirationMonth >= currentMonth) {
      return true;
  }

  return false;
}

export function validateCVV(cvv: string): boolean {
  const cvvPattern: RegExp = /^[0-9]{3,4}$/;
  return cvvPattern.test(cvv);
}



// 
export function isEmpty(obj:any) {
  return Object.keys(obj).length === 0;
}