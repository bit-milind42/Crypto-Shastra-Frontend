// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { ReloadIcon, UpdateIcon } from "@radix-ui/react-icons";
// import { Banknote, BanknoteArrowDown, CopyIcon, DollarSign, ShuffleIcon, UploadIcon, WalletIcon } from "lucide-react";
// import React from "react";
// import TopupForm from "./TopupForm";
// import WithdrawalForm from "./WithdrawalForm";
// import TransferForm from "./TransferForm";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// const Wallet = () => {
//     return (
//         <div className="flex flex-col items-center">
//             <div className="pt-10 w-full lg:w-[60%]">
//             <Card>
//                 <CardHeader className="pb-9">
//                     <div className="flex justify-between items-center">
//                         <div className="flex items-center gap-4">
//                             <WalletIcon size={30}/>
//                             <div>
//                                 <CardTitle className="text-2xl ">My Wallet</CardTitle>
//                                 <div className="flex items-center gap-2">
//                                     <p className="text-sm text-gray-400">
//                                         #A4678Ed</p>
//                                         <CopyIcon size={15} className="cursor-pointer hover:text-slate-400"/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-slate-300"
//                             ></ReloadIcon>
//                         </div>
//                     </div>
//                 </CardHeader>
//                 {/* <CardContent>
//                     <div className="flex items-center">
//                         <DollarSign/>
//                         <span className="text-2xl font-semibold ml-2">6900</span>
//                     </div>
//                     <Dialog>
//                         <DialogTrigger>
//                             <div className="h-24 w-24 hover:bg-slate-200 rounded-lg flex items-center justify-center cursor-pointer">
//                                 <UploadIcon/>
//                                 <span className="text-xs font-semibold ml-2">Add Money</span>
//                             </div>
//                         </DialogTrigger>
//                         <DialogContent >
//                             <DialogHeader>
//                                 <DialogTitle >
//                                     Top Up Your Wallet
//                                 </DialogTitle>

//                             </DialogHeader>
//                             <TopupForm/>
                        
//                         </DialogContent>

                        
//                     </Dialog>

//                     <Dialog>
                    
//                         <DialogTrigger>
//                             <div className="h-24 w-24 hover:bg-slate-200 rounded-lg flex items-center justify-center cursor-pointer">
//                                 <BanknoteArrowDown/>
//                                 <span className="text-xs font-semibold ml-2">Withdrawal</span>
//                             </div>
//                         </DialogTrigger>
//                         <DialogContent >
//                             <DialogHeader>
//                                 <DialogTitle >
//                                     Request Withdrawal
//                                 </DialogTitle>

//                             </DialogHeader>
//                             <WithdrawalForm/>
                        
//                         </DialogContent>

                        
//                     </Dialog>

//                     <Dialog>
//                         <DialogTrigger>
//                             <div className="h-24 w-24 hover:bg-slate-200 rounded-lg flex items-center justify-center cursor-pointer">
//                                 <ShuffleIcon/>
//                                 <span className="text-xs font-semibold ml-2">Transfer</span>
//                             </div>
//                         </DialogTrigger>
//                         <DialogContent >
//                             <DialogHeader>
//                                 <DialogTitle className="text-center text-xl">
//                                     Transfer to other wallet
//                                 </DialogTitle>

//                             </DialogHeader>
//                             <TransferForm/>
                        
//                         </DialogContent>

                        
//                     </Dialog>

//                 </CardContent> */}

//                 <CardContent>
//                     <div className="flex items-center mb-6">
//                         <DollarSign/>
//                         <span className="text-2xl font-semibold ml-2">6900</span>
//                     </div>

//                     <div className="flex items-start gap-6">
//                         <Dialog>
//                             <DialogTrigger>
//                                 <div className="h-24 w-24 hover:bg-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer">
//                                     <UploadIcon/>
//                                     <span className="text-xs font-semibold mt-2">Add Money</span>
//                                 </div>
//                             </DialogTrigger>
//                             <DialogContent>
//                                 <DialogHeader>
//                                     <DialogTitle>Top Up Your Wallet</DialogTitle>
//                                 </DialogHeader>
//                                 <TopupForm/>
//                             </DialogContent>
//                         </Dialog>

//                         <Dialog>
//                             <DialogTrigger>
//                                 <div className="h-24 w-24 hover:bg-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer">
//                                     <BanknoteArrowDown/>
//                                     <span className="text-xs font-semibold mt-2">Withdrawal</span>
//                                 </div>
//                             </DialogTrigger>
//                             <DialogContent>
//                                 <DialogHeader>
//                                     <DialogTitle>Request Withdrawal</DialogTitle>
//                                 </DialogHeader>
//                                 <WithdrawalForm/>
//                             </DialogContent>
//                         </Dialog>

//                         <Dialog>
//                             <DialogTrigger>
//                                 <div className="h-24 w-24 hover:bg-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer">
//                                     <ShuffleIcon/>
//                                     <span className="text-xs font-semibold mt-2">Transfer</span>
//                                 </div>
//                             </DialogTrigger>
//                             <DialogContent>
//                                 <DialogHeader>
//                                     <DialogTitle className="text-center text-xl">Transfer to other wallet</DialogTitle>
//                                 </DialogHeader>
//                                 <TransferForm/>
//                             </DialogContent>
//                         </Dialog>
//                     </div>
//                 </CardContent>

//             </Card>

//             <div className="py-5 pt-10">
//                 <div className="flex gap-2 items-center pb-5">
//                     <h1 className="text-2xl font-semibold">History</h1>
//                     <UpdateIcon className="h-7 w-7 p-0 cursor-pointer hover:text-slate-400"/>

//                 </div>

//                 {/* <div className="space-y-5"> */}
//                     <div>
//                         {[1,1,1,1,1,1,1,1].map((item, i) =><div key={i}> <Card className="px-5 flex justify-between items-center py-5">
//                             <div className="flex items-center gap-5">
//                                 <Avatar>
//                                     <AvatarFallback>
//                                         <ShuffleIcon className="h-7 w-7"/>
//                                     </AvatarFallback>
//                                 </Avatar>

//                                 <div className="space-y-1">
//                                     <h1>Buy Asset</h1>
//                                     <p className="text-sm text-gray-400">12/10/2023</p>
//                                 </div>

//                             </div>
//                             <div >
                                
//                             </div>
//                         </Card>}>
                        

//                     </div>
//                 </div>

//                 {/* </div> */}

//                 <div className="space-y-5">
//                     <div>
//                         {[1,1,1,1,1,1,1,1].map((item, i) => (
//                         <div key={i}>
//                             <Card className="px-5 flex justify-between items-center py-5">
//                             <div className="flex items-center gap-5">
//                                 <Avatar>
//                                     <AvatarFallback>
//                                         <ShuffleIcon className="h-7 w-7" />
//                                     </AvatarFallback>
//                                 </Avatar>

//                                 <div className="space-y-1">
//                                 <h1>Buy Asset</h1>
//                                 <p className="text-sm text-gray-400">12/10/2023</p>
//                                 </div>
//                             </div>
//                             <div>
                                
//                             </div>
//                             </Card>
//                         </div>
//                         ))}
//                     </div>
//                 </div>


            
//             </div>

//             </div>
//         </div>
        
//     );
// };

// export default Wallet;




import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReloadIcon, UpdateIcon } from "@radix-ui/react-icons";
import { Banknote, BanknoteArrowDown, CopyIcon, DollarSign, ShuffleIcon, UploadIcon, WalletIcon } from "lucide-react";
import React from "react";
import TopupForm from "./TopupForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Wallet = () => {
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
                                        #A4678Ed</p>
                                        <CopyIcon size={15} className="cursor-pointer hover:text-slate-400"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-slate-300"
                            ></ReloadIcon>
                        </div>
                    </div>
                </CardHeader>
                
                <CardContent>
                    <div className="flex items-center mb-6">
                        <DollarSign/>
                        <span className="text-2xl font-semibold ml-2">6900</span>
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
                    
                    {[1,1,1,1,1,1,1,1].map((item, i) => (
                    <div key={i}>
                        <Card className="px-5 flex justify-between items-center p-2">
                        <div className="flex items-center gap-5">
                            <Avatar>
                                <AvatarFallback>
                                    <ShuffleIcon className="h-7 w-7" />
                                </AvatarFallback>
                            </Avatar>

                            <div className="space-y-1 ">
                                <h1>Buy Asset</h1>
                                <p className="text-sm text-gray-400">12/10/2023</p>
                            </div>
                        </div>
                        <div >
                            <p className={`text-green-500 text-center`}>999 USD</p>
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
