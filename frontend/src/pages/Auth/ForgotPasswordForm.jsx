import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";  
import { useForm } from "react-hook-form";

const ForgotPasswordForm  = () => {
    const form=useForm({
        resolver:"",
        defaultValues:{
            email:""
            
        }
    })
    const onSubmit=(data)=>{
        console.log(data)
    }
    return(
        <div className="px-10 py-2">
            <h1 className="text-xl font-bold mb-4 text-white">Forgot Password</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                           
                            <FormControl>
                                <Input
                                // name="ifscCode"
                                 className="border w-full border-gray-300 p-5"
                                 placeholder="Enter Your Email id" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                     
                    <Button variant="secondary" type="submit" className="w-full py-5 text-lg">
                        Submit
                    </Button>
                    
                </form>

            </Form>
        </div>
    )
}
export default ForgotPasswordForm ;