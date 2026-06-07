import { useState } from "react";
import type { HandleFormInterface } from "../../type/form_interface";

function Form() {
  const [formData, setFormData] = useState<HandleFormInterface>({
    name: "",
    age: "",
    mobile: "",
    email: "",
  });

//   dynamic handling change for all inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value, }));
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          User Details
        </h2>

        {/* Name */}
        <div>
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-gray-600 mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-gray-600 mb-1">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
