import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div
        style={{ background: "radial-gradient(red,yellow,green  )" }}
        className="serach-bar ui segment"
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Meheret Tube</label>
            <label>ኢትዮጵያ ለዘላለም ትሳቅ</label>
            <input
              type="text"
              spellCheck="false"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
