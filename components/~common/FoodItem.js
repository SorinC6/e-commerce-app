import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from '../Styles/FoodItemStyles';
import testImg from '../~assets/pizza.jpg';

const FoodItem = ({foodImage, foodTitle, foodDescription, foodPrice}) => {
  return (
    <TouchableOpacity onPress={() => alert('Food Items Pressed')}>
      <View style={styles.foodItemView}>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>{foodPrice}$</Text>
        </View>
        <View style={styles.foodImageView}>
          <Image
            style={styles.foodImage}
            source={foodImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.foodDescriptionView}>
          <Text style={styles.foodTitle}>{foodTitle}</Text>
          <Text style={styles.foodDescription}>{foodDescription}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;
