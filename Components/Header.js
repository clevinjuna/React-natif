import React from 'react';
import {
ImageBackground,
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
} from 'react-native';

import Colors from './Colors';

const Header = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
    <ImageBackground
    accessibilityRole="image"
    testID="new-app-screen-header"
    source={require('../images/screen-2.webp')}
    style={[
        styles.background,
        {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
    ]}
    imageStyle={styles.logo}>
    <Text
        style={[
        styles.text,
        {
            color: isDarkMode ? Colors.white : Colors.black,
        },
        ]}>
        hehehe
        {'\n'}
        yes
    </Text>
    </ImageBackground>
);
};

const styles = StyleSheet.create({
    background: {
      paddingBottom: 40,
      paddingTop: 96,
      paddingHorizontal: 32,
    },
    logo: {
      opacity: 0.2,
      overflow: 'visible',
      resizeMode: 'cover',
      marginLeft: -128,
      marginBottom: -192,
    },
    text: {
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export default Header;
