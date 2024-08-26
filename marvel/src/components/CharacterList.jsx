import { useState, useEffect } from 'react';
import axios from 'axios';


const CharacterList = ({onCharacterSelect}) => {
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=0341cd0c30b09ddc69922058cf2819ef&hash=c2c4592f3b2eb488b52ea8b5e7d70c59');
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching heroes:', error);
            }
        };

        fetchHeroes();

    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
            {characters.map(character => (
                <div key={character.id} onClick={() => onCharacterSelect(character.id)} style={{ cursor: 'pointer' }}>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} style={{ width: '100%' }} />
                    <h3>{character.name}</h3>
                </div>
            ))}
        </div>
    );
};



export default CharacterList;

