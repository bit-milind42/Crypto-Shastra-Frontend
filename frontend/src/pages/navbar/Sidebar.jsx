import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { logout } from "@/state/auth/Action";
import { ActivityLogIcon, BookmarkIcon, DashboardIcon, ExitIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { CreditCardIcon, LandmarkIcon, WalletIcon } from "lucide-react";
import path from "path";
import React, { use } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const menu=[
    {name:"Home",path:"/",icon:<HomeIcon className="w-6 h-6"/>},
    {
        name: "Profile",
        path: "/profile",
        icon: <PersonIcon className="w-6 h-6" />,
    },
    {
        name: "Portfolio",
        path: "/portfolio",
        icon: <DashboardIcon className="w-6 h-6" />,
    },
    {
        name: "Watchlist",
        path: "/watchlist",
        icon: <BookmarkIcon className="w-6 h-6" />,
    },
    {
        name: "Activity",
        path: "/activity",
        icon: <ActivityLogIcon className="w-6 h-6" />,
    },
    {
        name: "Wallet",
        path: "/wallet",
        icon: <WalletIcon />,
    },
    {
        name: "Payment Details",
        path: "/payment-details",
        icon: <LandmarkIcon className="w-6 h-6" />,
    },
    {
        name: " Withdrawal",
        path: "/withdrawal",
        icon: <CreditCardIcon className="w-6 h-6" />,
    },
    
    {
        name: "Logout",
        path: "/",
        icon: <ExitIcon className="w-6 h-6" />,
    },
]

const Sidebar = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const handleLogout=()=>{
        dispatch(logout())
    }
    return (
        <div className="mt-10 space-y-5">
            {menu.map((item, index) => (
                <div key={index}>
                    <SheetClose className="w-full">           
                    <Button variant="outline" className="flex items-center gap-5 w-full py-6"
                    onClick={()=>{navigate(item.path)
                        if(item.name=="Logout"){
                            handleLogout()
                        }
                    }}>
                        
                        <span className="w-8">
                            {item.icon}
                        </span>
                        <p>{item.name}</p>
                    </Button>
                    </SheetClose>
                </div>
            ))
            }
            {/* <div>
                <SheetClose className="w-full">           
                <Button variant="outline" className="flex items-center gap-5 w-full py-6">
                    <span className="w-8">
                        <HomeIcon className="w-8"/>
                    </span>
                    <p>Home</p>
                </Button>
                </SheetClose>
            </div> */}

            
        </div>
    )
}
export default Sidebar;