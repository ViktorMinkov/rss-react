import React from 'react';
import './SearchBar.scss';

type SearchBarProps = Record<string, never>;
type SearchBarState = {
  searchString: string;
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchString: '',
    };
  }
  componentWillUnmount() {
    localStorage.setItem('searchString', this.state.searchString);
  }
  componentDidMount(): void {
    const newValue = localStorage.getItem('searchString');
    if (newValue) {
      this.setState({ searchString: newValue });
    }
  }

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    this.setState({ searchString: target.value });
  };

  handleFormSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="search" onClick={(event) => this.handleFormSumbit(event)}>
        <div className="search__block">
          <input
            className="search__input"
            type="text"
            placeholder="Search..."
            value={this.state.searchString}
            onChange={(event) => this.handleOnChange(event)}
          />
          <div className="search__icon"></div>
        </div>
        <button className="search__btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
