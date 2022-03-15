

function Calendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const dayFirstMonth = '1';
  const calendar = function(){
    var days = [];
    var week = 0;
    days[week] = [];
    var dlast = new Date(currentYear, currentMonth + 1, 0).getDate();
    let a = 0;
    for (let i = 1; i <= dlast; i++) {
        if (new Date(currentYear, currentMonth, i).getDay() != dayFirstMonth) {
          a = {index:i, dayWeek:new Date(currentYear, currentMonth, i).getDay()};
          days[week].push(a);
        } else {
            week++;
            days[week] = [];
            a = {index:i, dayWeek:new Date(currentYear, currentMonth, i).getDay()};
            days[week].push(a);
        }
    }
    if (days[0].length > 0) {
        for (let i = days[0].length; i < 7; i++) {
            days[0].unshift(null);
        }
    }
    if (days[week].length > 0) {
        for (let i = days[week].length; i < 7; i++) {
            days[week].push(null);
        }
    }
    return days;
  }
  const daysOfMonth = calendar();
  console.log(daysOfMonth);
  const calendarRow = daysOfMonth.map((day, index) => {
    console.log(day);
    return <tr key={index}>
      {day.map((item, index) => {
        if(!item){
          return <td></td>
        } else {
          return <td key={index}>{item.index}</td>
        }
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