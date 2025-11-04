
export type Language = 'en' | 'pt';

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  language: Language;
}

export interface Post {
    id: string;
    author: Pick<User, 'id' | 'name'>;
    imageUrl: string;
    caption: string;
    likes: Like[];
    comments: Comment[];
    createdAt: string; // ISO 8601 date string
}

export interface Like {
    userId: string;
}

export interface Comment {
    id: string;
    userId: string;
    userName: string;
    text: string;
}
