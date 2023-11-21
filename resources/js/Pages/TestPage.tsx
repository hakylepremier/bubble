import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps, Thought } from "@/types";
import Test from "@/Components/Test";

// export default function Dashboard({ auth }: PageProps) {
export default function Dashboard({
    auth,
    thought,
}: PageProps<{ thought: Thought }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    My Shower Thoughts
                </h2>
            }
        >
            <Test thought={thought} />
        </AuthenticatedLayout>
    );
}
