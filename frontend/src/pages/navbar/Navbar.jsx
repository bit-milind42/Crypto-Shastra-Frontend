import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
            <div className="flex items-center gap-3">
            <Sheet>
                <SheetTrigger>
                    <Button variant={"ghost"} size={"icon"} className="w-11 h-11 rounded-full ">
                        <DragHandleHorizontalIcon className="w-7 h-7" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side='left'>
                    <SheetHeader>
                    <SheetTitle>
                        <div className="text-3xl flex justify-center items-center gap-1">
                            <Avatar>
                                <AvatarImage src="https://cdn.pixabay.com/photo/2020/03/08/16/03/bitcoin-4912863_1280.jpg"/>
                            </Avatar>
                            <span className="text-orange-700 font-bold">Crypto</span>
                            <span >Shastra</span>

                        </div>
                    </SheetTitle>
                    <SheetDescription>
                        
                    </SheetDescription>
                    </SheetHeader>
                    <Sidebar/>
                </SheetContent>
            </Sheet>
            <p className="text-sm lg:text-base cursor-pointer">
                Crypto Shastra
            </p>
            <div className="p-0 ml-9"> 
                <Button variant={"outline"} 
                className="flex items-center gap-3">
                    <MagnifyingGlassIcon/>
                    <span>Search</span>
                    
                </Button>
            </div>
            </div>
            <Avatar>
                <AvatarFallback>
                    M
                </AvatarFallback>
            </Avatar>
        </div>
    )
}
export default Navbar;