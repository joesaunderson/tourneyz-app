import classNames from "classnames";
import { useHistory, useParams } from "react-router-dom";

const tabs = [
    { id: "latest", name: "Latest" },
    { id: "biggest-pot", name: "Biggest pot" },
    { id: "most-entrants", name: "Most entrants" },
];

interface Props {}

const FeedSelector: React.VoidFunctionComponent<Props> = () => {
    const history = useHistory();
    const { tournamentFilter = "latest" } = useParams<{ tournamentFilter?: string }>();

    const handleActiveFilterChange = (activeFilter: string) => {
        history.push(`/tournaments/${activeFilter}`);
    };

    return (
        <div className="px-4 sm:px-0">
            <div className="sm:hidden">
                <label htmlFor="question-tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="question-tabs"
                    className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    defaultValue={tabs.find((tab) => tab.id === tournamentFilter)?.name}
                    onChange={(event) => handleActiveFilterChange(event.target.value)}
                >
                    {tabs.map((tab) => (
                        <option value={tab.id} key={tab.name}>
                            {tab.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                    {tabs.map((tab, tabIdx) => (
                        <button
                            key={tab.name}
                            aria-current={tab.id === tournamentFilter ? "page" : undefined}
                            className={classNames(
                                tab.id === tournamentFilter ? "text-gray-900" : "text-gray-500 hover:text-gray-700",
                                tabIdx === 0 ? "rounded-l-lg" : "",
                                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                                "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                            )}
                            onClick={() => handleActiveFilterChange(tab.id)}
                        >
                            <span>{tab.name}</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    tab.id === tournamentFilter ? "bg-rose-500" : "bg-transparent",
                                    "absolute inset-x-0 bottom-0 h-0.5"
                                )}
                            />
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default FeedSelector;
