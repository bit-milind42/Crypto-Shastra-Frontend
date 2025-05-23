import React, { use } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { calculateProfit } from "@/utils/CalculateProfit";

const Activity = () => {
    const dispatch = useDispatch();
    const {order}=useSelector(store=>store);

    useEffect(() => {
        dispatch(getUserAssets(localStorage.getItem("jwt")))
    }
    , []);
    return (
        <div className="p-5 lg:p-10" >
            <h1 className="font-bold text-3xl text-left pb-5">Trading Activity</h1>
            <Table className="border">
                        <TableHeader>
                            <TableRow>
                            <TableHead className="py-5  text-center">Date & Time</TableHead>
                            <TableHead className="">Trading Pair</TableHead>
                            <TableHead className="text-center">Buy Price</TableHead>
                            <TableHead className="text-center">Sell Price</TableHead>
                            <TableHead className="text-center">Order Type</TableHead>
                            <TableHead className="text-center">Profit/Loss</TableHead>
                            <TableHead className="text-center">Value</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {order.orders.map((item,index)=><TableRow key={index}>
                            <TableCell>
                                <p> 2025-10-01 </p>
                                <p className="text-gray-400"> 12:00:00 </p>
                            </TableCell>
                            <TableCell className="font-medium flex items-center gap-2 pl-4">
                                <Avatar className={"-z-50 text-center"}>
                                    <AvatarImage src={item.orderItem.coin.image}/>
                                </Avatar>
                                <span >{item.orderItem.coin.name}</span>
                            </TableCell>
                            
                            <TableCell>${item.orderItem.buyPrice}</TableCell>
                            <TableCell>${item.orderItem.sellPrice}</TableCell>
                            <TableCell>{item.orderType}</TableCell>
                            <TableCell className="">{calculateProfit(item)}</TableCell>
                            <TableCell className="text-center pr-4">{item.price}</TableCell>

                            </TableRow>)}
                            
                        </TableBody>
                    </Table>
        </div>
    );
}
export default Activity;