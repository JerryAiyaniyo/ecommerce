import {useState} from 'react';
import Grid from './Grid';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleChange}
        value={search}
      />

      <Grid query={search}/>
    </div>
  );
};

export default Search;