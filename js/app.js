"use strict";

let wdinstagramData = [
  { photo_url: "http://www.visittheusa.com/~/media/7b11eeb486b9474ca0b0970c0040ec55/01%20capitol%20credit%20michael%20kleinberg%20cropped%201046x380.jpg?w=1046&h=380&bg=ffffff", author: "Billy", body: "#DC"},
  { photo_url: "https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg", author: "Bob", body: "#NYC"},
  { photo_url: "http://assets.lapdonline.org/assets/jpg/los-angeles-by-josh-harris-large.jpg", author: "Jon", body: "#LA"},
  { photo_url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Mouth_of_Miami_River_20100211.jpg", author: "Sally", body: "#MIAMI"},
  { photo_url: "https://upload.wikimedia.org/wikipedia/commons/1/17/Boston_Back_Bay_reflection.jpg", author: "Chelsea", body: "#BOSTON"}
]

angular
  .module("wdinstagramApp", [])
  .controller("wdinstagramCtrl", [ wdinstagramController])

function wdinstagramController () {
  this.wdinstagram = wdinstagramData
}
