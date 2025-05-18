import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const Watchlist = () => {
    const handleRemoveToWatchlist = (value) => {
        console.log(value);
    }

    return (
        <div className="p-5 lg:p-20" >
            <h1 className="font-bold text-3xl text-left pb-5">Watchlist</h1>
            <Table className="border">
                        <TableHeader>
                            <TableRow>
                            <TableHead className="py-5 pl-4">COIN</TableHead>
                            <TableHead className="text-center">SYMBOL</TableHead>
                            <TableHead className="text-center">VOLUME</TableHead>
                            <TableHead className="text-center">MARKET CAP</TableHead>
                            <TableHead className="text-center">24h</TableHead>
                            <TableHead className="text-center">PRICE</TableHead>
                            <TableHead className="text-right text-red-600 pr-4">REMOVE</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=><TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-2 pl-4">
                                <Avatar className={"-z-50"}>
                                    <AvatarImage src="https://cdn.pixabay.com/photo/2018/03/22/20/41/bitcoin-3251776_1280.jpg"/>
                                </Avatar>
                                <span >Bitcoin</span>
                            </TableCell>
                            <TableCell>BTC</TableCell>
                            <TableCell>1234567890</TableCell>
                            <TableCell>9098765432123</TableCell>
                            <TableCell>-0.20009</TableCell>
                            <TableCell className="">$6969.00</TableCell>
                            <TableCell className="text-right pr-4">
                                <Button onClick={()=>handleRemoveToWatchlist(item.id)} size="icon" variant="ghost" className="text-red-600 hover:bg-red-100 hover:text-red-600 rounded-full p-2">
                                    <BookmarkFilledIcon  className="w-6 h-6"/>
                                </Button>
                            </TableCell>

                            </TableRow>)}
                            
                        </TableBody>
                    </Table>
        </div>
    );
}
export default Watchlist;