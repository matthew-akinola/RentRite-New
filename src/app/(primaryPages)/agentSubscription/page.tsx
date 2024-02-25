"use client"
import { FaRegCircleCheck, FaRegCircleQuestion } from "react-icons/fa6"
import { plans } from "./data"
import PlanCard from "@/components/shared/planCard"
import Image from "next/image"
import Link from "next/link"
import GetStarted from "@/components/common/footer/getStart"
import Modal from "@/components/shared/modal"
import { Fragment, useState } from "react"
import { Button } from "@/components/ui/button"
import { LuDot, LuPencilLine } from "react-icons/lu"
import { handleEmailChange } from "@/lib/utils"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Loader from "@/components/shared/horizontalLoader"
import { MdOutlineCancel } from "react-icons/md"
import CardPaymentForm from "@/components/shared/CardPaymentForm"


interface iState { "card-number": string; "expire-date": string; cvv: string; }

const AgentSubscription = () => {
        const [isModalOpen, setIsModalOpen] = useState(false)
        const [isPayViaBankModal, setIsPayViaBankModal] = useState(false)
        const [isCardDetailModal, setIsCardDetailModal] = useState(false)
        const [payStackEmail, setPayStackEmail] = useState('');
        const [isPayStackEmailValid, setIsPayStackEmailValid] = useState(false);
        const [flutterWaveEmail, setFlutterWaveEmail] = useState('');
        const [isFlutterWaveEmailValid, setIsFlutterWaveEmailValid] = useState(false);
        const [paymentGatewayType, setPaymentGatewayType] = useState("")
        // const [cardNumber, setCardNumber] = useState('');
        const [cost, setCost] = useState<number>(0);
        const [isLoading, setIsLoading] = useState(false);
        const [isPending, setIsPending] = useState(false);
        const [status, setStatus] = useState<string>('')
        const [state, setState] = useState<iState>({
            'card-number': '',
            'expire-date': '',
            cvv: '',
          });


        const formSchema = z.object({
            cvv: z.string().min(2, {
              message: "Username must be at least 2 characters.",
            }),
            "expire-date": z.string().min(2, {
                message: "Email must be at least 2 characters",
            }),
            "card-number": z.string().min(2, {
                message: "Field is required",
            }),
        })

       

        const handleSubmitCardPayment = async (values: z.infer<typeof formSchema>) =>  {
            console.log(values)

            setIsCardDetailModal(false)
            setIsLoading(true)
            
            const params= {
                "amount": cost,
                "email": paymentGatewayType === "PayStack" ? payStackEmail : flutterWaveEmail,
                "plan_id": "090909",
                "metadata" : {
                    cardNumber : values["card-number"],
                    cvv: values["cvv"],
                    expiryDate: values["expire-date"]
                }
            }
            
            
            if(paymentGatewayType === "PayStack") {
                setIsPending(true)
                axios.post('/api/paystack', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: params,
                })
                .then((response) => {
                    const value =  response
                    setStatus("success")
        
                })
                .catch((error) => {
                    console.error(error);
                    setStatus("failed")
                }).finally (() => {
                    // setIsLoading(false)
                    setIsPending(false)
                });
            }else{

            }
          }

        return (
            <div>
                {/* payment gateway modal */}
                <Modal isOpen={isModalOpen} title={'Pay Via Payment Gateway'} setIsOpen={() => setIsModalOpen(false)}>
                    <div className="px-6 md:px-12 flex flex-col mt-10 pb-16">
                        <p className="font-[700]">SELECT PAYMENT GATEWAY</p>
                        <div className="flex flex-col">
                            <div className="flex w-full justify-between mt-5 flex-col md:flex-row flex-wrap">
                                <div className="flex items-center mb-3 md:mb-0">
                                    <p className="me-2">Pay via</p>
                                    <Image src="/icons/Paystack.svg" alt={"paystack"} width={150} height={70}/>
                                </div>
                                <Button className="flex text-white" disabled={!isPayStackEmailValid} onClick={() => {
                                    setPaymentGatewayType("PayStack")
                                    setIsCardDetailModal(true)
                                    setIsModalOpen(false)
                                }}>
                                    Proceed
                                </Button>
                            </div>
                            <div className="relative">
                                <input type="email" placeholder="example@example.com" className="w-full ps-3 pe-7 mt-5 border-b-[1px] py-2 border-b-gray-300" onChange={(e) =>handleEmailChange(e, setPayStackEmail, setIsPayStackEmailValid)}/>
                                <span className="absolute top-[50%] right-[10px]">
                                    <LuPencilLine  className=""/>
                                </span>
                            </div>
                        </div>  
                        <div className="flex flex-col mt-5">
                            <div className="flex w-full justify-between mt-5 flex-wrap flex-col md:flex-row">
                                <div className="flex items-center mb-3 md:mb-0">
                                    <p className="me-2">Pay via</p>
                                    <Image src="/icons/flutterwave.svg" alt={"paystack"} width={150} height={70}/>
                                </div>
                                <Button className="flex text-white" disabled={!isFlutterWaveEmailValid} onClick={() => {
                                    setPaymentGatewayType("FlutterWave")
                                    setIsCardDetailModal(true)
                                    setIsModalOpen(false)
                                }}>
                                    Proceed
                                </Button>
                            </div>
                            <div className="relative">
                                <input type="email" placeholder="example@example.com" className="w-full ps-3 pe-7 mt-5 border-b-[1px] py-2 border-b-gray-300" onChange={(e) =>handleEmailChange(e, setFlutterWaveEmail, setIsFlutterWaveEmailValid)}/>
                                <span className="absolute top-[50%] right-[10px]">
                                    <LuPencilLine  className=""/>
                                </span>
                            </div>
                        </div>  
                    </div>
                </Modal>

                {/* flutter/paystack card details modal */}
                <Modal isOpen={isCardDetailModal} title={`Pay via ${paymentGatewayType}`} setIsOpen={() => {setIsCardDetailModal(false); setIsModalOpen(true)}}>
                    <div className="px-6 md:px-12 flex flex-col mt-10 pb-16">
                        <CardPaymentForm 
                            cost={cost} 
                            setExpiryDate={(e) => setState((prev) => ({ ...prev, expiry: e }))}
                            setCardNumber={(e) => setState((prev) => ({ ...prev, number: e }))}
                            setCVV={(e) => setState((prev) => ({ ...prev, cvv: e }))}
                            handleSubmit={() => handleSubmitCardPayment(state)}
                        />
                    </div>
                </Modal>
                                            
                {/* loading state */}
                <Modal isOpen={isLoading} title={``} setIsOpen={() => {setIsLoading(false)}}>
                    <div className="px-12 flex flex-col mt-10 pb-16">
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-full">
                               {
                                   isPending ? (
                                        <div className="flex flex-col w-full item-center justify-center">
                                            <p className="font-[700] w-full text-center my-10">Redirecting to bank</p>
                                            <Loader/>
                                        </div>
                                    ): (
                                        <Fragment>
                                            {
                                                status === 'success' ? (
                                                    <div className="flex flex-col justify-center items-center mt-14">
                                                            <div><FaRegCircleCheck className="w-[120px] h-[120px] text-green-600" /></div>
                                                            <p className="font-[700] w-full text-center my-10">Payment successful</p>
                                                        </div>
                                                ):(
                                                    <div className="flex flex-col justify-center items-center mt-14">
                                                            <div><MdOutlineCancel className="w-[120px] h-[120px] text-red-600" /></div>
                                                            <p className="font-[700] w-full text-center my-10">Error Processing Payment</p>

                                                            <ul className="text-gray-400 flex flex-col justify-center items-center">
                                                                <li className="flex gap-x-1 items-center"><LuDot />Check your bank and ensure you were not debited.</li>
                                                                <li className="flex gap-x-1 items-center">
                                                                <LuDot /> Try again after some time have passed.
                                                                </li>
                                                                <li className="flex gap-x-1 items-center"><LuDot /> Reach out to our <span className="text-primary underline">customer support</span> if you encounter more issues..</li>
                                                            </ul>
                                                        </div>
                                                )
                                            }
                                        </Fragment>
                                    )
                               }             
                            </div>
                        </div>  
                    </div>
                </Modal>

                {/* ------ */}

                {/* bank transfer modal */}
                <Modal isOpen={isPayViaBankModal} title={'Pay via bank Transfer'} setIsOpen={() => setIsPayViaBankModal(false)}>
                    <div className="px-12 flex flex-col mt-10 pb-16">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex w-full justify-between mt-5">
                                <p className="font-[700]">Account Number</p>
                                <p>0011992341</p>
                            </div>
                            <div className="flex w-full justify-between mt-5">
                                <p className="font-[700]">Account Name</p>
                                <p>Rentrite Properties Limited</p>
                            </div>
                            <div className="flex w-full justify-between mt-5">
                                <p className="font-[700]">Bank Name</p>
                                <p>United Bank for Africa (UBA)</p>
                            </div>
                            <div className="flex w-full justify-between mt-5">
                                <p className="font-[700]">Amount to be sent</p>
                                <p>₦ {cost}</p>
                            </div>
                            <div className="mt-10">
                                <p className="text-gray-400">Once you have made the transfer, click on the “complete transaction” button below to complete your transaction</p>
                            </div>
                            <Button className="bg-primary text-white w-min px-3 mt-10">
                                Complete Transaction
                            </Button>
                        </div>  
                    </div>
                </Modal>
                
                
               
                <section className="flex justify-center bg-[#F4F5F4] items-center">
                    <div className="container px-2 md:px-7 py-5 ">
                        <h3 className="text-2xl lg:text-4xl font-[700]">
                            Agent Subscription
                        </h3>
                    </div>
                </section>
                <section className="flex justify-center bg-white items-center bg-[#F4F5F4] mt-5">
                    <div className="container px-2 md:px-7 py-5 border-b-2 border-b-gray-300">
                        <div className="flex gap-x-3 flex-wrap">
                            <span className="flex font-normal text-lg items-center">
                                <p className="font-[700] me-2 text-sm md:text-normal">
                                    Email - 
                                </p>
                                <p className="">
                                    Chineduabdulkkpara@gmail.com
                                </p>
                            </span>
                            <span className="flex font-normal text-lg">
                                <p className="font-[700] me-2 text-sm md:text-normal">
                                    Account ID - 
                                </p>
                                <p>
                                    12345
                                </p>
                            </span>
                        </div>
                        <div className="bg-[#FAE0E0] flex justify-between px-5 py-4 mt-2">
                            <div className="flex">
                                <p className="flex font-[700]">Current Subscription - <span className="text-red-500 flex items-center ms-2"> Free <FaRegCircleQuestion className="ms-2 text-black"/></span></p>
                            </div>
                            <div><p className="text-primary font-[800] hidden md:flex">Upgrade Plan</p></div>
                        </div>
                        <span className="flex mt-3 px-5"><p className="font-[700] me-2">Standard listings -</p> <p> 5 of 5 available</p></span>
                        <span className="flex mt-3 px-5"><p className="font-[700] me-2">Premium listings -</p> <p> 0 of 0 available</p></span>
                        <span className="flex mt-3 px-5"><p className="font-[700] me-2">Property post boost -</p> <p> 0 of 0 available</p></span>
                    </div>
                </section>
                <section className="flex justify-center bg-white items-center">
                    <div className="container px-2 md:px-7 pt-5 border-b-2 border-b-gray-300 pb-2">
                        <h3 className="text-2xl lg:text-4xl font-[700] mt-5">
                            Pricing Plan
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-7 ">
                            {
                                plans.map((plan, index) => {

                                    return (
                                        <PlanCard key={index} name={plan.name} price={plan.price} headColor={plan.headColor} features={plan.features} handleButton={()=>{setIsModalOpen(!isModalOpen); setCost(plan.price)}} handleBankPayment={() =>  {setIsPayViaBankModal(!isPayViaBankModal); setCost(plan.price)}}/>
                                    )
                                })
                            }
                        </div>
                        <div className="flex text-primary mt-7 justify-end underline underline-offset-2 cursor-pointer">
                            Show all plan
                        </div>
                    </div>
                </section>
                <section className="flex justify-center bg-white items-center  mt-5">
                    <div className="container px-2 md:px-7 py-5">
                        <div className="bg-[#FAE0E0] flex justify-between px-5 py-4 mt-2">
                            <div className="flex">
                                <p className="flex font-[700]">History</p>
                            </div>
                            <div><p className="text-primary font-[800]">Upgrade Plan</p></div>
                        </div>
                        <div className="bg-[#F4F5F4] grid grid-cols-[0.6fr_0.4fr] justify-between px-5 py-4">
                            <div className="flex justify-between">
                                <p className="flex font-[700]">Subscription History</p>
                                <p className="flex font-[700]">Payment duration</p>
                                <p className="flex font-[700]">Plan</p>
                                <p className="flex font-[700]">Price</p>
                            </div>
                            <div><p className="text-black font-[800] flex justify-end">Status</p></div>
                        </div>
                        <div className="w-full h-24 flex justify-center items-center">
                            <p>You have no subscription history yet</p>
                        </div>
                    </div>
                </section>

                {/* get started section*/}
                <GetStarted/>
            </div>
        )
}

export default AgentSubscription