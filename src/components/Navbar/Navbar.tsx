import { Popover } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import useActiveUser from "../../hooks/useActiveUser";
import useNavigationItems from "../../hooks/useNavigationItems";
import DesktopUserMenu from "../DesktopUserMenu/DesktopUserMenu";
import MobileUserMenu from "../MobileUserMenu/MobileUserMenu";
import Searchbar from "../Searchbar/Searchbar";

interface Props {}

const Navbar: React.VoidFunctionComponent<Props> = () => {
    const navItems = useNavigationItems();
    const { data, loading } = useActiveUser();

    return (
        <Popover
            as="header"
            className={({ open }) =>
                classNames(
                    open ? "fixed inset-0 z-40 overflow-y-auto" : "",
                    "bg-white shadow-sm lg:static lg:overflow-y-visible"
                )
            }
        >
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                                <div className="flex-shrink-0 flex items-center">
                                    <NavLink to="/">
                                        <img
                                            className="block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                                            alt="Workflow"
                                        />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                                <Searchbar />
                            </div>
                            <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                                <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Popover.Button>
                            </div>
                            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                                {!loading && !data?.activeUser && (
                                    <NavLink to="/login" className="text-sm font-medium text-gray-900 hover:underline">
                                        Login
                                    </NavLink>
                                )}

                                {!loading && data?.activeUser && (
                                    <>
                                        <button className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                        <DesktopUserMenu user={data.activeUser} />
                                    </>
                                )}

                                <NavLink
                                    to="/tournament/host"
                                    className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                                >
                                    Host a tourney
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    aria-current={item.current ? "page" : undefined}
                                    className={classNames(
                                        item.current ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50",
                                        "block rounded-md py-2 px-3 text-base font-medium"
                                    )}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                        {!loading && data?.activeUser && <MobileUserMenu user={data.activeUser} />}
                    </Popover.Panel>
                </>
            )}
        </Popover>
    );
};

export default Navbar;
