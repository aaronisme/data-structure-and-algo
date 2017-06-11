const List = require('./list')

class MoveList extends List {
  constructor(moves){
    super();
  }

  loadMovie(movies){
    movies.forEach((movie) => {
      this.append(movie)
    })
  }

  displayMoive(){
    this.front();
    for(const movie = this.getElement(); this.current()  < this.length(); this.next()){
      if(this.current() == this.length() -1){
        return
      }

    }
  }
}

module.exports = MoveList;
