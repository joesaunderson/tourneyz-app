import Aside from "../../components/Aside/Aside";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

interface Props {}

const RightSidebarTemplate: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-gray-100">
            <Navbar />

            <div className="py-10">
                <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
                        <Sidebar />
                    </div>
                    <main className="lg:col-span-9 xl:col-span-6">{children}</main>
                    <aside className="hidden xl:block xl:col-span-4">
                        <Aside />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default RightSidebarTemplate;
