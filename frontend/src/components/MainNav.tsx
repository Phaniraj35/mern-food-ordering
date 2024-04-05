import MainNavLinks from "./MainNavLinks"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  const loginHandler = async () => {
    await loginWithRedirect()
  }

  return (
    <span className="flex space-x-2 items-center">
      { isAuthenticated ? <MainNavLinks /> : (
        <Button onClick={loginHandler} variant="ghost" className="font-bold hover:text-orange-500 hover:bg-white">
          Login
        </Button>
      )}
    </span>
    
  )
}

export default MainNav