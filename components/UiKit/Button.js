// @flow

import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  button: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    // height: 40,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'transparent',
  },
  buttonOutlineOnLight: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    padding: 8,
    fontSize: 14,
  },
  textOutlineOnLight: {
    color: 'black',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  shelleyTheme: {
    backgroundColor: 'black',
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

type ButtonProps = {
  title: string,
  onPress: (event?: any) => mixed,
  color?: ?string,
  accessibilityLabel?: ?string,
  disabled?: ?boolean,
  outline?: boolean,
  outlineOnLight?: boolean,
  style?: Object,
  containerStyle?: Object,
  block?: boolean,
  iconImage?: number,
  withoutBackground?: boolean,
  shelleyTheme?: boolean,
};

class Button extends React.Component<ButtonProps> {
  render() {
    const {
      accessibilityLabel,
      onPress,
      title,
      disabled,
      block,
      style,
      containerStyle,
      outline,
      outlineOnLight,
      iconImage,
      withoutBackground,
      shelleyTheme,
      color,
    } = this.props;

    const formattedTitle = title && title.toUpperCase();

    return (
      <TouchableOpacity
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        disabled={disabled}
        onPress={onPress}
        style={[block === true && styles.block, containerStyle]}
        activeOpacity={0.5}>
        <View
          style={[
            styles.button,
            outline === true && styles.buttonOutline,
            outlineOnLight === true && styles.buttonOutlineOnLight,
            disabled === true && styles.buttonDisabled,
            withoutBackground === true && styles.buttonTransparent,
            shelleyTheme === true && styles.shelleyTheme,
            style,
          ]}>
          {iconImage != null && <Image source={iconImage} />}
          <Text
            style={[
              styles.text,
              outlineOnLight === true && styles.textOutlineOnLight,
              color === true && styles.textColor,
              style,
            ]}>
            {formattedTitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Button;
