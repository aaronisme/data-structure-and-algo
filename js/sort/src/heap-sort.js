const heapSort = (items) => {
  const result = [];
  const itemsLength = items.length
  if(items.length <=1){
    return items;
  }

  for(let i = 0; i < itemsLength; i++){
    heap(items);
    [items[0], items[items.length - 1]] = [items[items.length -1], items[0]];
    result.push(items.pop());
  }

  return result.reverse();
}

const heap = (items) => {
  const level = Math.floor(items.length / 2);
  for (let parent = level - 1; parent >=0 ; parent--) {
    let parentNode = items[parent];
    let leftNode = items[parent * 2 + 1];
    let rightNode = items[parent * 2 + 2];

    if (parentNode < leftNode) {
      swap(items, parent, parent * 2 + 1)
      parentNode = items[parent];
      leftNode = items[parent * 2 + 1];
      rightNode = items[parent * 2 + 2];
    }

    if (parentNode < rightNode) {
      swap(items, parent, parent * 2 + 2)
      parentNode = items[parent];
      leftNode = items[parent * 2 + 1];
      rightNode = items[parent * 2 + 2];
    }
  }
  return items;
}

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array
}

module.exports = {
  heap,
  heapSort
}