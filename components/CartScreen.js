import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Styles/CartScreenStyles';
import Swipeout from 'react-native-swipeout';

import CartItem from './~common/CartItem';

const data = [{name: 'Soup'}, {name: 'Burger'}];

var swipeoutBtns = [
  {
    component: (
      <TouchableOpacity style={styles.swipe}>
        <Text>Test</Text>
      </TouchableOpacity>
    ),
  },
];

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Swipeout right={swipeoutBtns}>
          <CartItem title="Soup" />
        </Swipeout>
        <CartItem title="Berger" />
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Total :</Text>
      </View>
    </View>
  );
};

export default CartScreen;
