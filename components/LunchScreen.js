import React from 'react';

import {SafeAreaView, FlatList} from 'react-native';
import styles from './Styles/LunchScreenStyles';
import StatusBar from './UiKit/StatusBar';
import PromoFoodItem from './~common/PromoFoodItem';
import bowl_of_soup from './~assets/bowl_of_soup.jpg';
import steak from './~assets/steak.jpg';
import pizza from './~assets/pizza.jpg';
import soup1 from './~assets/soup1.jpg';
import soup2 from './~assets/soup2.jpg';
import soup3 from './~assets/soup3.jpg';
import steak1 from './~assets/steak1.jpg';
import steak2 from './~assets/steak2.jpg';
import steak3 from './~assets/steak3.jpg';

const lunchScreenData = [
  {
    image: bowl_of_soup,
    title: 'Tasty Soup',
    foodSize: 3,
    foodData: [
      {
        name: 'Vegy Soup',
        description: 'An Awesone vegy soup for everybody',
        price: '6',
        image: soup1,
      },
      {
        name: 'Spicy Soup',
        description: 'very spicy soup for you',
        price: '9',
        image: soup2,
      },
      {
        name: 'Chicken Soup',
        description: 'our speciality soup',
        price: '11',
        image: soup3,
      },
    ],
  },
  {
    image: steak,
    title: 'Best Steak',
    foodSize: 3,
    foodData: [
      {
        name: 'Vegy Steak',
        description: 'An Awesone vegy soup for everybody',
        price: '6',
        image: steak1,
      },
      {
        name: 'Spicy Steak',
        description: 'very spicy soup for you',
        price: '22',
        image: steak2,
      },
      {
        name: 'Chicken Steak',
        description: 'our speciality soup',
        price: '15',
        image: steak3,
      },
    ],
  },
  {
    image: pizza,
    title: 'Pizza',
  },
];

const LunchScreen = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar />
      <FlatList
        data={lunchScreenData}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => (
          <PromoFoodItem
            image={item.image}
            title={item.title}
            foodData={item.foodData}
            foodSize={item.foodSize}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default LunchScreen;
