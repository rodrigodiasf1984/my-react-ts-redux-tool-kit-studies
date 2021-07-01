import { useSelector, useDispatch } from 'react-redux';
import {RootState} from './redux/store';
import { decrement, increment } from './redux/slices/counterSlice';

import './App.css';

function App() {
  const count  = useSelector((state: RootState)=> state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>The count is: {count}</h1>
      <button  aria-label="Increment value" type="button" onClick={()=>dispatch(increment())}>Increment</button>
      <button  aria-label="Decrement value" type="button" onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
