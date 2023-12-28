'use client';

import { useState } from "react";

const CartCounter = () => {
  const [count, setCount] = useState(0);

  function handleChangeCounter(value: number ){
    if ((count + value) < 0) return;
    setCount(prev => prev + value);
  };

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-4">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 w-[100px]"
          onClick={() => handleChangeCounter(1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white disabled:bg-gray-400 hover:bg-gray-600 transition-all mr-2 w-[100px]"
          disabled={count === 0}
          onClick={() => handleChangeCounter(-1)}

        >
          -1
        </button>
      </div>
    </>
  );
}

export default CartCounter;