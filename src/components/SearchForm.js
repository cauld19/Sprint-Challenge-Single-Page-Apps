import React from "react";
import { Button } from "reactstrap";

const SearchForm = props => {

  

 
  return (
    <section className="search-form">
      <form onSubmit={props.handleSubmit}>
            {/* <label htmlFor="search">Search</label> */}
            <input className="input-field"
                id="search"
                name="search"
                type="text"
                value={props.searchCharacter}
                onChange={props.handleChange}
                placeholder="search"
            />
            <Button className="search-button" type="submit">submit</Button>
            <Button className="search-button" onClick={() => props.resetCharacterList()}>Reset</Button>
      </form>
      
    </section>
  );
}


export default SearchForm;