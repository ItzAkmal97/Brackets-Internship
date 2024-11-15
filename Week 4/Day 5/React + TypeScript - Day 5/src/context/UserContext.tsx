import { useState, ReactNode } from "react";
import { UserContext } from "./User.ts";
import React from "react";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cpassword: string;
  }

type UserProviderProps = {
  children: ReactNode;
};


export const UserProvider = ({ children }: UserProviderProps) => {
  const [attributes, setAttributes] = useState<User>({
    firstName: "",
    lastName: "",
    password: "",
    cpassword: "",
    email: "",
  });

  const [isPassValid, setIsPassValid] = useState<boolean>(true);
  const [isPassLenValid, setIsPassLenValid] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (attributes.password !== attributes.cpassword) {
      setIsPassValid(false);
      return;
    } else if (attributes.password.length < 8) {
      setIsPassLenValid(false);
      return;
    } else {
      setIsSubmitted(true);
      console.table(attributes);
    }

    setAttributes({
      firstName: "",
      lastName: "",
      password: "",
      cpassword: "",
      email: "",
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAttributes((prev) => ({
      ...prev,
      [name]: value,
    }));

    setIsPassValid(true);
    setIsPassLenValid(true);
    setIsSubmitted(false);
  };

  return (
    <UserContext.Provider
      value={{ attributes, user: attributes, handleSubmit, handleChange, isPassLenValid, isPassValid, isSubmitted }}
    >
      {children}
    </UserContext.Provider>
  );
};
