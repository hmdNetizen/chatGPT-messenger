import React from "react";

import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              What is the difference between a dog and a cat
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
        {/* Second */}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Bolt Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the GPT Model to use</p>
            <p className="infoText">
              Messages are saved in Firebases' firestore
            </p>
            <p className="infoText">
              Hot toast notification when ChatGPT is thinking
            </p>
          </div>
        </div>
        {/* Third */}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Warning Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May Occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasional produce harmful instructions or biase content
            </p>
            <p className="infoText">
              Limited knowledge of the world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
