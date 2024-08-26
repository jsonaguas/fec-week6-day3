import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=0341cd0c30b09ddc69922058cf2819ef&hash=c2c4592f3b2eb488b52ea8b5e7d70c59`);
        setCharacter(response.data.data.results[0]);
      } catch (error) {
        console.error('Error fetching heroes:', error);
      }
    };

    fetchDetails();
  }, [characterId]);

  return (
    <div>
    <h3>Character Details</h3>
    <ul>
        {character && (
            <>
            <li>
                <h3>{character.name}</h3>
                <img src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`} alt={character.name} />
            </li>
            <li>
                <h4>Description</h4>
                <p>{character.description}</p>
            </li>
            <li>
                <h4>Comics</h4>
                <ul>
                    {character.comics.items.map(comic => (
                        <li key={comic.name}>{comic.name}</li>
                    ))}
                </ul>
            </li>
            </>
        )}
    </ul>
</div>
);
}


export default CharacterDetail;