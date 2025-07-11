// import { Button } from "@/components/ui/button";
// import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
// import React, { useState } from "react";

// const AccountVerificationForm = () => {
//     const [value, setValue] = useState("");
//     const handleSubmit=()=>{
//         console.log(value)
//     }
//     return (
//         <div className="flex justify-center">
//             <div className="w-full mt-10 space-y-5">
//                 <div className="flex justify-between items-center">
//                     <p>Email : </p>
//                     <p>milind@gmail.com</p>

//                     <Dialog>
//                         <DialogTrigger>Send OTP</DialogTrigger>
//                         <DialogContent>
//                             <DialogHeader>
//                             <DialogTitle>Enter OTP</DialogTitle>
//                             </DialogHeader>

//                             <div className="py-5 flex gap-10 justify-center items-center">
//                                 <InputOTP
//                                 value={value}
//                                 onChange={(value) => console.log(value)}
//                                  maxLength={6}>
//                                     <InputOTPGroup>
//                                         <InputOTPSlot index={0} />
//                                         <InputOTPSlot index={1} />
//                                         <InputOTPSlot index={2} />
//                                     </InputOTPGroup>
//                                     <InputOTPSeparator/>
//                                     <InputOTPGroup>
//                                         <InputOTPSlot index={3} />
//                                         <InputOTPSlot index={4} />
//                                         <InputOTPSlot index={5} />
//                                     </InputOTPGroup>
//                                 </InputOTP>
//                                 <DialogClose>
//                                     <Button
//                                     onClick={handleSubmit}
//                                     className={"w-[10rem]"}>
//                                         Verify
//                                     </Button>
//                                 </DialogClose>
//                             </div>
//                         </DialogContent>
//                     </Dialog>


//                 </div>
//             </div>

//         </div>

//     )
// }
// export default AccountVerificationForm;






import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";

const AccountVerificationForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log("OTP entered:", value);
    // Add your OTP verification logic here
  };

  return (
    <div className="flex justify-center">
      <div className="w-full mt-10 space-y-5">
        <div className="flex justify-between items-center">
          <p>Email: </p>
          <p>milind@gmail.com</p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Send OTP</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter OTP</DialogTitle>
              </DialogHeader>

              <div className="py-5 flex gap-10 justify-center items-center flex-col">
                <InputOTP
                  value={value}
                  onChange={setValue}
                  maxLength={6}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>

                <DialogClose asChild>
                  <Button
                    onClick={handleSubmit}
                    className="w-[10rem]"
                  >
                    Verify
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationForm;
