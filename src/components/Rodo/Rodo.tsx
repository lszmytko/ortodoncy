import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rodo = () => {
  const [isRodoShown, setIsRodoShown] = useState(true)

  if(!isRodoShown){
    return null;
  }
  return (
    <div className="Rodo" onClick={()=>{
      setIsRodoShown(false);
    }}>
      <p>
        Strona internetowa, na której się znajdujesz, wykorzystuje pliki
        cookies. Wyrażam zgodę na wykorzystywanie ciasteczek.{" "}
        {/* <i className="fas fa-check-circle"></i>
        <FontAwesomeIcon icon={['fas', 'check-circle']} /> */}
      </p>
    </div>
  );
};

export default Rodo;
