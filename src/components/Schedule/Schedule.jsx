import { useEffect, useState } from 'react';
import Calendar from './Calendar/Calendar';
import './Schedule.css'

function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentYear = currentDate.getFullYear();
  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const monthOfYear = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];
  const currentMonth = monthOfYear[currentDate.getMonth()];

  useEffect(() => {}, [currentDate]);

  return ( 
    <div className="Schedule">
      <table className="scheduleCalendar">
        <thead>
          <tr>
            <td class="buttonArrowCell" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>
                <button className="buttonArrow">
                  <svg className="buttonArrowRight" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34.075 34.075">
                  <g>
                    <g>
                      <path d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79
                        L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792
                        C25.58,33.883,25.075,34.075,24.57,34.075z"/>
                    </g>
                  </g>
                  </svg>
                </button>
            </td>
            <td className="monthYear" colSpan="5">
              {currentMonth}
              <span>{currentYear}</span>
            </td>
            <td class="buttonArrowCell" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>
                <button className="buttonArrow">
                  <svg className="buttonArrowLeft" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34.075 34.075">
                  <g>
                    <g>
                      <path d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79
                        L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792
                        C25.58,33.883,25.075,34.075,24.57,34.075z"/>
                    </g>
                  </g>
                  </svg>
                </button>
            </td>
          </tr>
          <tr>
            {daysOfWeek.map((day, index) => {
              return <th key={index}>{day}</th>
            })}
          </tr>
        </thead>
        <tbody>
          <Calendar month = {currentDate}/>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;