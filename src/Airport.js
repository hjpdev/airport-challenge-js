function Airport() {
  this._planes = []
}

Airport.prototype.land = function(plane) {
  this._planes.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  this._planes.pop();
}

Airport.prototype.weatherReport = function() {
  arr = ['sunny', 'stormy'];
  return arr[Math.floor(Math.random() * arr.length)];
}
