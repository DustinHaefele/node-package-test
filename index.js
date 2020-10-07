const {SphericalUtil, PolyUtil} = require("node-geometry-library");



const printMyName = name => {
  let response = PolyUtil.isLocationOnPath(
    {lat: 25.771, lng: -80.19}, // point object {lat, lng}
    [
      // poligon arrays of object {lat, lng}
      {lat: 25.774, lng: -80.19},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757}
    ]
  );
  console.log(name, response)
}

module.exports = { printMyName }