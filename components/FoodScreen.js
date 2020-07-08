import React from 'react';

import {View, Text, FlatList} from 'react-native';
import styles from './Styles/FoodScreenStyles';
import FoodItem from './~common/FoodItem';

const LunchScreen = ({route}) => {
  const {title, foodData, foodSize} = route.params;
  return (
    <View style={styles.foodScreen}>
      <Text style={styles.title}>
        {title} ({foodSize})
      </Text>
      {/* <FoodItem foodImage={foodImage} foodTitle={foodTitle} />
      <FoodItem foodImage={foodImage} /> */}
      <FlatList
        data={foodData}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => {
          return (
            <FoodItem
              foodImage={item.image}
              foodTitle={item.name}
              foodDescription={item.description}
              foodPrice={item.price}
              foodSize={item.foodSize}
            />
          );
        }}
      />
    </View>
  );
};

export default LunchScreen;
