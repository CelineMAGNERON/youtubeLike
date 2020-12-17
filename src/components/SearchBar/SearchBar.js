import React, {useState} from 'react';
import './SearchBar.css';


// utilisation du hook useState
export const SearchBar = ( {onSubmit} ) => {
  const [term, setTerm] = useState('');  

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

    return (
      <>
        <form onSubmit={onFormSubmit}>
          <div className='searchBar field'>
            <input
              className='input is-info'
              type='text'
              placeholder='Taper votre recherche'
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
        </form>
      </>
    );
}
