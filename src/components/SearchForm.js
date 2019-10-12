import React from "react";

const SearchForm = props => {

  

 
  return (
    <section className="search-form">
      <form onSubmit={props.handleSubmit}>
            <label htmlFor="search">Search</label>
            <input
                id="search"
                name="search"
                type="text"
                value={props.searchCharacter}
                onChange={props.handleChange}
            />
            <button type="submit">submit</button>
      </form>
    </section>
  );
}


export default SearchForm;