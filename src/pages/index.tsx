import { useDispatch, useSelector } from 'react-redux'
import { Sample } from '../components/Sample';
import { countSelector, logLoadingSelector, logSelector } from '../selector/selector'
import { counterSlice } from '../slice/counter';
import { logSlice } from '../slice/log';

const Home = () => {
  const count = useSelector(countSelector);
  const log = useSelector(logSelector);
  const logloading = useSelector(logLoadingSelector);
  const dispatch = useDispatch;
  const { incrementCount, decrementCount } = counterSlice.actions;
  const { addLog, deleteLog, setLogLoading } = logSlice.actions;
  const _props = {
    count,
    log,
    incrementCount,
    decrementCount,
    addLog,
    deleteLog,
    setLogLoading
  }
  console.log(logloading);
  return (
    <div style={{ padding: '12px', width: '400px', backgroundColor: '#ccc' }}>
      <h1>App{count}</h1>
      <Sample {..._props} />
    </div>
  )
}

export default Home;
