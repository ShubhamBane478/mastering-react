import { useEffect, useState } from 'react';


import ProgressBar from '../../src/components/ProgressBar';
import './ProgressBar.css';

const ProgressBarPage = () => {

    const [value , setValue] = useState(0);
   

    useEffect(() => {
        setInterval(()=>{
            setValue((val)=> val + 1);

        },100)
        },[]);
  return (
    <div className='progress-container'>
      <h1>Progress bar</h1>
      <ProgressBar value={value} />
    </div>
  )
}

export default ProgressBarPage;
