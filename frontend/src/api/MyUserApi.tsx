import { useMutation } from "@tanstack/react-query"
import createHttp from "../http"
import { useAuth0 } from "@auth0/auth0-react"

type CreateUserRequest = {
    auth0Id: string,
    email: string
}

export const useCreateMyUser = () => {
        const { getAccessTokenSilently } = useAuth0();

        const createMyUserRequest = async (user: CreateUserRequest) => {
        const token = await getAccessTokenSilently();
        const http = createHttp(token)

        try {
            const response = await http.post('/api/my/user', user);

        } catch (err) {
            console.log(err)
            throw new Error("Error: failed to create user")
        }
    }

    const { mutateAsync: createUser, isSuccess, isError, isPending} = useMutation({
        mutationFn: createMyUserRequest
    });

    return { createUser, isPending, isError, isSuccess}
}