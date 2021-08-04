import { FetchResult, MutationResult, gql, useMutation } from "@apollo/client";

import useAuthToken from "./useAuthToken";

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            refreshToken
        }
    }
`;

interface LoginResponse {
    login: { token: string; refreshToken: string };
}

export const useLoginMutation = (): [
    (email: string, password: string) => Promise<FetchResult<LoginResponse>>,
    MutationResult<LoginResponse>
] => {
    const [_, setAuthToken] = useAuthToken();

    const [loginUser, mutationResults] = useMutation<LoginResponse>(LOGIN_USER, {
        onCompleted: (data) => {
            setAuthToken(data.login.token);
        },
    });

    const login = (email: string, password: string) => {
        return loginUser({
            variables: {
                email,
                password,
            },
        });
    };

    return [login, mutationResults];
};
