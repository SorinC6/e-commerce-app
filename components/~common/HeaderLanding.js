import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../UiKit/Button';
import menuIcon from '../~assets/open_menu.png';
import shopping_cart from '../~assets/shopping_cart.png';
import styles from '../Styles/HeaderScreenStyles';

const HeaderLanding = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={menuIcon} style={styles.menuIcon} />
        </TouchableOpacity>
        {/* <Text>WoopFood</Text> */}
        <Button
          title="Woop Food"
          color="blue"
          style={{fontStyle: 'italic'}}
          onPress={() => navigation.navigate('FoodScreen')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image source={shopping_cart} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderLanding;
