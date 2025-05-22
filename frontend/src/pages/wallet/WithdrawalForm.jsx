import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { withdrawalRequest } from "@/state/withdrawal/Action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const WithdrawalForm = () => {
    const [amount, setAmount] = React.useState('');
    const dispatch = useDispatch();
    const {wallet, withdrawal} = useSelector(store => store);

    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(withdrawalRequest({
            amount,
            jwt: localStorage.getItem("jwt")
        }))
        console.log(amount);
    };

    return (
        <div>
            <div className="flex justify-between items-center bg-white shadow-md rounded-md text-xl font-bold px-5 py-4">
                <p>Available balance</p>
                <p>$9000</p>
            </div>
            <div className="pt-2 flex flex-col items-center">
                <h1>Withdrawal amount</h1>
                <div className="flex items-center justify-center pt-2">
                    <Input
                        onChange={handleChange}
                        value={amount}
                        className="withdrawalInput py-7 border-none outline-none rounded-md text-2xl focus:outline-none px-0 text-center"
                        placeholder="Enter amount"
                        type="number"
                    />
                </div>
            </div>
            
            <div>
                <p className="pb-2 pt-4">Transfer to</p>
                <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
                    <img className="h-8 w-8"
                     src="data:image/jpeg;base64,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" alt=""/>
                
                <div>
                    <p className="text-xl font-bold">{withdrawal.paymentDetails?.bankName}</p>
                    <p className="text-xs">{withdrawal.paymentDetails?.accountNumber}</p>
                </div>
                </div>
                

            </div>
            <DialogClose className="w-full">
            
                <Button  className="w-full py-7 text-xl text-white" onClick={handleSubmit}>
                    Withdraw
                </Button>
            </DialogClose>

        </div>
    );
};

export default WithdrawalForm;
