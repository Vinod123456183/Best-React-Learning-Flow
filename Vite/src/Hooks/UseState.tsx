import { useState } from "react";

interface FormData {
  sname: string;
  studentClass: string;
  sec: string;
}

const UseState = () => {
  const [formData, setFormData] = useState<FormData>({
    sname: "",
    studentClass: "",
    sec: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    // Clear inputs after submit
    setFormData({
      sname: "",
      studentClass: "",
      sec: "",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white p-6 rounded"
      >
        <label>Name:</label>
        <input
          type="text"
          name="sname"
          value={formData.sname}
          onChange={handleChange}
          className="border p-2"
        />

        <label>Class:</label>
        <input
          type="number"
          name="studentClass"
          value={formData.studentClass}
          onChange={handleChange}
          className="border p-2"
        />

        <label>Section:</label>
        <input
          type="text"
          name="sec"
          value={formData.sec}
          onChange={handleChange}
          className="border p-2"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseState;
