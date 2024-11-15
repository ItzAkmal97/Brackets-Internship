import Button from "./Button";
import { useContext } from "react";
import { UserContextType, UserContext } from "./context/User.ts";

export default function Signup() {
  const context = useContext<UserContextType | null>(UserContext);
  
  const { attributes, handleSubmit, handleChange, isPassValid, isPassLenValid, isSubmitted } = context ?? {};

  const cssInputClass =
    "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400";
  const invalidCssClass =
    "border-red-400 dark:border-red-500 bg-red-50 dark:bg-red-900/10 focus:border-red-500 focus:ring-red-500";

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/30 p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Sign Up
        </h2>
        {isSubmitted && (
          <p className="mb-4 max-w-sm h-12 bg-green-300 dark:bg-green-900/30 border border-green-600 dark:border-green-600/30 text-green-900 dark:text-green-300 rounded-md flex items-center justify-center">
            Form submitted Successfully!
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              required
              value={attributes?.firstName}
              onChange={handleChange}
              className={cssInputClass}
              placeholder="First name"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              required
              value={attributes?.lastName}
              onChange={handleChange}
              className={cssInputClass}
              placeholder="Last name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={attributes?.email}
              onChange={handleChange}
              className={cssInputClass}
              placeholder="Email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              value={attributes?.password}
              onChange={handleChange}
              className={`${cssInputClass} ${
                !isPassLenValid ? invalidCssClass : ""
              }`}
              placeholder="Password"
            />
            {!isPassLenValid && (
              <p className="text-sm text-red-500 dark:text-red-400">
                Password should be equal to or greater than 8 characters.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="cpassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="cpassword"
              type="password"
              name="cpassword"
              required
              value={attributes?.cpassword}
              onChange={handleChange}
              className={`${cssInputClass} ${
                !isPassValid ? invalidCssClass : ""
              }`}
              placeholder="Confirm password"
            />
            {!isPassValid && (
              <p className="text-sm text-red-500 dark:text-red-400">Passwords don't match.</p>
            )}
          </div>

          <Button
            buttonType="submit"
            className="w-full bg-blue-600 dark:bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
            disabled={!isPassValid || !isPassLenValid}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}