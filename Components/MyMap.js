// Imports
import React, { Component } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { icon } from 'leaflet';
var html;


// Data
var googlezoo = require("../Static/googlezoo.json");
var googlezooJSON = JSON.parse(JSON.stringify(googlezoo))
var icons = [];
var popupText = [];
var _iconURL = "";
console.log(googlezooJSON[0]["Zoo"]);
for (var i = 0; i < 237; i++) {
    var zooIconDetails = [];
    popupText.push(googlezooJSON[i]["Zoo"]);
    zooIconDetails.push(parseFloat(googlezooJSON[i]["Latitude"]));
    zooIconDetails.push(parseFloat(googlezooJSON[i]["Longitude"]));
    var randomIcon = Math.floor(Math.random() * (6))
    switch(randomIcon) { // min = 0, max = 5
      case 0:
        _iconURL = require("../Static/giraffe.png");      
        break;
      case 1:
        _iconURL = require("../Static/antelope.png");
        break;
      case 2:
        _iconURL = require("../Static/lion.png");
        break;
      case 3:
        _iconURL = require("../Static/rhino.png");
        break;
      case 4:
        _iconURL = require("../Static/elephant.png");
        break;
      case 5:
        _iconURL = require("../Static/zebra.png");
        break;
    }
    zooIconDetails.push(_iconURL);
    icons.push(zooIconDetails);
}


// Functions
function getIcon(_iconSize, _iconURL) {
    return L.icon({
        iconUrl: _iconURL,
        iconSize: [_iconSize, _iconSize]
    })
}


function MyMap() {
  return (
    <MapContainer
      className="map"
      center={ [41.7489, -87.9] }
      zoom = { 10 }
      style={{ height: 725, width: "100%"}}
    >
      <TileLayer
        attribution = '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    {icons.map(function(key, index) {
        return (
        <Marker position = {[key[0], key[1]]} icon = {getIcon(35, key[2])}>
             <Popup>{popupText[index]}</Popup>
        </Marker> 
        )
    })
    };
    </MapContainer>
  );
}

export default MyMap;