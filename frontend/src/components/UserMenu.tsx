import { CircleUserRound } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UserMenu = () => {

  const { user, logout } = useAuth0();

  const logoutHandler = () => logout()

  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
                <CircleUserRound className="text-orange-500" />
                {user?.email}
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/" className="font-bold hover:text-orange-500">Profile</Link>
                </DropdownMenuItem>

                <Separator />

                <DropdownMenuItem>
                    <Button onClick={logoutHandler} className="flex flex-1 font-bold bg-orange-500">Logout</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default UserMenu