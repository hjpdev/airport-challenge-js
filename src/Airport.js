function Airport() {
  this._planes = []
}


Airport.prototype.land = function(plane) {
  this._planes = [plane];
}
