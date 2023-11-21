export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Thought {
    id: number;
    message: string;
    created_at: Date;
    updated_at: Date;
    user: User;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
