/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {
  isEnabled: true,

  markers: [
    // Example 1: Simple marker
    // {
    //   x: -200,
    //   z: -200,
    //   image: "custom.pin.png",
    //   imageAnchor: [0.5, 1],
    //   imageScale: 0.5,
    // },

    // Example 2: Marker with text

    {
      x: 70,
      z: -56,
      image: "playerimages/spawn.png",
      imageAnchor: [0.5, 1],
      imageScale: 0.09,
      text: "",
      textColor: "red",
      offsetX: 0,
      offsetY: 5,
      textStrokeColor: "black",
      textStrokeWidth: 2,
      font: "bold 17px Calibri,sans serif",
      legend: true,
      legendLabel: "Spawn Point",
      desc: "World Spawn duh!", // Add this line
    },

    {
      x: 119,
      z: -195,
      image: "playerimages/skinIcon/val.png",
      imageAnchor: [0.5, 1],
      imageScale: 0.08,
      text: "",
      textColor: "white",
      offsetX: 0,
      offsetY: 5,
      textStrokeColor: "black",
      textStrokeWidth: 2,
      desc: "Val's Base",

      font: "bold 17px Calibri,sans serif",
    },

    {
      x: -233,
      z: -143,
      image: "playerimages/skinIcon/cookie.png",
      imageAnchor: [0.5, 1],
      imageScale: 0.08,
      textStrokeColor: "black",
      textStrokeWidth: 2,
      desc: "Cookie's base",
      font: "bold 17px Calibri,sans serif",
    },
    {
      x: -275,
      z: -310,
      image: "playerimages/skinIcon/prex.png",
      imageAnchor: [0.5, 1],
      imageScale: 0.08,
      textStrokeColor: "black",
      textStrokeWidth: 2,
      desc: "PistolRex's base",
      font: "bold 17px Calibri,sans serif",
    },

    {
      x: 57,
      z: 142,
      image: "playerimages/skinIcon/GLoki.png",
      imageAnchor: [0.5, 1],
      imageScale: 0.08,
      textStrokeColor: "black",
      textStrokeWidth: 2,
      desc: "GatorLoki's base",
      font: "bold 17px Calibri,sans serif",
    },
    {
      x: 77,
      z: -435,
      image: "playerimages/skinIcon/Vislanda",
      imageAnchor: [0.5, 1],
      imageScale: 0.08,
      textStrokeColor: "black",
      textStrokeWidth: 2,
      desc: "Virginislanda's base",
      font: "bold 17px Calibri,sans serif",
    },
    {
      x: -55,
      z: -650,
      image: "playerimages/skinIcon/lavv.png",
      imageAnchor: [0.5, 1],
      imageScale: 0.08,
      textStrokeColor: "black",
      textStrokeWidth: 2,
      desc: "Lavender's base",
      font: "bold 17px Calibri,sans serif",
    },

    {
      x: 200,
      z: -4,
      image: "playerimages/skinIcon/corrupt.png",
      imageAnchor: [0.5, 1],
      imageScale: 0.08,
      textStrokeColor: "black",
      textStrokeWidth: 2,
      desc: "Corrupt's base",
      font: "bold 17px Calibri,sans serif",
    },
    {
      x: -38,
      z: -268,
      image: "playerimages/skinIcon/Awitzzer.png",
      imageAnchor: [0.5, 1],
      imageScale: 0.08,
      textStrokeColor: "black",
      textStrokeWidth: 2,
      desc: "Awitzzer's base",
      font: "bold 17px Calibri,sans serif",
    },

    // Example 3: Text only
    // {
    //   x: 200,
    //   z: 200,
    //   text: "Text only",
    //   textColor: "yellow",
    //   offsetX: 0,
    //   offsetY: 0,
    //   font: "bold 50px Calibri,sans serif",
    // },

    // add your markers here

    // do not delete the following two closing brackets
  ],
};
