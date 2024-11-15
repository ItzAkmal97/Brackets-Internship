import { createContext } from "react";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cpassword: string;
  }

export type UserContextType = {
  user: User;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isPassValid: boolean;
  isPassLenValid: boolean;
  isSubmitted: boolean;
  attributes: User;
}

export const UserContext = createContext<UserContextType | null>(null);