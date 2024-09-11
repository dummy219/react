import React from 'react'
import './styles/TargetStyle.css';

export default function TargetCont({week, weekAverage, weekTarget}) {
  return (
    <div className='target-container'>

      <div className='week-tracker'>
        <h6 className='week-text'>week</h6>
        <h2 className='week-number'>4</h2>
        <h6 className='week-text2'>of 10</h6>
      </div>

      <div className='week-average'>
        <h6 className='average-text'>week average</h6>
        <h2 className='average-number'>62</h2>
        <h6 className='average-text2'>kg</h6>
      </div>

      <div className='week-target'>
        <h6 className='target-text'>week 4 target</h6>
        <h2 className='target-number'>61</h2>
        <h6 className='target-text2'>kg</h6>
      </div>
    </div>
  )
}
