import { useState } from "react";
import { useCreatePollMutation } from "../slices/pollsApiSlice";
import { useNavigate } from "react-router-dom";

const CreatePoll = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([""]);
  const [image, setImage] = useState(null);

  const [createPoll, { isLoading, error }] = useCreatePollMutation();

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    setOptions(options.map((opt, idx) => (idx === index ? value : opt)));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    options.forEach((option, index) => {
      formData.append(`options[${index}]`, option);
    });
    if (image) formData.append("image", image);

    try {
      await createPoll(formData).unwrap();
      alert("Poll created successfully!");
      navigate("/polls");
    } catch (err) {
      alert(err?.data?.message || "Something went wrong");
      console.log(error);
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create a Poll</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Poll Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-500"
              placeholder="Enter poll title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Options
            </label>
            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-2 focus:outline-none focus:border-violet-500"
                placeholder={`Option ${index + 1}`}
                required
              />
            ))}
            <button
              type="button"
              onClick={handleAddOption}
              className="text-violet-600 font-semibold hover:underline mt-2"
            >
              + Add another option
            </button>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full text-gray-700 px-4 py-2 border rounded-lg cursor-pointer focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 text-white bg-violet-600 rounded-md flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
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
            ) : (
              "Create Poll"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePoll;
