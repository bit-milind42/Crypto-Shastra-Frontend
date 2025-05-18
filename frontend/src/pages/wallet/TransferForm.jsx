import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const TransferForm = () => {
    const[FormData, setFormData] = React.useState({
        amount: '',
        walletId: '',
        purpose: ''
        
    });

    const handleChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        console.log(FormData);
    }

    return (
        <div className="pt-10 space-y-5">
            <div>
                <h1 className="pb-1">Enter amount</h1>
                <Input
                name="amount"
                onChange={handleChange}
                value={FormData.amount}
                className="py-7"
                placeholder="Enter amount"
                type="number"
                />
                
            </div>

            <div>
                <h1 className="pb-1">Wallet Id</h1>
                <Input
                name="walletId"
                onChange={handleChange}
                value={FormData.walletId}
                className="py-7"
                placeholder="Enter wallet id"
                
                />
                
            </div>

            <div>
                <h1 className="pb-1">Purpose</h1>
                <Input
                name="purpose"
                onChange={handleChange}
                value={FormData.purpose}
                className="py-7"
                placeholder="Enter purpose"
                
                />
                
            </div>

            <DialogClose className="w-full">
                <Button onClick={handleSubmit} className="w-full py-7 text-xl text-white">
                    Submit
                </Button>
            </DialogClose>

            
        </div>
    );
}
export default TransferForm;