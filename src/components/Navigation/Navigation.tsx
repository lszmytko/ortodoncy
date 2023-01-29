import { useEffect, useState } from "react";
import NavigationPres from "./NavigationPres";

const Navigation = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  useEffect(() => {}, []);
  const handleMenuShow = (): void => {
    setIsMenuShown((prevState) => {
      return !prevState;
    });
  };
  return (
    <div>
      <NavigationPres
        handleMenuShow={handleMenuShow}
        isMenuShown={isMenuShown}
      />
    </div>
  );
};

export default Navigation;
