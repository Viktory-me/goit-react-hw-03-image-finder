import { Component } from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Searchbar from "./Components/SearchBar/Searchbar";
import ImagesInfo from "./Components/ImagesInfo/ImagesInfo";

export default class App extends Component {
  state = {
    imageName: "",
  };
  componentDidMount() {}

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImagesInfo imageName={this.state.imageName} />

        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
