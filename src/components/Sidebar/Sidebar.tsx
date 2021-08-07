import classNames from "classnames";

import useNavigationItems from "../../hooks/useNavigationItems";

const sidebarGames = [
    { name: "Warzone", href: "#" },
    { name: "MW", href: "#" },
    { name: "Black Ops", href: "#" },
    { name: "Battlefield", href: "#" },
    { name: "Splitgate", href: "#" },
    { name: "Fallguys", href: "#" },
];

interface Props {}

const Sidebar: React.VoidFunctionComponent<Props> = () => {
    const navItems = useNavigationItems();

    return (
        <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
            <div className="pb-8 space-y-1">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:bg-gray-50",
                            "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                    >
                        <item.icon
                            className={classNames(
                                item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500",
                                "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                    </a>
                ))}
            </div>
            <div className="pt-10">
                <p
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    id="communities-headline"
                >
                    All games
                </p>
                <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
                    {sidebarGames.map((community) => (
                        <a
                            key={community.name}
                            href={community.href}
                            className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                        >
                            <span className="truncate">{community.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
