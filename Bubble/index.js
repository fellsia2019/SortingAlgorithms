let arr = [232, 1, 56, 0, 23, 0, 12, 55, 125, 5, 1, 6, 2, 7, 233, 234, 232];

function bubble(arr) {
  const sortedByBubble = arr;
  for (let j = sortedByBubble.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (sortedByBubble[i] > sortedByBubble[i + 1]) {
        let temp = sortedByBubble[i];
        sortedByBubble[i] = sortedByBubble[i + 1];
        sortedByBubble[i + 1] = temp;
      }
    }
  }
  console.log("sortedByBubble", sortedByBubble);

  return sortedByBubble;
}
// bubble(arr);

function quick(arr) {
  let pivot = Math.floor(Math.random() * arr.length - 1);
  let less;
  let;
}
quick(arr);
