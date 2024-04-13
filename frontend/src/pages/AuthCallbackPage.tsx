import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();
  const navigate = useNavigate();

  const hasUserCreated = useRef(false);

  useEffect(() => {

    if (user?.sub && user?.email && !hasUserCreated.current) {
        createUser({ auth0Id: user?.sub, email: user?.email});
        hasUserCreated.current = true;
    }

    navigate('/');

  }, [])

  return (
    <div>Loading ...</div>
  )
}

export default AuthCallbackPage