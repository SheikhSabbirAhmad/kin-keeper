import Image from "next/image";
import React from "react";

const FriendsCard = ({ friend }) => {
  const { name, picture, days_since_contact, status, tags } = friend;

  // 🔹 Status Style
  const getStatusStyle = () => {
    if (status === "overdue")
      return "bg-[#EF4444] text-white";
    if (status === "almost due")
      return "bg-[#EFAD44] text-white";
    return "bg-[#244D3F] text-white";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">

      {/* Image  */}
      <div className="flex justify-center mb-3">
        <Image
          src={picture}
          alt={name}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
      </div>

      <h2 className="text-[16px] font-semibold text-[#1F2937]">
        {name}
      </h2>

      <p className="text-xs text-gray-400 mt-1 mb-3">
        {days_since_contact}d ago
      </p>

      <div className="flex justify-center gap-2 mb-3 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-700 text-[10px] px-2 py-[2px] rounded-full font-medium"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <span
        className={`text-[10px] px-3 py-[4px] rounded-full font-medium ${getStatusStyle()}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
};

export default FriendsCard;