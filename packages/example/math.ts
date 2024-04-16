/**
 * 库封装测试函数
 * @param {number} a 变量A
 * @param {number} b 变量B
 * @returns {number} 两个变量之和
 */
export const testSum = (a: number, b: number): number => {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    console.log('invalid input')
    return 0
  } else {
    console.log(a, b, a + b)
    return a + b
  }
}
