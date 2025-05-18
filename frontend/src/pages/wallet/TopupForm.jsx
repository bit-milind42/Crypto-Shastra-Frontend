import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const TopupForm = () => {
    
    const [amount, setAmount] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('RAZORPAY');
    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value);
    }
    const handleChange = (e) => {
        setAmount(e.target.value);
    };
    const handleSubmit = () => {
        console.log(amount,paymentMethod);
    }
    return (
        <div className="pt-10 space-y-5">
            <div>
                <h1 className="pb-1">
                    Enter Amount
                </h1>
                <Input
                onChange={handleChange}
                value={amount}
                className="py-7 text-lg"
                placeholder="Enter amount"

                />
            </div>
            <div>
                <h1 className="pb-1">
                    Select payment method
                </h1>
                <RadioGroup
                    onValueChange={(value)=>handlePaymentMethodChange(value)}
                    defaultValue={"RAZRORPAY"}
                    className="flex border-2 border-gray-150 rounded-md "
                >
                    <div className="flex items-center space-x-2 border-gray-300 p-3 px-5 roundeded-md">
                        <RadioGroupItem
                        icon={DotFilledIcon}
                        className="h-9 w-9 rounded-full border-2 border-black hover:bg-gray-200"
                        value="RAZORPAY"
                        id="r1"
                        />
                        <Label htmlFor="r1">
                            <div className="bg-white rounded-md px-5 py-2 w-32">
                            <img src="data:image/png;base64,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" 
                            alt="" />                              
                                
                            </div>

                        </Label>

                    </div>

                    <div className="flex items-center space-x-2 border-gray-300 p-3 px-5 roundeded-md">
                        <RadioGroupItem
                        icon={DotFilledIcon}
                        className="h-9 w-9 rounded-full border-2 border-black hover:bg-gray-200"
                        value="INSTAMOJO"
                        id="r1"
                        />
                        <Label htmlFor="r2">
                            <div className="bg-white rounded-md px-5 py-2 w-32">
                            <img
                             src="data:image/png;base64,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" 
                            alt="" />                              
                                
                            </div>

                        </Label>

                    </div>

                </RadioGroup>
            </div>
            <Button className="w-full py-7 text-lg" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
}
export default TopupForm;