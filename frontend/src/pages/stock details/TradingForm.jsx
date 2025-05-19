import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import React, { useState } from "react";

const TradingForm = () => {
    const [orderType, setOrderType] = useState("BUY");
    const handleChange=()=>{

    }
    return (
        <div className="space-y-10 p-5">
            <div>
                <div className="flex justify-between items-center gap-5">
                    <Input
                    className="py-6 focus:outline-none"
                    placeholder="Enter Amount"
                    onChange={handleChange}
                    type="number"
                    name="amount"
                    />
                    <div>
                        <p className="border text-2xl flex items-center justify-center h-14 w-36 rounded-md">
                            4563
                        </p>
                    </div>
                </div>

                { false &&
                    <h1 className="text-red-500 text-center mt-5">
                    Insufficent balance to buy
                </h1>}
            </div>
            <div>
                <div className="flex gap-5 items-center">
                    
                    <div>
                        <Avatar>
                            <AvatarImage
                            src="https://cdn.pixabay.com/photo/2021/05/26/19/32/ethereum-6286124_1280.jpg"
                            />
                        </Avatar>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p>
                                BTC
                            </p>
                            <DotIcon className="text-gray-500"/>
                            <p className="text-gray-500">
                                Bitcoin
                                </p>

                        </div>
                        <div className="flex items-end gap-2">
                            <p className="text-2xl font-bold">
                                $69,000.00
                            </p>

                            <p className="text-red-600">
                                
                                    <span>-0.20009</span>
                                    <span className="">(0.20%)</span>

                            </p>

                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-between items-center">
                <p>Order Type</p>
                <p>Market Order</p>

            </div>
            <div className="flex justify-between items-center">
                <p>
                    {orderType=="BUY" ? "Available Case" : "Available Quantity"}
                </p>

                <p>
                    {orderType=="BUY" ? "$4563.00" : "0.1234"}
                </p>

            </div>

            <div>
                <Button className={`w-full py-6 ${orderType=="SELL" ? "bg-red-600 " : ""}`}>
                    {orderType}

                </Button>
                <Button 
                variant="link"
                className="w-full mt-5 text-xl"
                onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}>
                    {orderType == "BUY" ? "Switch to Sell" : "Switch to Buy"}
                    
                </Button>
            </div>

        </div>
    )
}

export default TradingForm;