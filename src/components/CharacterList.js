import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Container, Row } from "reactstrap";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [characterList, setCharacterList] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState('')
  
  const handleSubmit = event =>{
    event.preventDefault()
    const filterCharacters = characterList.filter(character => character.name.toLowerCase().includes(searchCharacter.toLowerCase()))
    if (filterCharacters.length === 0) {
      alert("No search results available")
      resetInputField();
    } else {
      setCharacters(filterCharacters)
      resetInputField();
    }
  }

  const handleChange = event => {
    setSearchCharacter(event.target.value)
  }

  const resetInputField = () => {
    setSearchCharacter("")
  }

  const resetCharacterList = () => {
    setCharacters(characterList)
  }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    useEffect(() => {
      const getCharacters = () => {
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(response => {
            setCharacters(response.data.results);
            setCharacterList(response.data.results);

            console.log(response.data.results);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getCharacters();
    }, [setSearchCharacter]);


  return (
    <Container>
      <SearchForm 
        resetInputField={resetInputField}
        characters={characters} 
        searchCharacter={searchCharacter} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        resetCharacterList={resetCharacterList} />
      <Row>
        {characters.map(character => {
          return (
            <CharacterCard 
              key={character.id} 
              name={character.name}
              gender={character.gender}
              image={character.image}
              species={character.species}
              id={character.id}
            />
          );
        })}
      </Row>
    </Container>
  );
}
