const shuffle = (array) => {

  for(let i = array.length - 1; i > 0; i--){
    let randomNumber = Math.floor(Math.random() * (i + 1));
    let storedItem = array[i];
    array[i] = array[randomNumber];
    arr[randomNumber] = storedItem
  }
  return array
}
const arr = [1, 2, 3, 4];

console.log(shuffle(arr))
console.log(shuffle(arr))