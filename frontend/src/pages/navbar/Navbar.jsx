import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";

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
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                        
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            </div>
        </div>
    )
}
export default Navbar;