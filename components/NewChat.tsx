import { PlusIcon } from "@heroicons/react/24/solid";

const NewChat = () => {
  return (
    <div>
      <div className="border border-gray-700 chatRow">
        <PlusIcon className="w-4 h-4" />
        <p>New Chat</p>
      </div>
    </div>
  );
};

export default NewChat;
