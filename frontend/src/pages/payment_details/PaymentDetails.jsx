import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";
import PaymentDetailsForm from "./PaymentDetailsForm";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentDetails } from "@/state/withdrawal/Action";

const PaymentDetails = () => {
    const {withdrawal} = useSelector(store => store);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPaymentDetails({jwt:localStorage.getItem("jwt")}));
    }, []);

    return (
        <div className="px-20">
            <h1 className="text-3xl font-bold text-center mt-10 pb-4">
                Payment Details</h1>

            {withdrawal.paymentDetails? <Card >
                <CardHeader className=" text">
                    <CardTitle className="text-2xl font-bold">
                        Yes Bank
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                        A/C NO:
                        {withdrawal.paymentDetails?.accountNumber}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center">
                        <p className="w-32 font-bold">A/C Holder</p>
                        <p className="text-gray-500">: {withdrawal.paymentDetails?.accountHolder}</p>
                    </div>

                    <div className="flex items-center">
                        <p className="w-32 font-bold">IFSC</p>
                        <p className="text-gray-500">: {withdrawal.paymentDetails?.bankName}</p>
                    </div>

                </CardContent>

            </Card>:<Dialog>
                <DialogTrigger>
                    <Button className="py-6">
                        Add Payment Details
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Payment Details</DialogTitle>
                   
                    </DialogHeader>
                    <PaymentDetailsForm/>
                </DialogContent>
            </Dialog>}

            

            
        </div>
    );
}
export default PaymentDetails;