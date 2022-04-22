/********************************************************/
/****************DUCK COMPONENT*************************/
/********************************************************/



class Duck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: new TimelineLite({           
        onComplete() {
          this.restart();
      } })
    };


  }

  componentDidMount() {
    this.state.timeline.fromTo('#duck-svg', 200, { x: 415, ease:Power2.easeInOut ,repeat:-1}, { x: -820 , repeat:-1});//415 Circ.easeOut 
    const rippleTime = new TimelineLite({ repeat: -1 });
    rippleTime.
    // from('.ripple-1', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '3').
    // from('.ripple-2', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    // from('.ripple-3', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    // from('.ripple-4', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    // from('.ripple-5', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    // from('.ripple-6', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    // from('.ripple-7', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1').
    from('.wake-1', 2, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '+=0').
    from('.wake-2', 2, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=2');
    from('.wake-3', 2, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '+=0').
    from('.wake-4', 2, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=2');
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("svg", { id: "duck-svg", viewBox: "0 0 1080 250" }, /*#__PURE__*/

      React.createElement("linearGradient", {
        id: "reflection-grad",
        x1: "63.9648",
        x2: "63.9648",
        y1: "180",
        y2: "0",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      

      React.createElement("stop", { offset: "0", stopOpacity: ".5" }), /*#__PURE__*/
      React.createElement("stop", { offset: ".06747389", stopOpacity: ".4663" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopOpacity: "0" })), /*#__PURE__*/

      React.createElement("path", {
        fill: "url(#reflection-grad)",
        transform: "scale(1 -1) translate(0,-256)",
        d: "M122.435 94.609H68.174v-11.13h45.913c2.001 0 3.72 -1.42 4.098 -3.385c0.378 -1.965 -0.691 -3.921 -2.549 -4.665l-2.218 -0.887C91.582 65.807 75.382 47.521 69.271 25.044h11.425c6.904 0 12.522 -5.617 12.522 -12.522V4.174C93.218 1.869 91.349 0 89.043 0H64c-0.408 0 -0.866 0.067 -1.297 0.208c-0.007 0.003 -0.015 0.004 -0.023 0.006C31.015 10.77 9.739 40.288 9.739 73.666v5.639c0 2.305 1.869 4.174 4.174 4.174h45.913v11.13H5.565c-2.305 0 -4.174 1.869 -4.174 4.174c0 16.11 13.107 29.218 29.218 29.218h66.782c16.11 0 29.218 -13.107 29.218 -29.218C126.609 96.478 124.74 94.609 122.435 94.609zM68.174 8.348h16.696v4.174c0 2.301 -1.873 4.174 -4.174 4.174h-12.522V8.348zM68.174 44.644c6.736 12.537 16.46 22.934 28.239 30.487H68.174V44.644zM18.087 75.13v-1.464c0 -27.806 16.547 -52.608 41.739 -63.44c0 2.667 0 61.934 0 64.905H18.087zM97.391 119.652h-66.782c-10.078 0 -18.511 -7.182 -20.45 -16.696h107.683C115.902 112.471 107.47 119.652 97.391 119.652z" }), /*#__PURE__*/


      React.createElement("g", { className: "ripple-wake-collection", fill: "none", stroke: "#333", strokeMiterlimit: "10", transform: "translate(0,85)"}, /*#__PURE__*/

       
      React.createElement("linearGradient", {
        id: "reflection-grad",
        x1: "0",
        x2: "100",
        y1: "0",
        y2: "0",
        gradientUnits: "userSpaceOnUse" }), /*#__PURE__*/

      // React.createElement("ellipse", { className: "ripple ripple-1", cx: "80.5", cy: "41", stroke: "#000", strokeWidth: "2.8528", rx: "61.2", ry: "4" }), /*#__PURE__*/
      // React.createElement("ellipse", {
      //   className: "ripple ripple-2",
      //   cx: "90.9",
      //   cy: "41",
      //   stroke: "#1A1A1A",
      //   strokeWidth: "2.4053",
      //   rx: "68.3",
      //   ry: "5.7" }), /*#__PURE__*/

      // React.createElement("ellipse", { className: "ripple ripple-3", cx: "106.7", cy: "41", stroke: "#333", strokeWidth: "1.483", rx: "84", ry: "8" }), /*#__PURE__*/
      // React.createElement("ellipse", {
      //   className: "ripple ripple-4",
      //   cx: "121.8",
      //   cy: "41",
      //   stroke: "var(--darkMist)",
      //   strokeWidth: "1.8106",
      //   rx: "98.9",
      //   ry: "10.1" }), /*#__PURE__*/

      // React.createElement("ellipse", {
      //   className: "ripple ripple-5",
      //   cx: "147.9",
      //   cy: "41",
      //   stroke: "#666",
      //   strokeWidth: "1.0665",
      //   rx: "124.7",
      //   ry: "10" }), /*#__PURE__*/

      // React.createElement("ellipse", {
      //   className: "ripple ripple-6",
      //   cx: "186.4",
      //   cy: "41",
      //   stroke: "gray",
      //   strokeWidth: "1.3175",
      //   rx: "163",
      //   ry: "11.7" }), /*#__PURE__*/

      // React.createElement("ellipse", {
      //   className: "ripple ripple-7",
      //   cx: "325.3",
      //   cy: "41",
      //   stroke: "#999",
      //   strokeWidth: "1.7514",
      //   rx: "301.3",
      //   ry: "11.2" }), /*#__PURE__*/


      React.createElement("path", {
        className: "wake wake-1",
        fill: "url(#reflection-grad)",
        stroke: "gray",
        strokeMiterlimit: "10",
        strokeWidth: ".7595",
        d: "M40.2 33.2C145.3 22.3 217.8 9.6 426.4 7.3 548.9 5.9 745.6 11 804.1 1.1" }), /*#__PURE__*/

      React.createElement("path", {
        className: "wake wake-2",
        fill: "url(#reflection-grad)",
        stroke: "gray",
        strokeMiterlimit: "10",
        strokeWidth: ".5918",
        d: "M41.8 46.8c103.8 10.5 175 24.5 380.4 31.5 120.6 4.1 327-2.7 384.8 6" }), /*#__PURE__*/

      React.createElement("path", {
        className: "wake wake-3",
        fill: "none",
        stroke: "#333",
        strokeMiterlimit: "15",
        strokeWidth: ".455",
        d: "M40.2 33.2C145.3 22.3 217.8 9.6 426.4 7.3 548.9 5.9 745.6 11 804.1 1.1" }), /*#__PURE__*/

      React.createElement("path", {
        className: "wake wake-4",
        fill: "none",
        stroke: "#333",
        strokeMiterlimit: "15",
        strokeWidth: ".1918",
        d: "M41.8 46.8c103.8 10.5 175 24.5 380.4 31.5 120.6 4.1 327-2.7 384.8 6" })), /*#__PURE__*/


      React.createElement("path", {
        id: "duck-surfaced",
        fill: "#0e0c0b",
        d: "M122.435 94.609H68.174v-11.13h45.913c2.001 0 3.72 -1.42 4.098 -3.385c0.378 -1.965 -0.691 -3.921 -2.549 -4.665l-2.218 -0.887C91.582 65.807 75.382 47.521 69.271 25.044h11.425c6.904 0 12.522 -5.617 12.522 -12.522V4.174C93.218 1.869 91.349 0 89.043 0H64c-0.408 0 -0.866 0.067 -1.297 0.208c-0.007 0.003 -0.015 0.004 -0.023 0.006C31.015 10.77 9.739 40.288 9.739 73.666v5.639c0 2.305 1.869 4.174 4.174 4.174h45.913v11.13H5.565c-2.305 0 -4.174 1.869 -4.174 4.174c0 16.11 13.107 29.218 29.218 29.218h66.782c16.11 0 29.218 -13.107 29.218 -29.218C126.609 96.478 124.74 94.609 122.435 94.609zM68.174 8.348h16.696v4.174c0 2.301 -1.873 4.174 -4.174 4.174h-12.522V8.348zM68.174 44.644c6.736 12.537 16.46 22.934 28.239 30.487H68.174V44.644zM18.087 75.13v-1.464c0 -27.806 16.547 -52.608 41.739 -63.44c0 2.667 0 61.934 0 64.905H18.087zM97.391 119.652h-66.782c-10.078 0 -18.511 -7.182 -20.45 -16.696h107.683C115.902 112.471 107.47 119.652 97.391 119.652z" }), /*#__PURE__*/


      React.createElement("ellipse", {
        cx: "28.5",
        cy: "15.2",
        fill: "none",
        stroke: "#BBBBBC",
        strokeMiterlimit: "10",
        strokeWidth: "1.0266",
        rx: ".5",
        ry: ".5" }), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "duck-eye",
        cx: "28.5",
        cy: "15.2",
        fill: "none",
        stroke: "#BBBBBC",
        strokeMiterlimit: "10",
        strokeWidth: "1.0266",
        rx: ".5",
        ry: ".5" })));



  }}



/********************************************************/
/****************POND CONTAINER*************************/
/********************************************************/

class Pond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swellTime: new TimelineLite({
        onComplete() {
          this.restart();
        } }),

      waveTime: new TimelineLite({
        onComplete() {
          this.restart();
        } }) };


  }
  componentDidMount() {
    this.state.waveTime.
    fromTo(
    "#wave-1",
    3,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "+=1").

    fromTo(
    "#wave-2",
    3,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "+=1").

    fromTo(
    "#wave-3",
    3,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "2").

    fromTo(
    "#wave-4",
    4,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "3").

    fromTo(
    "#wave-5",
    5.5,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "3").

    fromTo(
    "#wave-6",
    4,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "4").

    fromTo(
    "#wave-7",
    5,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "5").

    fromTo(
    "#wave-8",
    4,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "6").

    fromTo(
    "#wave-9",
    4,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "7").

    fromTo(
    "#wave-10",
    3,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "8").

    fromTo(
    "#wave-11",
    5,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
    "8");


    this.state.swellTime.
    fromTo(
    "#swell-stop1",
    6,
    {
      css: {
        stopOpacity: 0 } },


    {
      css: {
        stopOpacity: 1 },

      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true },

    "0").

    fromTo(
    "#swell-stop2",
    6,
    {
      css: {
        stopOpacity: 0 } },


    {
      css: {
        stopOpacity: 1 },

      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true },

    "-=3.5").

    fromTo(
    "#swell-stop3",
    6,
    {
      css: {
        stopOpacity: 0 } },


    {
      css: {
        stopOpacity: 1 },

      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true },

    "-=3.5").

    fromTo(
    "#swell-stop4",
    6,
    {
      css: {
        stopOpacity: 0 } },


    {
      css: {
        stopOpacity: 1 },

      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true },

    "-=3.5");

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("svg", { id: "pond-svg", viewBox: "0 0 1920 1080", preserveAspectRatio: "none" }, /*#__PURE__*/
      React.createElement("linearGradient", {
        id: "pond-base-grad",
        x1: "959",
        x2: "959",
        y1: "1081",
        y2: "881",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", {
        id: "pond-stop1",
        offset: ".2",
        stopColor: "var(--darkMist)",
        stopOpacity: "1" }), /*#__PURE__*/

      React.createElement("stop", {
        id: "pond-stop2",
        offset: "1",
        stopColor: "var(--darkMist)",
        stopOpacity: ".3" })), /*#__PURE__*/


      React.createElement("path", {
        id: "pond-base",
        fill: "url(#pond-base-grad)",
        d: "M-1 881h1920v200H-1z",
        opacity: "1" }), /*#__PURE__*/

      React.createElement("linearGradient", {
        id: "swells-grad",
        x1: "961.0376",
        x2: "956.9628",
        y1: "1096.7217",
        y2: "863.2787",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { id: "swell-stop4", offset: ".25", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { id: "swell-stop3", offset: ".33", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { id: "swell-stop2", offset: ".66", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { id: "swell-stop1", offset: "1", stopColor: "var(--darkMist)" })), /*#__PURE__*/

      React.createElement("path", {
        id: "swells",
        fill: "url(#swells-grad)",
        d: "M-1 880h1920v200H-1z",
        opacity: ".5" }), /*#__PURE__*/

      React.createElement("g", { className: "waves-container", opacity: ".5" }, /*#__PURE__*/
      React.createElement("radialGradient", {
        id: "wave1-grad",
        cx: "391.1543",
        cy: "74.3203",
        r: "94",
        gradientTransform: "matrix(3.883 0 0 .4362 -1349.8418 1026.5841)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-1",
        cx: "169",
        cy: "1059",
        fill: "url(#wave1-grad)",
        rx: "365",
        ry: "41" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave2-grad",
        cx: "660.5352",
        cy: "-103.0996",
        r: "94",
        gradientTransform: "matrix(3.883 0 0 .3457 -1349.8418 1023.1462)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-2",
        cx: "1215",
        cy: "987.5",
        fill: "url(#wave2-grad)",
        rx: "365",
        ry: "32.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave3-grad",
        cx: "1123.3218",
        cy: "-333.5391",
        r: "94",
        gradientTransform: "matrix(2.9007 0 0 .2872 -1446.0977 1073.8035)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-3",
        cx: "1812.3",
        cy: "978",
        fill: "url(#wave3-grad)",
        rx: "272.7",
        ry: "27" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave4-grad",
        cx: "800.6421",
        cy: "-437.9844",
        r: "94",
        gradientTransform: "matrix(2.9007 0 0 .2234 -1446.0977 1039.8474)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-4",
        cx: "876.3",
        cy: "942",
        fill: "url(#wave4-grad)",
        rx: "272.7",
        ry: "21" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave5-grad",
        cx: "1288.3618",
        cy: "-819.4141",
        r: "94",
        gradientTransform: "matrix(3.7465 0 0 .1543 -3158.6169 1036.8989)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-5",
        cx: "1668.2",
        cy: "910.5",
        fill: "url(#wave5-grad)",
        rx: "352.2",
        ry: "14.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave6-grad",
        cx: "1237.9141",
        cy: "-949.0703",
        r: "94",
        gradientTransform: "matrix(3.7465 0 0 .1543 -3158.6169 1036.8989)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-6",
        cx: "1479.2",
        cy: "890.5",
        fill: "url(#wave6-grad)",
        rx: "352.2",
        ry: "14.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave7-grad",
        cx: "410.1729",
        cy: "-99.8262",
        r: "94",
        gradientTransform: "matrix(3.4379 0 0 .3191 -1021.3169 1054.8591)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-7",
        cx: "388.8",
        cy: "1023",
        fill: "url(#wave7-grad)",
        rx: "323.2",
        ry: "30" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave8-grad",
        cx: "803.7827",
        cy: "-120.2598",
        r: "94",
        gradientTransform: "matrix(4.1064 0 0 .266 -2354.6394 1068.9844)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-8",
        cx: "946",
        cy: "1037",
        fill: "url(#wave8-grad)",
        rx: "386",
        ry: "25" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave9-grad",
        cx: "356.0615",
        cy: "-471.7422",
        r: "94",
        gradientTransform: "matrix(4.0106 0 0 .1968 -1261.0344 1036.3424)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-9",
        cx: "167",
        cy: "943.5",
        fill: "url(#wave9-grad)",
        rx: "377",
        ry: "18.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave10-grad",
        cx: "1234.4678",
        cy: "-79.3936",
        r: "94",
        gradientTransform: "matrix(3.3936 0 0 .3457 -2588.3118 1071.95)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-10",
        cx: "1601",
        cy: "1044.5",
        fill: "url(#wave10-grad)",
        rx: "319",
        ry: "32.5" }), /*#__PURE__*/

      React.createElement("radialGradient", {
        id: "wave11-grad",
        cx: "1025.2515",
        cy: "-726.1875",
        r: "94",
        gradientTransform: "matrix(6.5851 0 0 .1436 -6160.3887 1001.7933)",
        gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      React.createElement("stop", { offset: ".5", stopColor: "var(--darkMist)" }), /*#__PURE__*/
      React.createElement("stop", { offset: "1", stopColor: "var(--darkMist)", stopOpacity: ".5" })), /*#__PURE__*/

      React.createElement("ellipse", {
        id: "wave-11",
        cx: "591",
        cy: "897.5",
        fill: "url(#wave11-grad)",
        rx: "619",
        ry: "13.5" }))));




  }}


/********************************************************/
/****************SCENE COMPONENT*************************/
/********************************************************/

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "scene-container" }, /*#__PURE__*/
      React.createElement("svg", {
        id: "scene-bg-svg",
        viewBox: "0 0 1920 1080",
        preserveAspectRatio: "none" }, /*#__PURE__*/

      // React.createElement("linearGradient", {
      //   id: "canvas-grad",
      //   x2: "1920",
      //   y1: "540",
      //   y2: "540",
      //   gradientUnits: "userSpaceOnUse" }, /*#__PURE__*/

      //React.createElement("stop", { offset: "0", stopColor: "var(--lightMist)" }), /*#__PURE__*/
      //React.createElement("stop", { offset: "1", stopColor: "var(--bgGradRight)" })), /*#__PURE__*/

      React.createElement("path", {
        className: "bg-canvas",
        fill: "url(#canvas-grad)",
        d: "M0 0h1920v1080H0z" })), /*#__PURE__*/


      React.createElement(Pond, null), /*#__PURE__*/
      React.createElement(Duck, null)));


  }}

/*


*/

ReactDOM.render( /*#__PURE__*/React.createElement(Scene, null), document.getElementById("app"));