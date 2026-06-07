import React, { useState } from "react";

const TagSelector: React.FC = () => {
  // 1️⃣ List of available tags
  const tags = ["React", "TypeScript", "JavaScript", "CSS", "HTML"];

  // 2️⃣ State to track selected tags
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 3️⃣ Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(
      (prev) =>
        prev.includes(tag)
          ? prev.filter((t) => t !== tag) // remove if already selected
          : [...prev, tag], // add if not selected
    );
  };

  return (
    <div>
      <h2>Select Tags:</h2>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full border ${
              selectedTags.includes(tag)
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <strong>Selected Tags:</strong> {selectedTags.join(", ") || "None"}
      </div>
    </div>
  );
};

export default TagSelector;
