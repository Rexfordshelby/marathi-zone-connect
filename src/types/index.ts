
export interface Celebrity {
  id: string;
  name: string;
  profession: string;
  image?: string;
  isLocalImage?: boolean;
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
  notableWorks?: string[];
  awards?: string[];
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
}
