import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../componets/card/Card';

export const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = (query = '') => {
    setLoading(true);
    const url = query
      ? `https://rickandmortyapi.com/api/character/?name=${query}`
      : 'https://rickandmortyapi.com/api/character';
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(() => {
        setData([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    fetchData(search.trim());
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Contenedor centrado con flexbox */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <input
          type="text"
          placeholder="Buscar personaje"
          value={search}
          onChange={handleSearchChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '300px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#4caf50',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Buscar
        </button>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {data.length > 0 ? (
            data.map((item, index) => <Card key={index} item={item} />)
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      )}
    </div>
  );
};
