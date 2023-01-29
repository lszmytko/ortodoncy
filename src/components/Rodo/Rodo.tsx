import { useState } from "react";

const Rodo = () => {
  const [isRodoShown, setIsRodoShown] = useState(true);

  if (!isRodoShown) {
    return null;
  }
  return (
    <div
      className="Rodo"
      onClick={() => {
        setIsRodoShown(false);
      }}
    >
      <p>
        Strona internetowa, na której się znajdujesz, wykorzystuje pliki
        cookies. Wyrażam zgodę na wykorzystywanie ciasteczek.{" "}
      </p>
    </div>
  );
};

export default Rodo;
