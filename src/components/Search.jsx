import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context';

const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm } = useContext(AppContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('calling me');
    if (text) {
      setSearchTerm(text);
      setText('');
    }
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type favorite meal"
          className="form-input"
          value={text}
          onChange={handleChange}
        ></input>
        <button type="submit" className="btn">
          Search
        </button>
        <button type="button" className="btn btn-hipster">
          surprise me!
        </button>
      </form>
    </header>
  );
};

export default Search;
