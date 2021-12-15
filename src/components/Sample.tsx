import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '../rtkquery';
import { countSelector, logSelector, usersSelector } from '../selector/selector';
import { counterSlice } from '../slice/counter';
import { logSlice } from '../slice/log';
import { getUsers } from '../slice/users';

export const Sample = (props: any) => {
  const log = useSelector(logSelector);
  const dispatch = useDispatch();
  const { decrementCount } = counterSlice.actions;
  const { addLog, deleteLog, setLogLoading } = logSlice.actions;
  const users = useSelector(usersSelector);
  const user = users.users;
  const {data, error, isFetching} = useGetUsersQuery();
  console.log(data);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
    <div style={{ padding: '12px', backgroundColor: '#eee' }}>
      <h1>Sample Component</h1>
      <p>samplePropData</p>
      <h2>Counter State</h2>
      <p>count: {props.count}</p>
      <button type="button" onClick={() => dispatch(props.incrementCount(6))}>
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
    {error && <div>エラー</div>}
    {isFetching  && <div>ロード</div>}
    {data&& data.map((user, id) => (
      <div key={id}>
        <h2>{user.name}</h2>
      </div>
    ))}
    </>
  );
};
