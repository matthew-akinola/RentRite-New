
"use client"
import { Button } from '@/components/ui/button';
import { formatCVC, formatCreditCardNumber, formatExpirationDate } from '@/lib/utils';
import React, { ChangeEvent, FocusEvent, useState } from 'react';


interface iCost {
    cost: number;
    setCardNumber: (value: string) => void;
    setExpiryDate: (value: string) => void;
    setCVV: (value: string) => void;
    handleSubmit: () => void;
}

const CardPaymentForm: React.FC<iCost> = ({cost, setCardNumber, setExpiryDate, setCVV, handleSubmit} ) => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
      });
    
      const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;

        let inputValue = "";
        if (name === "number") {
            inputValue = formatCreditCardNumber(value);
            setCardNumber(value)
        } else if (name === "expiry") {
            inputValue = formatExpirationDate(value);
            setExpiryDate(value)
        } else if (name === "cvc") {
            setCVV(value)
            inputValue = formatCVC(value);
        }
          console.log(inputValue);
        setState((prev) => ({ ...prev, [name]: inputValue }));
      }
    
      const handleInputFocus = (evt : FocusEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
      }
    return (
        <div className='w-full flex flex-col justify-center'>
            <form className='grid grid-cols-2 grid-rows-2 grid-flow-row gap-x-10 px-5 py-4 text-gray-700'>
                
                <div className="grid grid-cols-1 col-span-2 mb-5">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="tel"
                        name="number"
                        id="cardNumber"
                        placeholder="Card Number"
                        value={state.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        pattern="[\d| ]{16,22}"
                        required
                        className='mt-[3px] h-14 p-[15px] text-[16px] border border'
                    />
                </div>
                <div className="grid grid-cols-1 mb-5 h-max">
                    <label htmlFor="cardnumber">Expiry Date</label>
                    <input
                        type="tel"
                        name="expiry"
                        placeholder="MM/YY"
                        pattern="\d\d/\d\d"
                        required
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        className='mt-[3px] h-14 p-[15px] text-[16px] border border'
                    />
                </div>
                <div className="grid h-max">
                    <label htmlFor="expirationdate">CVV</label>
                    <input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    pattern="\d{3,4}"
                    required
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className='mt-[3px] h-14 p-[15px] text-[16px] border w-[100%]'
                    />
                </div>
            </form>
            <Button className="bg-primary text-white px-3 mt-10 w-full" onClick={() => handleSubmit()} disabled={Object.values(state).some(value => value === '')}>
                {`Pay ₦${cost}`}
            </Button>
        </div>
    );
};

export default CardPaymentForm;

