import Feed from "../../components/Feed/Feed";
import FeedSelector from "../../components/FeedSelector/FeedSelector";
import RightSidebarTemplate from "../../templates/RightSidebarTemplate/RightSidebarTemplate";

interface Props {}

const TournamentFeed: React.VoidFunctionComponent<Props> = () => {
    return (
        <RightSidebarTemplate>
            <FeedSelector />
            <Feed />
        </RightSidebarTemplate>
    );
};

export default TournamentFeed;
