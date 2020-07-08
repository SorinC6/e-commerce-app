import React from 'react';
import {View, Image} from 'react-native';
import Button from '../UiKit/Button';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/PromoFoodItemStyles';
//resizeMode="contain" for the image

const PromoFoodItem = ({image, title, foodData, foodSize}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.foodCard}>
      <Image source={image} style={styles.image} />
      <View style={styles.textView}>
        <Button
          title={title}
          color
          onPress={() =>
            navigation.navigate('FoodScreen', {
              title,
              foodImage: image,
              foodSize,
              foodData,
            })
          }
        />
      </View>
    </View>
  );
};

export default PromoFoodItem;
