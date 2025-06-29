import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReloadIcon, UpdateIcon } from "@radix-ui/react-icons";
import { Banknote, BanknoteArrowDown, CopyIcon, DollarSign, ShuffleIcon, UploadIcon, WalletIcon } from "lucide-react";
import React, { use, useEffect } from "react";
import TopupForm from "./TopupForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { depositMoney, getUserWallet } from "@/state/wallet/Action";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Wallet = () => {
    const dispatch = useDispatch();
    const {wallet} = useSelector(store => store);
    const query = useQuery();
    const orderId=query.get("order_Id");
    const paymentId=query.get("payment_Id");
    const razorpayPaymentId=query.get("razorpay_payment_id");
    const navigate = useNavigate();

    useEffect(() => {
        handleFetchUserWallet();
        handleFetchWalletTransaction();
    }, []);

    useEffect(() => {
        if(orderId) {
            dispatch(depositMoney({
                jwt: localStorage.getItem("jwt"),
                orderId,
                paymentId: razorpayPaymentId || paymentId,
                navigate
            }))
        }
    }, [orderId, paymentId, razorpayPaymentId]);

    const handleFetchUserWallet = () => {
        dispatch(getUserWallet(localStorage.getItem("jwt")));
    }

    const handleFetchWalletTransaction = () => {
        dispatch(getUserWallet(localStorage.getItem("jwt")));
    }

    return (
        <div className="flex flex-col items-center">
            <div className="pt-10 w-full lg:w-[60%]">
            <Card>
                <CardHeader className="pb-9">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <WalletIcon size={30}/>
                            <div>
                                <CardTitle className="text-2xl ">My Wallet</CardTitle>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm text-gray-400">
                                        #{wallet.userWallet?.id}
                                        </p>
                                        <CopyIcon size={15} className="cursor-pointer hover:text-slate-400"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ReloadIcon onClick={handleFetchUserWallet} className="w-6 h-6 cursor-pointer hover:text-slate-300"
                            ></ReloadIcon>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent>
                    <div className="flex items-center mb-6">
                        <DollarSign/>
                        <span className="text-2xl font-semibold ml-2">{wallet.userWallet.balance}</span>
                    </div>

                    <div className="flex items-start gap-6">
                        <Dialog>
                            <DialogTrigger>
                                <div className="h-24 w-24 hover:bg-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer">
                                    <UploadIcon/>
                                    <span className="text-xs font-semibold mt-2">Add Money</span>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Top Up Your Wallet</DialogTitle>
                                </DialogHeader>
                                <TopupForm/>
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger>
                                <div className="h-24 w-24 hover:bg-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer">
                                    <BanknoteArrowDown/>
                                    <span className="text-xs font-semibold mt-2">Withdrawal</span>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Request Withdrawal</DialogTitle>
                                </DialogHeader>
                                <WithdrawalForm/>
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger>
                                <div className="h-24 w-24 hover:bg-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer">
                                    <ShuffleIcon/>
                                    <span className="text-xs font-semibold mt-2">Transfer</span>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="text-center text-xl">Transfer to other wallet</DialogTitle>
                                </DialogHeader>
                                <TransferForm/>
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardContent>

            </Card>

            <div className="py-5 pt-10">
                <div className="flex gap-2 items-center pb-5">
                    <h1 className="text-2xl font-semibold">History</h1>
                    <UpdateIcon className="h-7 w-7 p-0 cursor-pointer hover:text-slate-400"/>
                </div>


                <div className="space-y-5">
                    
                    {wallet.transactions.map((item, i) => (
                    <div key={i}>
                        <Card className="px-5 flex justify-between items-center p-2">
                        <div className="flex items-center gap-5">
                            <Avatar onClick={handleFetchWalletTransaction}>
                                <AvatarFallback>
                                    <ShuffleIcon className="h-7 w-7" />
                                </AvatarFallback>
                            </Avatar>

                            <div className="space-y-1 ">
                                <h1>{item.type || item.purpose}</h1>
                                <p className="text-sm text-gray-400">{item.date}</p>
                            </div>
                        </div>
                        <div >
                            <p className={`text-green-500 text-center`}>{item.amount} USD</p>
                        </div>
                        </Card>
                    </div>
                    ))}
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Wallet;
