function Airport() {
  this._planes = []
}

Airport.prototype.land = function(plane) {
  this._planes.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  this._planes.pop();
}
