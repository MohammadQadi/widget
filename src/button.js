("use strict");
console.log(options);
const e = React.createElement;

const Counter = () => {
  const [count, setCount] = React.useState(options.x);
  const [open, setOpen] = React.useState(false);

  const styles = {
    buttonContainer: {
      position: "fixed",
      left: "25px",
      bottom: "25px",
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
      zIndex: "999",
    },
  };
  return (
    <div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={() => setOpen((prev) => !prev)}>Click me</button>
      </div>
      <div style={styles.floatingMenu}>HELLO!@O#@!</div>
    </div>
  );
};

const domContainer = document.querySelector("body");
ReactDOM.render(e(Counter), domContainer);
