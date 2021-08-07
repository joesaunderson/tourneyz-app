import useTopPlayers from "../../hooks/useTopPlayers";
import useTrendingPlayers from "../../hooks/useTrendingPlayers";

interface Props {}

const Aside: React.VoidFunctionComponent<Props> = () => {
    const topPlayers = useTopPlayers();
    const trendingPlayers = useTrendingPlayers();

    return (
        <div className="sticky top-4 space-y-4">
            <section aria-labelledby="who-to-follow-heading">
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                        <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
                            Top players
                        </h2>
                        <div className="mt-6 flow-root">
                            <ul className="-my-4 divide-y divide-gray-200">
                                {topPlayers.map((user) => (
                                    <li key={user.handle} className="flex items-center py-4 space-x-3">
                                        <div className="flex-shrink-0">
                                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a href={user.href}>{user.name}</a>
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <a href={user.href}>{"@" + user.handle}</a>
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                            >
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                View all
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section aria-labelledby="trending-heading">
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                        <h2 id="trending-heading" className="text-base font-medium text-gray-900">
                            Trending players
                        </h2>
                        <div className="mt-6 flow-root">
                            <ul className="-my-4 divide-y divide-gray-200">
                                {trendingPlayers.map((user) => (
                                    <li key={user.handle} className="flex items-center py-4 space-x-3">
                                        <div className="flex-shrink-0">
                                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a href={user.href}>{user.name}</a>
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <a href={user.href}>{"@" + user.handle}</a>
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                            >
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                View all
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aside;
