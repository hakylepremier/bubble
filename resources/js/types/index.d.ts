export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Like {
    id: number;
    thought_id: number;
    user_id: number;
}

export interface Insight {
    id: number;
    message: string;
    thought_id: number;
    user_id: number;
    user: User;
    created_at: Date;
    updated_at: Date;
}

export interface Thought {
    id: number;
    message: string;
    created_at: Date;
    updated_at: Date;
    user: User;
    likes: Like[];
}

export interface ThoughtInsight extends Thought {
    insights: Insight[];
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
