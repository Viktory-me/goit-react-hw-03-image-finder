import Loader from "react-loader-spinner";
import { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div>
        <Loader
          type='Puff'
          color='darkgrey'
          height={50}
          width={50}
          timeout={5000} //3 secs
        />
      </div>
    );
  }
}
