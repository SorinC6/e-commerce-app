import {StyleSheet, Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
  },
  foodItemView: {
    width: '100%',
    height: HEIGHT / 4,
    marginHorizontal: '10%',
  },
  priceView: {
    backgroundColor: 'purple',
    height: '20%',
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  priceText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  foodImageView: {
    width: '50%',
    height: '70%',
    position: 'absolute',
    paddingTop: '5%',
  },
  foodImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  foodDescriptionView: {
    height: '60%',
    width: '40%',
    position: 'absolute',
    right: 40,
    padding: 20,
  },
  foodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});
