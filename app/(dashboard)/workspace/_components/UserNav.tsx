import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {CreditCard, LogOut, User} from "lucide-react";
import {LogoutLink, PortalLink} from "@kinde-oss/kinde-auth-nextjs/components";

const user = {
    picture: "https://avatars.githubusercontent.com/u/124599?v=4",
    given_name: "John Doe",
}
const UserNav = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' size='icon'
                            className='size-12 rounded-xl hover:rounded-lg transition-all duration-200  bg-background/50  border-border/50 hover:bg-accent hover:text-accent-foreground'>
                        <Avatar className='relative size-8 rounded-lg'>
                            <AvatarImage src={user.picture} alt="user" className='object-cover'/>
                            <AvatarFallback>
                                {user.given_name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' side="right" sideOffset={8} className="w-[200px]">
                    <DropdownMenuLabel className='font-normal flex items-center gap-2 px-1 py-1.5 text-left text-sm'>

                        <Avatar>
                            <AvatarImage src={user.picture} alt="user" className='object-cover'/>
                            <AvatarFallback>
                                {user.given_name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className='grid flex-1 text-left text-sm leading-tight'>
                            <p className='truncate font-medium'>{user.given_name}</p>
                            <p className='text-muted-foreground truncate text-xs'>zzinue@gmail.com</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <PortalLink>
                                <User/>
                                Account
                            </PortalLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <PortalLink>
                                <CreditCard/>
                                Billing
                            </PortalLink>

                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator>
                        <DropdownMenuItem asChild>
                            <LogoutLink>
                                <LogOut/>
                                Log out
                            </LogoutLink>
                        </DropdownMenuItem>
                    </DropdownMenuSeparator>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default UserNav;
