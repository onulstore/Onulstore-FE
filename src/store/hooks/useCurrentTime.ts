import { useEffect, useState } from 'react';

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return getReturnValues(currentTime);
};

const getReturnValues = (currentTime: any) => {
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return [hours, minutes, seconds];
};
