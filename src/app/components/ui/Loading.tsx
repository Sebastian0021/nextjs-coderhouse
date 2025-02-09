import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />
    </div>
  );
};

export default Loading;
