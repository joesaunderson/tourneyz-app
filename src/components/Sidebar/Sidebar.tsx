import classNames from "classnames";
import { NavLink } from "react-router-dom";

import useGames from "../../hooks/useGames";
import useNavigationItems from "../../hooks/useNavigationItems";

interface Props {}

const Sidebar: React.VoidFunctionComponent<Props> = () => {
    const navItems = useNavigationItems();
    const games = useGames();

    return (
        <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
            <div className="pb-8 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.to}
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
                    </NavLink>
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
                    {games.map((game) => (
                        <NavLink
                            key={game.name}
                            to={`/tournaments?game=${game.id}`}
                            className={classNames(
                                game.current ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:bg-gray-50 ",
                                "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                            )}
                        >
                            <span className="truncate">{game.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
