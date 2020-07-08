import {StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  foodCard: {
    backgroundColor: 'orange',
    height: HEIGHT / 2,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textView: {
    width: '50%',
    position: 'absolute',
    top: '50%',
  },
});
