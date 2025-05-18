import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";


const Portfolio = () => {
    return (
        <div className="p-5 lg:p-20" >
            <h1 className="font-bold text-3xl text-left pb-5">Portfolio</h1>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="">Assets</TableHead>
                <TableHead className="w-[50px] text-right">Price</TableHead>
                <TableHead className="text-center">Unit</TableHead>
                <TableHead className="text-center" >Changes</TableHead>
                <TableHead className="text-center">Change%</TableHead>
                <TableHead className="text-right">Volume</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=><TableRow key={index}>
                <TableCell className="font-medium flex items-center gap-2">
                    <Avatar className={"-z-50"}>
                        <AvatarImage src="https://cdn.pixabay.com/photo/2018/03/22/20/41/bitcoin-3251776_1280.jpg"/>
                    </Avatar>
                    <span >Bitcoin</span>
                </TableCell>
                <TableCell className="text-right">BTC</TableCell>
                <TableCell className="text-center">1234567890</TableCell>
                <TableCell className="text-center">9098765432123</TableCell>
                <TableCell>-0.20009</TableCell>
                <TableCell className="text-right">$6969.00</TableCell>
                </TableRow>)}
                
            </TableBody>
        </Table>
        </div>
    );
}

export default Portfolio;