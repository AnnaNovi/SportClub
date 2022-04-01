import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setModalAction } from "../../../store/modalReducer";


function Calendar({month}) {
  const dispatch = useDispatch();
  const [scheduleList, setScheduleList] = useState([]);
  const currentDate = month;
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const dayFirstMonth = 1;
  const checkCurrentMonth = (month.getFullYear() === new Date().getFullYear() && month.getMonth() === new Date().getMonth()) ? true : false;

  useEffect(() => {
    fetch(`http://localhost:3001/data/schedule`)
    .then(response => response.json())
    .then(data => setScheduleList([...data]));
  }, []);

  const calendar = function(){
    var days = [];
    var week = 0;
    days[week] = [];
    var dlast = new Date(currentYear, currentMonth + 1, 0).getDate();
    let a = 0;
    for (let i = 1; i <= dlast; i++) {
        if (new Date(currentYear, currentMonth, i).getDay() != dayFirstMonth) {
          a = {index:i, dayOfWeek: new Date(currentYear, currentMonth, i).getDay(), currentMonth:true};
          days[week].push(a);
        } else {
            week++;
            days[week] = [];
            a = {index:i, dayOfWeek: new Date(currentYear, currentMonth, i).getDay(), currentMonth:true};
            days[week].push(a);
        }
    }
    if (days[0].length > 0) {
        let previous = 0;
        for (let i = days[0].length; i < 7; i++) {
          const previousMonth = new Date(currentYear, currentMonth, previous);
          a = {index:previousMonth.getDate(), dayOfWeek: previousMonth.getDay(), currentMonth:false};
          days[0].unshift(a);
          previous = previous - 1;
        }
    }
    if (days[week].length > 0) {
      let next = 1;
      for (let i = days[week].length; i < 7; i++) {
        const nextMonth = new Date(currentYear, currentMonth + 1, next);
        a = {index:nextMonth.getDate(), dayOfWeek: nextMonth.getDay(), currentMonth:false};
        days[week].push(a);
        next = next + 1;
      }
    }
    return days;
  }
  const calendarDateStyle = (item) => {
    if(item.currentMonth) {
      const date = (checkCurrentMonth && item.index === new Date().getDate()) ? "calendarDays calendarDaysCurrent" : "calendarDays";
      return date;
    } else if (!item.currentMonth) {
      return "calendarDays calendarDaysHide";
    }
  }

  function handleDay(event, index){
    const day = event.target.firstChild.textContent;
    const date = (index === 0 && day > 7) ? new Date(currentYear, currentMonth - 1, day) : ((index === 4 || index === 5) && day < 7) ? new Date(currentYear, currentMonth + 1, day) : new Date(currentYear, currentMonth, day);
    dispatch(setModalAction({
      modalOpenState: true,
      modalAction: 'info',
      modalActionDetail: 'infoAboutSchedule',
      modalData: date}));
  }

  const daysOfMonth = calendar();
  const calendarRow = daysOfMonth.map((day, index) => {
    return <tr key={index} onClick={(event) => handleDay(event, index)}>
      {day.map((item, index) => {
        const countNumber = scheduleList.filter((filterItem) => filterItem.lessonRepeat && filterItem.lessonDay === item.dayOfWeek).length;
        return <td key={index} className={calendarDateStyle(item)}>{item.index} <span className="countLessons">{countNumber}</span></td>
      })}
    </tr>
  });

  return ( 
    <>
      {calendarRow}
    </>
  );
}

export default Calendar;