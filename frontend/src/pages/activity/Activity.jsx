import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const Activity = () => {
    return (
        <div className="p-5 lg:p-20" >
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
                            {[1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=><TableRow key={index}>
                            <TableCell>
                                <p> 2025-10-01 </p>
                                <p className="text-gray-400"> 12:00:00 </p>
                            </TableCell>
                            <TableCell className="font-medium flex items-center gap-2 pl-4">
                                <Avatar className={"-z-50 text-center"}>
                                    <AvatarImage src="https://cdn.pixabay.com/photo/2018/03/22/20/41/bitcoin-3251776_1280.jpg"/>
                                </Avatar>
                                <span >Bitcoin</span>
                            </TableCell>
                            
                            <TableCell>$1234</TableCell>
                            <TableCell>$2345</TableCell>
                            <TableCell><p>Delivery</p></TableCell>
                            <TableCell className="">$6969.00</TableCell>
                            <TableCell className="text-center pr-4">345</TableCell>

                            </TableRow>)}
                            
                        </TableBody>
                    </Table>
        </div>
    );
}
export default Activity;