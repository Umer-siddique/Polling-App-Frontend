import {
  useDeletePollMutation,
  useGetPollQuery,
} from "../slices/pollsApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useVoteOnPollMutation } from "../slices/pollsApiSlice";

const Poll = () => {
  const { pollId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetPollQuery(pollId);
  const [deletePoll] = useDeletePollMutation();
  const [voteOnPoll, { isLoading: votingLoader }] = useVoteOnPollMutation();

  // console.log("Poll", data);

  const handlePollDelete = async (id) => {
    try {
      const data = await deletePoll(id).unwrap();
      alert(data?.message);
      navigate("/polls");
    } catch (err) {
      alert(err?.data?.message || "Something went wrong");
      console.log(error);
      console.log(err);
    }
  };

  const handleVote = async (pollId, optionIndex) => {
    console.log(optionIndex);
    try {
      await voteOnPoll({ pollId, optionIndex }).unwrap();
    } catch (err) {
      alert(err?.data?.message || "Something went wrong");
      console.log(err);
    }
  };

  const formatFileSize = (sizeInBytes) => {
    return `${(sizeInBytes / 1024).toFixed(1)} KB`;
  };

  if (isLoading) {
    return <div>Loading Poll...</div>;
  }

  if (error) {
    return <div>{error?.data.message}</div>;
  }

  return (
    <div className="h-full w-full">
      <div className="max-w-3xl mx-auto mt-10 p-4 border border-gray-300 rounded-md">
        <div
          key={data?.data?.poll?._id}
          className="p-4 rounded-md border-gray-200"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            {data?.data?.poll.title}
          </h2>

          <div className="mb-4">
            <img
              src={data?.data?.poll?.imageUrl}
              alt="Poll Image"
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="text-sm text-gray-500">
              Initial size:{" "}
              {formatFileSize(data?.data?.poll?.originalImageSize)} | Optimized
              size: {formatFileSize(data?.data?.poll?.optimizedImageSize)}
            </p>
          </div>

          <div className="space-y-2">
            {data?.data?.poll?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleVote(data?.data?.poll?._id, Number(index))}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100"
                disabled={isLoading}
              >
                <div className="flex justify-between items-center">
                  <span>{option}</span>
                  <span className="text-sm text-gray-500">
                    {data?.data?.poll?.votes[index]} votes
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-right mt-4">
            <button
              className="text-blue-500 hover:underline mr-4"
              onClick={() =>
                navigate(`/polls/update-poll/${data?.data?.poll?._id}`)
              }
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:underline"
              onClick={() => handlePollDelete(data?.data?.poll?._id)}
            >
              Delete
            </button>
          </div>
        </div>

        {votingLoader && (
          <div className="flex justify-center items-center mt-4">
            <svg
              className="animate-spin h-5 w-5 text-violet-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <span className="ml-2 text-gray-500">Submitting vote...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Poll;
