import React from "react";

// 1️⃣ Define card interface
interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

// 2️⃣ Props for CardList component
interface CardListProps {
  cards: CardData[];
}

// 3️⃣ CardList component
const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="border rounded-md shadow p-4 flex flex-col items-center"
        >
          {card.imageUrl && (
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-32 object-cover mb-2 rounded"
            />
          )}
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
