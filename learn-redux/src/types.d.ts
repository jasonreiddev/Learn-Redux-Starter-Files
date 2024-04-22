export interface Post {
  code: string;
  display_src: string;
  caption: string;
  likes: number;
  id: string;
}

export interface Comment {
  user: string;
  text: string;
}

export interface Comments {
  [key: string]: Comment[];
}
