var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

"use strict";
console.log(options);
var e = React.createElement;

var Counter = function Counter() {
  var _React$useState = React.useState(options.x),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var styles = {
    buttonContainer: {
      position: "fixed",
      left: "25px",
      bottom: "25px"
    },
    floatingMenu: {
      display: open ? "flex" : "none",
      width: "200px",
      height: "200px",
      position: "fixed",
      left: "25px",
      bottom: "50px",
      background: "grey",
      borderRadius: "4px",
      padding: "16px",
      zIndex: "999"
    }
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "You clicked ",
        count,
        " times"
      ),
      React.createElement(
        "button",
        { onClick: function onClick() {
            return setCount(count + 1);
          } },
        "Click me"
      )
    ),
    React.createElement(
      "div",
      { style: styles.buttonContainer },
      React.createElement(
        "button",
        { onClick: function onClick() {
            return setOpen(function (prev) {
              return !prev;
            });
          } },
        "Click me"
      )
    ),
    React.createElement(
      "div",
      { style: styles.floatingMenu },
      "HELLO!@O#@!"
    )
  );
};

var domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(Counter), domContainer);