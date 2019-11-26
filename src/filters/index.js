/**
 * 将时间戳转化为 xxxx 年 xx 月 xx 日 xx时 xx分 xx 秒的格式
 * @param timestamp 时间戳
 * @param level 'second' 代表是秒级时间戳 ,否则是毫秒级时间戳, 默认为 'second'
 * @param separator 年月日之间的分隔符，默认为 '/'
 * @param showTime 是否显示时分秒，true 代表显示，false 代表不显示，默认为 true
 * @returns {string}
 */
export function convertTimestampToDate (timestamp, level = 'second', separator = '/', showTime = true) {
  (level === 'second') && (timestamp *= 1000)
  let date = new Date(timestamp)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDay()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  if (showTime) {
    return `${year}${separator}${month < 10 ? '0' + month : month}${separator}${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
  }
  return `${year}${separator}${month < 10 ? '0' + month : month}${separator}${day < 10 ? '0' + day : day}`
}
