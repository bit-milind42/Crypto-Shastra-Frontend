import React, { useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getUserAssets } from "@/state/asset/Action";
import { useDispatch } from "react-redux";


const Portfolio = () => {
    const dispatch = useDispatch();
    const {asset} = useSelector(store => store);

    useEffect(() => {
        dispatch(getUserAssets(localStorage.getItem("jwt")));
    }
    , []);
    return (
        <div className="p-5 lg:p-10" >
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
                {asset.userAssets.map((item,index)=><TableRow key={index}>
                <TableCell className="font-medium flex items-center gap-2">
                    <Avatar className={"-z-50"}>
                        <AvatarImage src={item.coin.image}/>
                    </Avatar>
                    <span >{item.coin.name}</span>
                </TableCell>
                <TableCell className="text-right">{item.coin.symbol.toUpperCase()}</TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-center">{item.coin.price_change_24h}</TableCell>
                <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
                <TableCell className="text-right">{item.coin.total_volume}</TableCell>
                </TableRow>)}
                
            </TableBody>
        </Table>
        </div>
    );
}

export default Portfolio;