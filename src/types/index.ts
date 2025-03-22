
export interface Celebrity {
  id: string;
  name: string;
  profession: string;
  image?: string;
  availability: boolean;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  bio?: string;
  events?: string[];
  achievements?: string[];
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
}
