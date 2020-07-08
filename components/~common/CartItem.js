import React from 'react';
import {View, Text} from 'react-native';

import styles from '../Styles/CartItemsStyles';

const CartItem = ({title}) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{title}</Text>
    </View>
  );
};

export default CartItem;
