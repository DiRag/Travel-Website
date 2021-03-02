import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Hot Spots!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='C:\Users\ragha\react-website\reactsite\public\img-9.jpg'
              text='Hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='C:\Users\ragha\react-website\reactsite\public\img-2.jpg'
              text='Explore Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='C:\Users\ragha\react-website\reactsite\public\img-3.jpg'
              text='Sail in the Atlantic Ocean'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src= 'C:\Users\ragha\react-website\reactsite\public\img-4.jpg'
              text='Football on top of the Himalayan Mountains'
              label='Explore'
              path='/products'
            />
            <CardItem
              src='C:\Users\ragha\react-website\reactsite\src\images\img-8.jpg'
              text='Visit Sahara with a Camel Tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;