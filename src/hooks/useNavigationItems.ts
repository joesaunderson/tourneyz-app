import { FireIcon, HomeIcon, TrendingUpIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";

const HOME_URLS = [
    "/",
    "/tournaments",
    "/tournaments/latest",
    "/tournaments/biggest-pot",
    "/tournaments/most-entrants",
];

const useNavigationItems = () => {
    const location = useLocation();

    return [
        { name: "Home", to: "/", icon: HomeIcon, current: HOME_URLS.includes(location.pathname) },
        { name: "Trending", to: "/trending", icon: FireIcon, current: location.pathname === "/trending" },
        {
            name: "Leaderboards",
            to: "/leaderboards",
            icon: TrendingUpIcon,
            current: location.pathname === "/leaderboards",
        },
    ];
};

export default useNavigationItems;
