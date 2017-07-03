// i decide run how many times, j decide to compare and swap
const bubbleSort = (items) => {
  const sortedItems = items;
  for(let i = 0; i< sortedItems.length; i++){
    for(let j = 0; j < sortedItems.length -1; j++){
      if(sortedItems[j] > sortedItems[j+1]){
        swap(j, j+1, sortedItems);
      }
    }
  }

  return sortedItems;
}

const improvedBubbleSort = (items) => {
  const sortedItems = items;
  for(let i = 0; i< sortedItems.length; i++){
    for(let j = 0; j < sortedItems.length -1-i; j++){
      if(sortedItems[j] > sortedItems[j+1]){
        swap(j, j+1, sortedItems);
      }
    }
  }

  return sortedItems;
}

const swap = (i, j, array) =>{
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array
}

module.exports = {
  bubbleSort,
  improvedBubbleSort
}