import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countSelector, logSelector } from '../selector/selector';
import { counterSlice } from '../slice/counter';
import { logSlice } from '../slice/log';

type Props = {
  samplePropData?: string;
};

const Sample: FC<Props> = ({ samplePropData }) => {
  const count = useSelector(countSelector);
  const log = useSelector(logSelector);
  const dispatch = useDispatch();
  const { incrementCount, decrementCount } = counterSlice.actions;
  const { addLog, deleteLog, setLogLoading } = logSlice.actions;

  return (
    <div style={{ padding: '12px', backgroundColor: '#eee' }}>
      <h1>Sample Component</h1>
      <p>samplePropData: {samplePropData}</p>
      <h2>Counter State</h2>
      <p>count: {count}</p>
      <button type="button" onClick={() => dispatch(incrementCount(6))}>
        incrementCount
      </button>
      <button type="button" onClick={() => dispatch(decrementCount())}>
        decrementCount
      </button>
      <h2>Log State</h2>
      <p>log.logs.length: {log.logs.length}</p>
      <p>log.loading: {log.loading.toString()}</p>
      <button
        type="button"
        onClick={() => dispatch(addLog({ id: 1, text: 'xxx' }))}
      >
        addLog
      </button>
      <button type="button" onClick={() => dispatch(deleteLog({ id: 1 }))}>
        deleteLog
      </button>
      <button type="button" onClick={() => dispatch(setLogLoading())}>
        setLogLoading
      </button>
    </div>
  );
};

export default Sample;
