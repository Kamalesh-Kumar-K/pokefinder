import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const Pokedata = () => {
  const [poke, setPoke] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPoke, setFilteredPoke] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching data
      let url = "https://pokeapi.co/api/v2/pokemon/?limit=1302";
      const response = await fetch(url);
      const data = await response.json();

      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPoke(detailedData);
      setLoading(false); // Set loading to false when data is fetched
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = poke.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPoke(filteredData);
  }, [poke, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
    }
  };
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const lastPostIndex = currentPage*postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredPoke.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container">
      <div
        className="fixed-top"
        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
      >
        <div className="input-group" style={{ width:'40%'}}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            onKeyPress={handleEnter}
            className="form-control"
            placeholder="Search Pokémon"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Enter
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center" style={{ marginTop: "50px" }}>
      
        {loading ? ( // Show a loading message while data is being fetched
          <div className="text-center fs-1 text-primary">
            <p> loading...</p>
          </div>
        ) : currentPosts.length > 0 ? (
          currentPosts.map((pokemon, index) => (
            <Card
              id={pokemon.id}
              name={pokemon.name}
              exp={pokemon.base_experience}
              height={pokemon.height}
              weight={pokemon.weight}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
              
              
        
          ))
        ) : (
          <div className="text-center fs-1 text-danger">
            <p>No Pokémon found</p>
          </div>
        )}
        {currentPosts.length > 0 && (
          <Pagination totalPosts={filteredPoke.length} postsPerPage={postsPerPage} onChangePage={handlePageChange} />
        )}
      </div>
    </div>
  );
};

export default Pokedata;
