import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import Sample from '../components/Sample'
import { countSelector, logSelector } from '../selector/selector'

const Home: NextPage = () => {
  const count = useSelector(countSelector);
  const log = useSelector(logSelector);
  console.log(log.loading);
  return (
    <div style={{ padding: '12px', width: '400px', backgroundColor: '#ccc' }}>
      <h1>App{count}</h1>
      <Sample samplePropData="Data passed from parent." />
    </div>
  )
}

export default Home
