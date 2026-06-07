import { useState } from "react";

interface HandleFormInterface {
  name: string;
  age: string;
  mobile: string;
  email: string;
}

// Constants for field config
const FIELDS: Record<
  keyof HandleFormInterface,
  { label: string; type: string }
> = {
  name: { label: "Name", type: "text" },
  age: { label: "Age", type: "number" },
  mobile: { label: "Mobile", type: "number" },
  email: { label: "Email", type: "email" },
};

const FormInput = ({
  name,
  type,
  label,
  value,
  onChange,
}: {
  name: keyof HandleFormInterface;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label className="block text-gray-600 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const OptimizedForm = () => {
  const [formData, setFormData] = useState<HandleFormInterface>({
    name: "",
    age: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numericData = {
      ...formData,
      age: Number(formData.age),
      mobile: Number(formData.mobile),
    };
    console.log("Submitted:", numericData);
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

        {(Object.keys(FIELDS) as (keyof HandleFormInterface)[]).map((key) => (
          <FormInput
            key={key}
            name={key}
            type={FIELDS[key].type}
            label={FIELDS[key].label}
            value={formData[key]}
            onChange={handleChange}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OptimizedForm;
