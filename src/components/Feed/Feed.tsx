import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { CodeIcon, DotsVerticalIcon, FlagIcon, StarIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { useParams } from "react-router-dom";

import useTournaments from "../../hooks/useTournaments";

interface Props {}

const Feed: React.VoidFunctionComponent<Props> = () => {
    const { feedFilter = "latest" } = useParams<{ feedFilter?: string }>();
    const tournaments = useTournaments(feedFilter);

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
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={tournament.author.imageUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href={tournament.author.href} className="hover:underline">
                                                {tournament.author.name}
                                            </a>
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <a href={tournament.href} className="hover:underline">
                                                <time dateTime={tournament.datetime}>{tournament.date}</time>
                                            </a>
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 self-center flex">
                                        <Menu as="div" className="relative inline-block text-left">
                                            {({ open }) => (
                                                <>
                                                    <div>
                                                        <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                                                            <span className="sr-only">Open options</span>
                                                            <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                                        </Menu.Button>
                                                    </div>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items
                                                            static
                                                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                        >
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                    : "text-gray-700",
                                                                                "flex px-4 py-2 text-sm"
                                                                            )}
                                                                        >
                                                                            <StarIcon
                                                                                className="mr-3 h-5 w-5 text-gray-400"
                                                                                aria-hidden="true"
                                                                            />
                                                                            <span>Add to favorites</span>
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                    : "text-gray-700",
                                                                                "flex px-4 py-2 text-sm"
                                                                            )}
                                                                        >
                                                                            <CodeIcon
                                                                                className="mr-3 h-5 w-5 text-gray-400"
                                                                                aria-hidden="true"
                                                                            />
                                                                            <span>Embed</span>
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                    : "text-gray-700",
                                                                                "flex px-4 py-2 text-sm"
                                                                            )}
                                                                        >
                                                                            <FlagIcon
                                                                                className="mr-3 h-5 w-5 text-gray-400"
                                                                                aria-hidden="true"
                                                                            />
                                                                            <span>Report content</span>
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </>
                                            )}
                                        </Menu>
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
