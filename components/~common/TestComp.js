import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
//resizeMode="contain" for the image

const TestComp = (props) => {
  //   const navigation = useNavigation();

  return (
    <DrawerContentScrollView>
      <Text>Test</Text>
    </DrawerContentScrollView>
  );
};

export default TestComp;
