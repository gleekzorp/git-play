export function shiftPopArray(array) {
  let arrPop = array.pop();
  let arrShift = array.shift();
  return `${arrPop} ${arrShift}`;
}
