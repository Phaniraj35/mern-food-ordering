import { useNavigate } from "react-router-dom";
import { useCreateMyUser } from "../api/MyUserApi";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
    children : React.ReactNode
}

const Auth0ProviderWithNavigate = ( { children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error('error: auth0 initialization error')
  }

  const onRedirectHandler = (appState?: AppState, user?:User) => {
    // console.log(appState, user, '--auth redirect')
    navigate('/auth-callback');
  }

  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: redirectUri }} onRedirectCallback={onRedirectHandler}
    >
        { children }
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate