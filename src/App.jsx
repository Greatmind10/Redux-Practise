import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/Counter';
import { decrement } from './redux/Counter';
import './App.css'


function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch=useDispatch()
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={()=>(count>0?dispatch(decrement()):0)}>Decrement</button>
      </div>
    </>
  );
}

export default App
