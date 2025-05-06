import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const AssetTable = () => {  
    return (    
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">COIN</TableHead>
                <TableHead>SYMBOL</TableHead>
                <TableHead>VOLUME</TableHead>
                <TableHead>MARKET CAP</TableHead>
                <TableHead>24h</TableHead>
                <TableHead className="text-right">PRICE</TableHead>
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
                <TableCell>BTC</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>9098765432123</TableCell>
                <TableCell>-0.20009</TableCell>
                <TableCell className="text-right">$6969.00</TableCell>
                </TableRow>)}
                
            </TableBody>
        </Table>

    )
}
export default AssetTable;