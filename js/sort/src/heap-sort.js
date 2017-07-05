const heapSort = (items) => {
  let heapSize = items.length;
  buildHeap(items)

  while(heapSize > 0){
    heapSize--;
    swap(items, 0, heapSize);
    heapify(items, heapSize, 0)
  }

  return items;
}

const buildHeap = (items) =>{
  for(let i= Math.floor(items.length / 2); i >= 0; i--){
    heapify(items, items.length, i)
  }
}

const heapify = (items, heapSize, i) => {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if(left < heapSize && items[left] > items[largest]){
    largest = left
  }

// assign the largest to left and verify if bigger than right
  if(right < heapSize && items[right] > items[largest]){
    largest = right
  }
// find the larger one and swap it !


  if(largest !== i){
    swap(items, i, largest)
    heapify(items, heapSize, largest)
  }
}

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array
}

module.exports = {
  heapSort
}