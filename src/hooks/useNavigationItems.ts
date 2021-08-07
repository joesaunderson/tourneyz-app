import { FireIcon, HomeIcon, TrendingUpIcon } from "@heroicons/react/outline";

const useNavigationItems = () => {
    return [
        { name: "Home", href: "#", icon: HomeIcon, current: true },
        { name: "Trending", href: "#", icon: FireIcon, current: false },
        { name: "Leaderboards", href: "#", icon: TrendingUpIcon, current: false },
    ];
};

export default useNavigationItems;
