import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';

const CardsList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pets'); // Updated URL
        console.log(response.data); // Log the response data
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      {cards.length > 0 ? (
        cards.map(card => <CardComponent key={card._id} card={card} />)
      ) : (
        <p>No cards available</p>
      )}
    </div>
  );
};

export default CardsList;
