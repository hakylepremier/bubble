import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import type { PageProps, Thought } from "@/types";
import ThoughtComponent from "@/Components/ThoughtCard";
import Test from "@/Components/Test";
import { Link } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";

// export default function Dashboard({ auth }: PageProps) {
export default function Home({
    auth,
    thoughts,
}: PageProps<{ thoughts: Thought[] }>) {
    return (
        // <AuthenticatedLayout
        //     header={
        //         <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        //             Home
        //         </h2>
        //     }
        //     title="Home"
        // >
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="text-white">
                <div className="rounded-lg ">
                    {thoughts.map((thought) => (
                        <div
                            // className="hover:bg-slate-700 hover:rounded-lg"
                            key={thought.id}
                        >
                            <ThoughtComponent
                                thought={thought}
                                // auth={auth}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        // {/* </AuthenticatedLayout> */}
    );
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
Home.layout = (page: any) => <AuthLayout title="Home">{page}</AuthLayout>;
