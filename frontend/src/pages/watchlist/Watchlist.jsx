import React, { use } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { addItemToWatchlist, getUserWatchlist } from "@/state/watchlist/Action";
import { existInWatchlist } from "@/utils/ExistingWatchlist";

const Watchlist = () => {
    const {watchlist}=useSelector(store=>store);
    const dispatch = useDispatch();
    const handleRemoveToWatchlist = (value) => {
        dispatch(addItemToWatchlist({coinId:value.coinDetails?.id,jwt:localStorage.getItem("jwt")}));

        console.log(value);
    };

    useEffect(() => {
        dispatch(getUserWatchlist(localStorage.getItem("jwt")));
    }, []);

    

    return (
        <div className="p-5 lg:p-20" >
            <h1 className="font-bold text-3xl text-left pb-5">Watchlist</h1>
            <Table className="border">
                        <TableHeader>
                            <TableRow>
                            <TableHead className="py-5 pl-4">COIN</TableHead>
                            <TableHead className="text-center">SYMBOL</TableHead>
                            <TableHead className="text-center">VOLUME</TableHead>
                            <TableHead className="text-center">MARKET CAP</TableHead>
                            <TableHead className="text-center">24h</TableHead>
                            <TableHead className="text-center">PRICE</TableHead>
                            <TableHead className="text-right text-red-600 pr-4">REMOVE</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {watchlist.items.map((item,index)=><TableRow key={index}>
                            <TableCell className="font-medium flex items-center gap-2 pl-4">
                                <Avatar className={"-z-50"}>
                                    <AvatarImage src={item.image}/>
                                </Avatar>
                                <span >{item.name}</span>
                            </TableCell>
                            <TableCell>{item.symbol}</TableCell>
                            <TableCell>{item.total_volume}</TableCell>
                            <TableCell>{item.market_cap}</TableCell>
                            <TableCell>{item.price_change_percentage_24h}</TableCell>
                            <TableCell className="">${item.current_price}</TableCell>
                            <TableCell className="text-right pr-4">
                                <Button onClick={()=>handleRemoveToWatchlist(item.id)} size="icon" variant="ghost" className="text-red-600 hover:bg-red-100 hover:text-red-600 rounded-full p-2">
                                    <BookmarkFilledIcon  className="w-6 h-6"/>
                                </Button>
                            </TableCell>

                            </TableRow>)}
                            
                        </TableBody>
                    </Table>
        </div>
    );
}
export default Watchlist;