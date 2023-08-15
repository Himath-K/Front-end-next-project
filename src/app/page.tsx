"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) =>{
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 text-gray-800">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Enter your name</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={inputVal}
            className="border border-gray-400 p-2 text-gray-800 w-full mb-2 rounded"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Predict Data
          </button>
        </form>
      </div>
    </div>
  );
}
