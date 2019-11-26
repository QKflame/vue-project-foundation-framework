// 校验 email
export function validateEmail (str) {
  const reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
  return reg.test(str)
}

// 校验国内手机号码
export function validateTel (str) {
  const reg = /\d{3}-\d{8}|\d{4}-\{7,8}/
  return reg.test(str)
}

// 校验网址url
export function validateUrl (str) {
  const reg = /[a-zA-z]+:\/\/[^\s]*/
  return reg.test(str)
}

// 校验腾讯QQ号
export function validateQQ (str) {
  const reg = /[1-9][0-9]{4,}/
  return reg.test(str)
}

// 校验中国邮政编码
export function validatePostCode (str) {
  const reg = /[1-9]\d{5}(?!\d)/
  return reg.test(str)
}

// 校验 18 位身份证号
export function validateIDNumber (str) {
  const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
  return reg.test(str)
}

// 校验正整数
export function validatePositiveInteger (value) {
  const reg = /^[1-9]\d*$/
  return reg.test(value)
}

// 校验负整数
export function validateNegativeInteger (value) {
  const reg = /^-[1-9]\d*$/
  return reg.test(value)
}

// 校验整数
export function validateInteger (value) {
  const reg = /^-?[1-9]\d*$/
  return reg.test(value)
}

// 校验非负整数 (正整数和0)
export function validateNonNegativeInteger (value) {
  const reg = /^[1-9]\d*|0$/
  return reg.test(value)
}

// 校验非正整数 （负整数和0）
export function validateNonPositiveInteger (value) {
  const reg = /^-[1-9]\d*|0$/
  return reg.test(value)
}

// 校验正浮点数
export function validatePositiveFloatNumber (value) {
  const reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/
  return reg.test(value)
}

// 校验负浮点数
export function validateNegativeFloatNumber (value) {
  const reg = /^-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*$/
  return reg.test(value)
}
