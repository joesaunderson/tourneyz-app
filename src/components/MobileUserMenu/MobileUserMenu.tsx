import { BellIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

import useUserNavigationItems from "../../hooks/useUserNavigationItems";

interface Props {
    user: any;
}

const MobileUserMenu: React.VoidFunctionComponent<Props> = ({ user }) => {
    const navItems = useUserNavigationItems();

    return (
        <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                </div>
                <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.to}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default MobileUserMenu;
