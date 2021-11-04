import React from "react";
import ReactDOM from "react-dom";

/* const App = () => {

window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error) 
);

  return(
  <div>
      Hello world!
      </div>
  )
} */

// Ne peut pas fonctionner de manière efficace => Functionnal component can't get the position and render it in the same time. => Need to refactor it to get a class-based component (Voir fiches post it exo Geoloc.)

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = { latitude: 25 };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );
    return <div>{this.state.latitude}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
