import React from "react";

const Loading = () => {
  return (
    <div className="bg-stone-950 rounded-md shadow-sm pt-10 px-6 relative h-2/3 pb-4 w-52">
      <span className="absolute right-4 top-4 bg-amber-400 py-0 px-2 rounded-full text-gray-950 text-xs font-medium">
        Loading..
      </span>
      <h4 className="text-xl font-bold">Loading..</h4>
      <p>loading..</p>
      <h6 className="text-end font-medium italic underline underline-offset-4">
        Loading..
      </h6>
    </div>
  );
};

export default Loading;
