import { useEffect, useRef, useState } from "react";

const useCountDown = (quantity: number, time: number) => {
  const [count, setCount] = useState(quantity);
  const [start, setStart] = useState<boolean>(false);
  const countRef = useRef<any>();
  const TIME_COUNT_DOWN = time || 1000;
  useEffect(() => {
    if (start) {
      if (count === 0) {
        clearInterval(countRef.current);
        setStart(false);
      } else {
        const intervalCount = setInterval(() => {
          setCount((count) => count - 1);
        }, TIME_COUNT_DOWN);
        countRef.current = intervalCount;
      }
    }

    return () => {
      clearInterval(countRef.current);
    };
  }, [start, count]);

  return { count, setCount, setStart };
};
export default useCountDown;
