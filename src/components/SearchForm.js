import React from "react";
import { Button } from "reactstrap";

const SearchForm = props => {

  

 
  return (
    <section className="search-form">
      <form onSubmit={props.handleSubmit}>
            {/* <label htmlFor="search">Search</label> */}
            <input
                id="search"
                name="search"
                type="text"
                value={props.searchCharacter}
                onChange={props.handleChange}
                placeholder="search"
            />
            <Button type="submit">submit</Button>
            <Button onClick={() => props.resetCharacterList()}>Reset</Button>
      </form>
      
    </section>
  );
}


export default SearchForm;