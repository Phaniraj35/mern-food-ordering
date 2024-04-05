import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

const MobileNavLinks = () => {
  const { logout } = useAuth0()

  const logoutHandler = () => logout()

  return (
    <>
        <Link to="/"
            className="flex bg-white items-center font-bold hover:text-orange-500"
        >
            Profile
        </Link>

        <Button onClick={logoutHandler} className="flex items-center px-3 font-bold hover:bg-gray-500">
            Logout
        </Button>
    </>
  )
}

export default MobileNavLinks