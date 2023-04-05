import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Alert,
} from 'react-native';

const option = 'vaonlcteis';
const answer = 'native';

const OptionBoxes = ({ onPress }) => {
  const letter = option.split('');

  return (
    <View style={styles.letters}>
      {letter.map((l, i) => (
        <Pressable key={i} onPress={() => onPress(l)}>
          <View style={styles.box}>
            <Text style={styles.alphabets}>{l}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const AnswerBoxes = ({ letters, onPress }) => {
  return (
    <View style={styles.letters}>
      {letters.map((l, i) => (
        <Pressable key={i} onPress={() => onPress(i)}>
          <View style={[styles.box, styles.answerBox]}>
            <Text style={styles.alphabets}>{l || ''}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}; 

const Play = () => {
  const [letters, setLetters] = useState(new Array(answer.length).fill(null));

  const handleOptionPress = (letter) => {
    // Find the first empty slot in the answer boxes
    const index = letters.findIndex((l) => l === null);

    // Update the letters state with the selected letter
    if (index !== -1) {
      const newLetters = [...letters];
      newLetters[index] = letter;
      setLetters(newLetters);

      // If all letters have been filled, compare with the answer
      if (newLetters.every(l => l !== null)) {
        const guessedWord = newLetters.join('');
        if (guessedWord === answer) {
          Alert.alert('You guessed right!');
        } else {
          Alert.alert('Your guess is not accurate, try to guess again');
        }
      }
    }
  };

  const handleAnswerPress = (index) => {
    // Update the letters state by removing the letter at the specified index
    const newLetters = [...letters];
    newLetters[index] = null;
    setLetters(newLetters);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>LEVEL 1</Text>
      <View style={styles.container1}>
        <Image style={styles.stretch} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
        <Image style={styles.stretch} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
      </View>
      <View style={styles.container2}>
        <Image style={styles.stretch} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
        <Image style={styles.stretch} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
      </View>

      <View style={styles.letters1}>
        <AnswerBoxes letters={letters} onPress={handleAnswerPress} />
      </View>

      <View style={styles.letters}>
        <OptionBoxes onPress={handleOptionPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingLeft:10,
    backgroundColor: '#2f4f4f',
    flex:1
  },
 
  container1: {
     paddingTop:50,
    paddingLeft:20,
    backgroundColor: '#2f4f4f',
    flex:3,
    flexDirection:'row',
     justifyContent: 'space-between',
     marginBottom:10,
     marginRight:10,

  },
  container2: {
    // paddingTop:50,
    paddingLeft:20,
    backgroundColor: '#2f4f4f',
    flex:5,
    flexDirection:'row',
     justifyContent: 'space-between',
     marginRight:10,

  },
  
  backbtn: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    height: 45,
    width: 350,
    borderBottomWidth: 1,
    backgroundColor: '#7fff00',
    marginLeft: 20,
    borderRadius: 70,
  },
  stretch: {
    width: 150,
    height: 100,
  },
  titlename: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold',
  },
  letters: {
    flexDirection: 'row', // boxes will be in a row
    justifyContent: 'center', // boxes will be centered horizontally
    alignItems: 'center', // boxes will be centered vertically
    flexWrap: 'wrap',

     // boxes will wrap to next row if necessary
  },
  letters1: {
    flexDirection: 'row', // boxes will be in a row
    justifyContent: 'center', // boxes will be centered horizontally
    alignItems: 'center', // boxes will be centered vertically
    flexWrap: 'wrap',
    flex:1

     // boxes will wrap to next row if necessary
  },
  box: {
    width: 40,
    height: 30,
    margin: 5,
    backgroundColor: 'blue',
    aspectRatio:1,
  },
  alphabets: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',


  },
});

export default Play; 