import { useState, useEffect } from "react";

type UserData = {
  login: { uuid: string };
  gender: string;
  name: { title: string; first: string; last: string };
  email: string;
  dob: { date: string; age: number };
  phone: number;
  cell: number;
  picture: { large: string; medium: string; thumbnail: string };
  nat: string;
};

function DashboardPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>("");
  const [users, setUsers] = useState<UserData[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?seed=myfixedseed&results=20"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Data");
        }

        const resData = await response.json();
        setUsers(resData.results);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleFilterData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    if (filter === "male") return user.gender === "male";
    if (filter === "female") return user.gender === "female";
    if (filter === "age") {
      return user.dob.age < 40;
    } else if (filter === "age20") {
      return user.dob.age < 20;
    }
    return "all";
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-stone-700 text-center mb-12">
            Loading...
          </h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-stone-700 text-center mb-12">
            Error: {error}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 xl:px-0">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-stone-700 text-center mb-12">
          Our Team
        </h1>
        <div className="space-y-4 mb-8">
          <hr className="border-stone-700" />
          <div className="flex space-x-2">
            <input
              className="w-1/4 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-stone-700 transition-colors duration-300"
              placeholder="Search"
              type="text"
            />
            <select
              value={filter}
              onChange={handleFilterData}
              className="max-w-sm px-4 py-2 cursor-pointer rounded-lg border border-gray-200 focus:outline-none focus:border-stone-700 transition-colors duration-300 "
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="age">Age lower than 40</option>
              <option value="age20">Age lower than 20</option>
            </select>
          </div>
          <hr className="border-stone-700" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.login.uuid}
                className="group relative bg-neutral-700/30 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-neutral-700/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    {/* Name and Age */}
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-white">
                        {user.name.title} {user.name.first} {user.name.last}
                      </h2>
                      <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-200 text-sm">
                        Age: {user.dob.age}
                      </span>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-200 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm">{user.email}</span>
                      </p>

                      <p className="text-gray-200 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="text-sm">{user.phone}</span>
                      </p>

                      <p className="text-gray-200 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm">{user.cell}</span>
                      </p>
                    </div>

                    {/* Additional Details */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-600">
                      <div className="text-sm text-gray-300">
                        Joined: {new Date(user.dob.date).toLocaleDateString()}
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-200 text-sm">
                        {user.nat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6">
              <p className="text-4xl font-bold text-stone-700 text-center">
                No users available for the {filter} filter
              </p>
              <button
                onClick={() => setFilter("all")}
                className="bg-stone-700 hover:bg-stone-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
