import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";

import useAuthToken from "./useAuthToken";

const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_URL });

const authMiddleware = (authToken: string | null) =>
    new ApolloLink((operation, forward) => {
        if (authToken) {
            operation.setContext({
                headers: {
                    authorization: `Bearer ${authToken}`,
                },
            });
        }

        return forward(operation);
    });

const cache = new InMemoryCache({});

const useApolloClient = () => {
    const [authToken] = useAuthToken();

    return new ApolloClient({
        link: authMiddleware(authToken).concat(httpLink),
        cache,
    });
};

export default useApolloClient;
