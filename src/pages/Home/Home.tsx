import useActiveUser from "../../hooks/useActiveUser";

interface Props {}

const Home: React.VoidFunctionComponent<Props> = () => {
    const { data } = useActiveUser();

    if (data?.activeUser) {
        return <span>Logged in as {data.activeUser.email}</span>;
    }

    return <span>Not logged in</span>;
};

export default Home;
