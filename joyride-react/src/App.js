import React, { useState } from "react";
import Joyride from "react-joyride";

const App = () => {
  const [run, setRun] = useState(true);

  const steps = [
    {
      target: ".my-first-step",
      content: "This is the first step!",
    },
    {
      target: ".my-second-step",
      content: "This is the second step!",
    },
    {
      target: ".my-third-step",
      content: "This is the third step!",
    },
  ];

  return (
    <div>
      <h1 className="my-first-step">Welcome to the App!</h1>
      <button className="my-second-step">Click Me</button>
      <p className="my-third-step">Explore the features here.</p>

      <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />
    </div>
  );
};

export default App;
