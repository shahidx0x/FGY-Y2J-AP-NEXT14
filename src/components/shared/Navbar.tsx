
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Card } from "../ui/card";
export function Navbar() {
  return (
      <Card className="flex justify-end border-b-0 p-3">
          
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Card>
  );
}
