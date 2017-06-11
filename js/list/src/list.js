class List {
  constructor() {
    this.dataStore = [];
    this.pos = 0;
  }

  clear() {
    this.dataStore = [];
    this.pos = 0;
  }

  toString() {
    return this.dataStore;
  }

  length() {
    return this.dataStore.length;
  }

  getElement() {
    return this.dataStore[this.pos]
  }

  front(){
    this.pos = 0;
  }

  end(){
    this.pos = this.length() -1;
  }

  next(){
    if(this.pos < this.length() - 1){
      ++this.pos;
    }
  }

  prev(){
    if (this.pos > 0){
      --this.pos
    }
  }

  current(){
    return this.pos
  }

  moveTo(pos){
    this.pos = pos
  }

  insert(element, after) {
    const insertPostion = this._find(after);
    if (insertPostion > -1) {
      this.dataStore.splice(insertPostion + 1, 0, element)
      return true;
    }

    return false;
  }

  append(element) {
    this.dataStore.push(element)
  }

  remove(element) {
    const removedPostion = this.dataStore.indexOf(element)

    if (removedPostion > -1) {
      this.dataStore.splice(removedPostion, 1);
      return true;
    }

    return false;
  }

  contains(element) {
    return this.dataStore.indexOf(element) > -1 ? true : false;
  }

  _find(element) {
    return this.dataStore.indexOf(element);
  }

}

module.exports = List;