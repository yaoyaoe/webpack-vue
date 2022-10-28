function paddingDate(val){
  return Number(val) < 10 ? ('0' + val) : val
}

// 获取当前月最后一天
export function getLastMonthDay(){
  const data = new Date();
  data.setDate(1);
  data.setHours(0);
  data.setSeconds(0);
  data.setMinutes(0);
  const start = data.getTime();
  let currentMonth = data.getMonth();
  const nextMonth = ++currentMonth;
  const nextMonthFirstDay = new Date(
    data.getFullYear(),
    nextMonth,
    1
  );
  const end = nextMonthFirstDay - 1;
  const timeInfo = {
    begin: timestampToTime(start), // 这里调用时间戳转年月日时分秒方法
    end: timestampToTime(end)
  }
  return timeInfo
}
// 获取本周当前周一 及周日
export function getLastWeekDay(){
  const date = new Date();
  // 本周一的日期
  date.setDate(date.getDate() - date.getDay() + 1);
  const begin = date.getFullYear() + '-' + util.paddingDate(date.getMonth() + 1) + '-' + util.paddingDate(date.getDate()) + ' 00:00:00';
  // 本周日的日期
  date.setDate(date.getDate() + 6);
  const end = date.getFullYear() + '-' + util.paddingDate(date.getMonth() + 1) + '-' + util.paddingDate(date.getDate()) + ' 23:59:59';
  const timeInfo = {
    begin: begin,
    end: end
  }
  return timeInfo
}
// 时间戳转日期
export function timestampToTime(cjsj){
  const date = new Date(cjsj) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return Y + M + D + h + m + s;
}
// export default {
//   getLastMonthDay,
//   getLastWeekDay,
//   timestampToTime
// }
