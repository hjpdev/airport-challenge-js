'use strict'

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should be able to land a plane", function() {
    airport.land(plane);
    expect(airport._planes).toEqual([plane]);
  });
  it("should be able to land two planes", function() {
    airport.land(plane);
    airport.land(plane);
    expect(airport._planes).toEqual([plane, plane]);
  });
  it("should be able to take off a plane", function() {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport._planes).toEqual([]);
  });

});
