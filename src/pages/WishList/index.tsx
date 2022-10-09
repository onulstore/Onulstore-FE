import React, { useState } from 'react';

const WishList = () => {
  const [testArr, setTestArr] = useState<any>([]);
  const [testNum, setTestNum] = useState(0);
  let i = 3800;

  const plusHandler = () => {
    setTestArr([...testArr, i]);

    const test =
      testArr.reduce((acc: number, cur: number) => {
        return acc + cur;
      }, 3800) + 800;
    setTestNum(test);
  };

  const minusHandler = () => {
    if (testArr.length < 1) {
      alert('한개이상 구매해야합니다');
      return;
    }
    setTestArr(testArr.splice(1, 2));

    setTestNum(
      testArr.reduce((acc: number, cur: number) => {
        return acc + cur;
      }, 3800) + 800,
    );
  };
  console.log(testArr);
  console.log(testNum);
  return (
    <div>
      <input type="number" />
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
    </div>
  );
};

export default WishList;
