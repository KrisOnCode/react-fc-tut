import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount +1);
  }

  return (
    <div>
      <div>
        The count is: {count}
        <button onClick={handleIncrement}></button> 
      </div>
    </div>
  )
}
