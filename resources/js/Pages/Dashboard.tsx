import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps, Thought } from "@/types";
import ThoughtComponent from "@/Components/ThoughtCard";
import Test from "@/Components/Test";

// export default function Dashboard({ auth }: PageProps) {
export default function Dashboard({
    auth,
    thoughts,
}: PageProps<{ thoughts: Thought[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Home
                </h2>
            }
        >
            <Head title="Home" />

            <div className="text-white p-6">
                <div className="mt-6 shadow-sm rounded-lg divide-y bg-[#164863]">
                    {thoughts.map((thought) => (
                        <ThoughtComponent
                            key={thought.id}
                            thought={thought}
                            // auth={auth}
                        />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
