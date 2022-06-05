import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import {
  countState,
  incrementCount,
  decrementCount,
} from 'recoil/recoil-atoms';
import styles from './counter.module.scss';

const useCounter = () => ({
  count: useRecoilValue(countState),
  increment: useSetRecoilState(incrementCount),
  decrement: useSetRecoilState(decrementCount),
  reset: useResetRecoilState(countState),
});

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  const handleIncrement = () => {
    increment(count);
  };

  const handleDecrement = () => {
    decrement(count);
  };

  return (
    <div className={styles.wrapper}>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
