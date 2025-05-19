import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { BookmarkIcon, DotIcon } from "lucide-react";
import React from "react";
import TradingForm from "./TradingForm";
import StockChart from "../home/StockChart";

const StockDetails = () => {
    return (
        <div className="p-5 mt-5">
            <div className="flex justify-between">
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
                <div className="flex gap-4 items-center">
                    <Button className="variant-outline bg-white text-gray-700 border-gray-500 hover:bg-gray-300">
                        {true ? (<BookmarkFilledIcon className="h-6 w-6" />) : <BookmarkIcon className="h-6 w-6" />}
                        
                    </Button>

                    <Dialog>
                        <DialogTrigger>
                            <Button size='lg'>
                                Trade
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>How much do you want to spend?

                            </DialogTitle>
                            </DialogHeader>
                            <TradingForm/>
                        </DialogContent>
                    </Dialog>


                </div>
                
            </div>
            <div className="mt-14">
                <StockChart/>
            </div>
            

        </div>
    );
}
export default StockDetails;