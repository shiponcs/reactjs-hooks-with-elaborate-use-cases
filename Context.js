import React, { createContext, useContext, useState } from "react";

const userContext = createContext([
  {
    firstName: "robert",
    lastName: "ball",
    suffix: 1,
    email: "xyz@zyx.com",
  },
  (obj) => obj,
]);

const LevelFour = () => {
  const [user, updateUser] = useContext(userContext);

  return (
    <div>
      <h2>{`${user.firstName} ${user.lastName} the ${user.suffix}`}</h2>
      <button
        onClick={() =>
          updateUser(Object.assign({}, user, { suffix: user.suffix + 1 }))
        }
      >
        Increments
      </button>
    </div>
  );
};

const LeveThree = () => (
  <div>
    <h2>Third Level</h2>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2>Second Level</h2>
    <LeveThree />
  </div>
);

const ContextCompont = () => {
  const useHook = useState({
    firstName: "robert",
    lastName: "ball",
    suffix: 1,
    email: "xyz@zyx.com",
  });

  return (
    <userContext.Provider value={useHook}>
      <h1>First Level</h1>
      <LevelTwo />
    </userContext.Provider>
  );
};

export default ContextCompont;
