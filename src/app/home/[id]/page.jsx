"use client";

import { useParams } from "next/navigation";
import { useContext } from "react";
import { DataContext } from "@/components/DataContext";
import Image from "next/image";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FaBoxArchive } from "react-icons/fa6";
import { PiChatTextBold, PiPhoneCallBold, } from "react-icons/pi";
import { FiVideo } from "react-icons/fi";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends } = useContext(DataContext);

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) return <p className="p-8">Friend not found</p>;

  const {
    name,
    picture,
    status,
    tags,
    bio,
    email,
    goal,
    days_since_contact,
    next_due_date,
  } = friend;

  return (
    <div className=" bg-gray-100 p-8 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left part */}
        <div className="bg-white rounded-2xl shadow-sm p-6 text-center">

          <Image
            src={picture}
            alt={name}
            width={90}
            height={90}
            className="rounded-full mx-auto"
          />

          <h2 className="mt-3 text-xl text-[#1F2937] font-bold">{name}</h2>

          <div className="flex justify-center gap-2 mt-2">
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              Overdue
            </span>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              {tags?.[0]}
            </span>
          </div>

          <p className="text-[#64748B] text-lg mt-4 italic">
            "{bio}"
          </p>

          <p className="text-[#64748B] text-sm">Email: {email}</p>

          {/* action buttons */}
          <div className="mt-6 space-y-3">

            <button className="w-full flex items-center text-[#1F2937] font-semibold justify-center gap-2 bg-gray-100 hover:bg-gray-200 transition p-2 rounded-lg text-sm cursor-pointer">
              <RiNotificationSnoozeLine className="text-lg"/>Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center text-[#1F2937] font-semibold justify-center gap-2 bg-gray-100 hover:bg-gray-200 transition p-2 rounded-lg text-sm cursor-pointer">
              <FaBoxArchive className="text-sm"/>Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-[#EF4444] font-semibold hover:bg-red-100 transition p-2 rounded-lg text-sm cursor-pointer">
              <RiDeleteBinLine className="text-lg"/> Delete
            </button>

          </div>
        </div>

        {/* Right part */}
        <div className="md:col-span-2 space-y-10">

          <div className="grid grid-cols-3 gap-4">

            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#244D3F]">
                {days_since_contact}
              </h2>
              <p className="text-sm text-gray-500 font-semibold">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#244D3F]">
                {goal}
              </h2>
              <p className="text-sm text-gray-500 font-semibold">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#244D3F]">
                {next_due_date}
              </h2>
              <p className="text-sm text-gray-500 font-semibold">Next Due</p>
            </div>

          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-[#244D3F]">Relationship Goal</h3>
              <p className="text-sm font-semibold text-gray-500 mt-1">
                Connect every {goal} days
              </p>
            </div>

            <button className="px-4 py-2 text-sm font-bold bg-gray-100 rounded-lg hover:bg-gray-300 cursor-pointer">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-lg text-[#244D3F] mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">

              <button className="bg-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
                <PiPhoneCallBold className="text-3xl" />
                <span className="font-bold text-lg text-[#244D3F]">Call</span>
              </button>

              <button className="bg-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer rounded-xl p-4 flex flex-col items-center gap-2">
                <PiChatTextBold className="text-3xl" />
                <span className="font-bold text-lg text-[#244D3F]">Text</span>
              </button>

              <button className="bg-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer rounded-xl p-4 flex flex-col items-center gap-2">
                <FiVideo className="text-3xl" />
                <span className="font-bold text-lg text-[#244D3F]">Video</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;