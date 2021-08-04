const TOKEN_NAME = "authToken";

const useAuthToken = (): [string | null, (authToken: string) => void, () => void] => {
    const setAuthToken = (authToken: string) => localStorage.setItem(TOKEN_NAME, authToken);

    const removeAuthToken = () => localStorage.removeItem(TOKEN_NAME);

    return [localStorage.getItem(TOKEN_NAME), setAuthToken, removeAuthToken];
};

export default useAuthToken;
