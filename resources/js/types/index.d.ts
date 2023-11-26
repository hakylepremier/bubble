export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: Date;
    followers: Follow[];
}

export interface Like {
    id: number;
    follower_user_id: number;
    followed_user_id: number;
}

export interface Follow {
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
    user?: User;
};

export interface MyPage {
    props: PageProps;
}
