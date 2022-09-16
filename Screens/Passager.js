import React, { useEffect, useState } from 'react';
import {
ImageBackground,
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
TouchableOpacity,
Image,
Div,
} from 'react-native';
import Colors from '../Components/Colors';

const Passager = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [listAnimal, setListAnimal] = useState([]);
    useEffect(() => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
    .then(json => json.json())
    .then(res => setListAnimal(res));
  }, []);

    return (
      <>
    <ImageBackground
    accessibilityRole="image"
    testID="new-app-screen-passager"
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
        Liste des animaux
    </Text>
    </ImageBackground>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {listAnimal.map(animal => (
          <TouchableOpacity key={animal.id} style={styles.item}>
            <View style={styles.listAnimalContainer}>
              <View style={styles.listAnimalSubContainer}>
                <Image style={styles.animalImage} source={{uri: animal.image_link,}}/>
              </View>
              <View style={styles.listAnimalInfos}>
                  <Text style={styles.listAnimal}>{animal.name}</Text>
                  <Text style={styles.listAnimal}></Text>
                  <Text style={styles.listAnimal}>Type d'animal: {animal.animal_type}</Text>
                  <Text style={styles.listAnimal}>Durée de vie (années): {animal.lifespan}</Text>
                  <Text style={styles.listAnimal}>Régime: {animal.diet}</Text>
                  <Text style={styles.listAnimal}>Habitat : {animal.habitat}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </>
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
    item: {
      height: 200,
      padding: 10,
      margin: 10,
      elevation: 10,
      shadowColor: '#52006A',
      backgroundColor: 'white',
    },
    listAnimal: {
      color:'black',
      width:200
    },
    animalImage: {
      width:120,
      height:180,
      resizeMode: 'cover',
    },
    listAnimalContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    listAnimalInfos: {
      marginLeft:30,
    },
  });

export default Passager;