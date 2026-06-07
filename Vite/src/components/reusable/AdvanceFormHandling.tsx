import React, { useState } from "react";
import { useForm } from "react-hook-form";

// 1️⃣ Define form interface
interface HandleFormInterface {
  name: string;
  age: string; // keep as string for input
  mobile: string; // keep as string for input
  email: string;
}

const MyForm: React.FC = () => {
  // 2️⃣ Single state object
  const [formData, setFormData] = useState<HandleFormInterface>({
    name: "",
    age: "",
    mobile: "",
    email: "",
  });

  // 3️⃣ Dynamic handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  // 4️⃣ React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HandleFormInterface>({
    defaultValues: formData,
  });

  // 5️⃣ Form submit
  const onSubmit = (data: HandleFormInterface) => {
    // Convert numeric strings to numbers
    const formattedData = {
      ...data,
      age: Number(data.age),
      mobile: Number(data.mobile),
    };
    console.log("Final submitted data:", formattedData);

    // ✅ Clear the form inputs after submission
    setFormData({
      name: "",
      age: "",
      mobile: "",
      email: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form Example</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* 3️⃣ Object.keys mapping for inputs */}
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="capitalize mb-1">{key}</label>
            <input
              // Set type based on key
              type={key === "age" || key === "mobile" ? "number" : "text"}
              {...register(key as keyof HandleFormInterface, {
                required: true,
              })}
              name={key} // needed for handleChange
              value={formData[key as keyof HandleFormInterface]}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md"
            />
            {/* Show validation errors */}
            {errors[key as keyof HandleFormInterface] && (
              <span className="text-red-500 text-sm">{key} is required</span>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
