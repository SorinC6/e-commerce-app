import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Button from '../UiKit/Button';
import back from '../~assets/back.png';
import shopping_cart from '../~assets/shopping_cart.png';
import styles from '../Styles/HeaderScreenStyles';
import {useNavigation} from '@react-navigation/native';

const HeaderLanding = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={back} style={styles.menuIcon} />
        </TouchableOpacity>
        {/* <Text>WoopFood</Text> */}
        <Button title="Woop Food" color="blue" style={{fontStyle: 'italic'}} />
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image source={shopping_cart} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderLanding;
