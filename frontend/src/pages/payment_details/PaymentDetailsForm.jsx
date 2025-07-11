import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addPaymentDetails } from "@/state/withdrawal/Action";
import React from "react";  
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import PaymentDetails from "./PaymentDetails";

const PaymentDetailsForm = () => {
    const dispatch = useDispatch();
    const form=useForm({
        resolver:"",
        defaultValues:{
            accountHolder:"",
            accountNumber:"",
            ifscCode:"",
            bankName:""
        }
    })
    const onSubmit=(data)=>{
        dispatch(addPaymentDetails({
            PaymentDetails:data,
            jwt:localStorage.getItem("jwt")
        }))
        console.log(data)   
    }
    return(
        <div className="px-10 py-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    <FormField
                        control={form.control}
                        name="accountHolderName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>
                                Account Holder Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                // name="accountHolderName"
                                 className="border w-full border-gray-300 p-5"
                                 placeholder="Crypto Shastra" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="ifscCode"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>
                                IFSC Code
                            </FormLabel>
                            <FormControl>
                                <Input
                                // name="ifscCode"
                                 className="border w-full border-gray-300 p-5"
                                 placeholder="yes007" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>
                                Account Number
                            </FormLabel>
                            <FormControl>
                                <Input
                                // name="accountNumber"
                                 className="border w-full border-gray-300 p-5"
                                 placeholder="**************0069" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="confirmAccountNumber"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>
                                Confirm Account Number
                            </FormLabel>
                            <FormControl>
                                <Input className="border w-full border-gray-300 p-5"
                                 placeholder="confirm account number" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="bankName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>
                                Bank Name
                            </FormLabel>
                            <FormControl>
                                <Input className="border w-full border-gray-300 p-5"
                                 placeholder="Yes Bank" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogClose className="w-full">
                        <Button type="submit" className="w-full py-5 text-lg">
                            Submit
                        </Button>
                    </DialogClose>
                    

                </form>

            </Form>
        </div>
    )
}
export default PaymentDetailsForm;