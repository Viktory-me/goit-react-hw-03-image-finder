import { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Searchbar extends Component {
  state = {
    imageName: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleNameChange = (e) => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.imageName.trim() === "") {
      toast.dark("🦄Please enter search query", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    this.props.onSubmit(this.state.imageName);

    this.setState({ imageName: "" });
  };

  render() {
    return (
      <header className='Searchbar'>
        <form className='SearchForm' onSubmit={this.handleSubmit}>
          <button type='submit' className='SearchForm-button'></button>
          <input
            value={this.state.imageName}
            onChange={this.handleNameChange}
            className='SearchForm-input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
        </form>
      </header>
    );
  }
}
