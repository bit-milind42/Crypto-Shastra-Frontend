import React, { useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { getWithdrawalHistory } from "@/state/withdrawal/Action";


const Withdrawal = () => {
    const dispatch = useDispatch();
    const {wallet, withdrawal} = useSelector(store => store);

    useEffect(() => {
        dispatch(getWithdrawalHistory(localStorage.getItem("jwt")));
    }
    , []);

    return (
        <div className="p-5 lg:p-20" >
            <h1 className="font-bold text-3xl text-left pb-5">Withdrawal</h1>
            <Table className="border">
                        <TableHeader>
                            <TableRow>
                            <TableHead className="py-5  text-center">Date</TableHead>
                            <TableHead className="text-center">Method</TableHead>
                            <TableHead className="text-center">Amount</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                            {/* <TableHead className="text-center">Order Type</TableHead>
                            <TableHead className="text-center">Profit/Loss</TableHead>
                            <TableHead className="text-center">Value</TableHead> */}

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {withdrawal.history.map((item,index)=><TableRow key={index}>
                            <TableCell>
                                <p>{item.date.toString()}</p>
                            </TableCell>
                            
                            
                            <TableCell>Bank</TableCell>
                            
                            <TableCell className="">${item.amount}</TableCell>
                            <TableCell className="text-center pr-4">{item.status}</TableCell>

                            </TableRow>)}
                            
                        </TableBody>
                    </Table>
        </div> 
    );
}   
export default Withdrawal;