import { useState } from "react";
import Button from "./Button";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cpassword: string;
}

export default function Signup() {
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

  const cssInputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const invalidCssClass =
    "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500";

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        {isSubmitted && (
          <p className="mb-4 max-w-sm h-12 bg-green-300 border border-green-600 text-green-900 rounded-md flex items-center justify-center">
            Form submitted Successfully!
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              required
              value={attributes.firstName}
              onChange={handleChange}
              className={cssInputClass}
              placeholder="First name"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              required
              value={attributes.lastName}
              onChange={handleChange}
              className={cssInputClass}
              placeholder="Last name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={attributes.email}
              onChange={handleChange}
              className={cssInputClass}
              placeholder="Email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              value={attributes.password}
              onChange={handleChange}
              className={`${cssInputClass} ${
                !isPassLenValid ? invalidCssClass : ""
              }`}
              placeholder="Password"
            />
            {!isPassLenValid && (
              <p className="text-sm text-red-500">
                Password should be equal to or greater than 8 characters.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="cpassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="cpassword"
              type="password"
              name="cpassword"
              required
              value={attributes.cpassword}
              onChange={handleChange}
              className={`${cssInputClass} ${
                !isPassValid ? invalidCssClass : ""
              }`}
              placeholder="Confirm password"
            />
            {!isPassValid && (
              <p className="text-sm text-red-500">Passwords don't match.</p>
            )}
          </div>

          <Button
            buttonType="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            disabled={!isPassValid || !isPassLenValid}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
