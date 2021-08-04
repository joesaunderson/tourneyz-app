import { QueryResult, gql, useQuery } from "@apollo/client";

const GET_ACTIVE_USER = gql`
    query activeUser {
        activeUser {
            id
            email
        }
    }
`;

interface ActiveUserResponse {
    activeUser: {
        id: number;
        email: string;
    };
}

const useActiveUser = (): QueryResult<ActiveUserResponse> => useQuery<ActiveUserResponse>(GET_ACTIVE_USER);

export default useActiveUser;
