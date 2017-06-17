class NewSet {
  constructor() {
    this._items = {};
  }

  size() {
    return Object.keys(this._items).length;
  }

  has(value) {
    return this._items.hasOwnProperty(value);
  }

  add(value) {
    if (!this.has(value)) {
      this._items[value] = value;
      return true;
    }
    return false;
  }

  delete(value) {
    if (this.has(value)) {
      delete this._items[value]
      return true;
    }

    return false;
  }

  clear() {
    this._items = {};
  }

  values() {
    return Object.keys(this._items);
  }

  union(secondSet) {
    const unionedSet = new NewSet();
    const valuesInCurrent = this.values()
    const valuesInSec = secondSet.values()

    for (let value of valuesInCurrent) {
      unionedSet.add(value);
    }

    for (let value of valuesInSec) {
      unionedSet.add(value);
    }

    return unionedSet;
  }

  interSection(secondSet) {
    const interSectionSet = new NewSet();
    const valuesInCurrent = this.values();

    for (let value of valuesInCurrent) {
      if (secondSet.has(value)) {
        interSectionSet.add(value);
      }
    }

    return interSectionSet;
  }

  different(secondSet) {
    const differentSet = new NewSet();
    const valuesInCurrent = this.values()
    const valuesInSec = secondSet.values()

    for (let value of valuesInCurrent) {
      differentSet.add(value);
    }

    for (let value of valuesInSec) {
      if (differentSet.has(value)) {
        differentSet.delete(value)
      }
    }

    return differentSet;
  }

  include(secondSet) {
    let result = true;
    const valuesInSec = secondSet.values()

    for(let value of valuesInSec){
      if(!this.has(value)){
        result = false;
      }
    }

    return result;
  }
}

module.exports = NewSet;