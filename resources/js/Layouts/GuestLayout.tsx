import ApplicationLogo from "@/Components/ApplicationLogo";
import LOGO from "../../images/LOGO.svg";
import { Head, Link } from "@inertiajs/react";
import type { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                />
            </Head>
            <div>
                <Link href="/">
                    <img src={LOGO} alt="Logo" className="h-16 w-16" />
                    {/* <ApplicationLogo className="w-20 h-20" /> */}
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>

            {route().current("login") && (
                <details className="transition-all duration-300 ease-in-out pt-8">
                    <summary className="transition-all duration-300 ease-in-out p-4 rounded-lg dark:text-gray-400 bg-blue-300 dark:bg-gray-800 list-none cursor-pointer flex gap-4 items-center justify-between">
                        <h4>View Dummy Credentials</h4>
                        {/* <i className="text-lg fa-brands fa-facebook" /> */}
                        <div className="relative w-4 h-4">
                            <i className="fa-solid absolute top-0 right-0 fa-chevron-down detail-open" />
                            <i className="fa-solid absolute top-0 right-0 fa-chevron-up detail-close" />
                        </div>
                    </summary>
                    <div className="pt-2 space-y-2">
                        <p className="dark:text-white">
                            Email: dummy@dummy.com
                        </p>
                        <p className="dark:text-white">Password: password</p>
                    </div>
                </details>
            )}
        </div>
    );
}
