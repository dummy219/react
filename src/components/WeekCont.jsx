import React from 'react'
import './styles/WeekStyle.css'

export default function WeekCont() {
  return (
    <div className='week-container'>

        <div className='left-side'>
            <ul>
                <li>monday</li>
                <li>tuesday</li>
                <li>wednesday</li>
                <li>thursday</li>
                <li>friday</li>
                <li>saturday</li>
                <li>sunday</li>
            </ul>
        </div>

        <table className='right-side'>
            <tr>
                <th>weight</th>
                <th>kcal</th>
                <th>steps</th>
                <th>water</th>
                <th>workout</th>  
            </tr>

            <tr>
                <td placeholder="enter weigh(night)" ></td>
                <td placeholder="enter current kcal intake"></td>
                <td placeholder="enter current steps"></td>
                <td placeholder="enter current water intake"></td>
                <td>
                    <ul>
                        <li>lower body</li>
                        <li>back</li>
                        <li>cardio</li>
                        <li>chest</li>
                    </ul>
                </td>
            </tr>
        </table>

        

    </div>
  )
}
