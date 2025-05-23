import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { BookmarkIcon, DotIcon } from "lucide-react";
import React, { use, useEffect } from "react";
import TradingForm from "./TradingForm";
import StockChart from "../home/StockChart";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetails, getCoinList } from "@/state/coin/Action";
import { addItemToWatchlist, getUserWatchlist } from "@/state/watchlist/Action";
import { existInWatchlist } from "@/utils/ExistingWatchlist";
import { getUser } from "@/state/auth/Action";

const StockDetails = () => {
    const {coin,watchlist}=useSelector(store=>store);

    const dispatch = useDispatch();
    const {id}=useParams();
    useEffect(() => {
        console.log(coin.coinDetails);
        dispatch(fetchCoinDetails(id, localStorage.getItem("jwt")));  
        dispatch(getUserWatchlist(localStorage.getItem("jwt")));  
    }, [id]);

    const handleAddToWatchlist = () => {
        dispatch(addItemToWatchlist({coinId:coin.coinDetails?.id,jwt:localStorage.getItem("jwt")}));
    }

    
    return (
        <div className="p-5 mt-5">
            <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                    
                    <div>
                        <Avatar>
                            <AvatarImage
                            src={
                                coin.coinDetails?.image.large
                            }
                            />
                        </Avatar>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p>
                                {coin.coinDetails?.symbol.toUpperCase()}
                            </p>
                            <DotIcon className="text-gray-500"/>
                            <p className="text-gray-500">
                                {coin.coinDetails?.name}
                                </p>

                        </div>
                        <div className="flex items-end gap-2">
                            <p className="text-2xl font-bold">
                                ${coin.coinDetails?.market_data.current_price.usd}
                            </p>

                            <p className="text-red-600">
                                
                                    <span>-{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                                    <span className="">(-{coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>

                            </p>

                        </div>
                    </div>

                </div>
                <div className="flex gap-4 items-center">
                    <Button
                    onClick={handleAddToWatchlist}
                     className="variant-outline bg-white text-gray-700 border-gray-500 hover:bg-gray-300">
                        {existInWatchlist(watchlist.items,coin.coinDetails)
                         ? (<BookmarkFilledIcon className="h-6 w-6" />) : <BookmarkIcon className="h-6 w-6" />}
                        
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
                <StockChart coinId={id} />
            </div>
            

        </div>
    );
}
export default StockDetails;