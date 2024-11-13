import { useNavigate } from "react-router-dom";
import { useGetPollsQuery } from "../slices/pollsApiSlice";

const Polls = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetPollsQuery();

  const handleViewPoll = (pollId) => {
    navigate(`/polls/${pollId}`);
  };

  if (isLoading) {
    return <div>Loading Polls...</div>;
  }

  if (error) {
    return <div>{error?.data.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Polls</h1>
          <button
            className="p-2 text-white bg-violet-600 rounded-md flex justify-center items-center"
            onClick={() => navigate("/create-poll")}
          >
            Create Poll
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.data?.polls.map((poll) => (
            <div
              key={poll._id}
              className="bg-white border rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
            >
              <img
                src={poll.imageUrl}
                alt={poll.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-md font-semibold text-gray-800">
                  {poll.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Created on {new Date(poll.createdAt).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleViewPoll(poll._id)}
                  className="mt-4 w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition duration-300"
                >
                  Vote 👍
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Polls;
