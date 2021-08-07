import { NavLink, useParams } from "react-router-dom";

import useTournaments from "../../hooks/useTournaments";

interface Props {}

const Feed: React.VoidFunctionComponent<Props> = () => {
    const { tournamentFilter = "latest" } = useParams<{ tournamentFilter?: string }>();
    const tournaments = useTournaments(tournamentFilter);

    return (
        <div className="mt-4">
            <h1 className="sr-only">Recent questions</h1>
            <ul className="space-y-4">
                {tournaments.map((tournament) => (
                    <li key={tournament.id} className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                        <article aria-labelledby={"tournament-title-" + tournament.id}>
                            <div>
                                <div className="flex space-x-3">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={tournament.host.imageUrl} alt="" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-gray-900">
                                            <NavLink to={`/player/${tournament.host.id}`} className="hover:underline">
                                                {tournament.host.name}
                                            </NavLink>
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <NavLink to={`/tournament/${tournament.id}`} className="hover:underline">
                                                <time dateTime={tournament.datetime}>{tournament.date}</time>
                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                                <h2
                                    id={"tournament-title-" + tournament.id}
                                    className="mt-4 text-base font-medium text-gray-900"
                                >
                                    {tournament.title}
                                </h2>
                            </div>
                            <div
                                className="mt-2 text-sm text-gray-700 space-y-4"
                                dangerouslySetInnerHTML={{ __html: tournament.body }}
                            />
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feed;
