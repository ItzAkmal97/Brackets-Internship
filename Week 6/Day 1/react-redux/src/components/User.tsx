import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleUserData } from '../features/UserDetailsSlice';
import { RootState } from '../store/store';

const User = () => {
  const user = useSelector((state: RootState) => state.userDetails.user);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', user);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleUserData({
      ...user,
      [name]: value
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="firstName" className="text-gray-700 font-medium">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="lastName" className="text-gray-700 font-medium">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="cpassword" className="text-gray-700 font-medium">
            Confirm Password:
          </label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInputChange}
            className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-200 mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default User;