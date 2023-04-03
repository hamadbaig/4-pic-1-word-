import React, { useState } from 'react';
import {StyleSheet, Text, View, Pressable,Image,FlatList,Button,onPress} from 'react-native';
 
const option="vaonlcteis";
const letter=option.split('');
const answer="native";
const answerS=answer.split('');
const img = {uri: 'https://reactjs.org/logo-og.png'};

// const Box = ({ letter, onPress }) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View style={{ 
//         width: 50, 
//         height: 50, 
//         borderRadius: 10, 
//         backgroundColor: '#f2f2f2', 
//         justifyContent: 'center',  
//         alignItems: 'center' 
//       }}>
//         <Text>{letter}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }
const OptionBoxes = () => {
  const boxes = [];
  for (let i = 0; i < option.length; i++) {
    boxes.push(
      <View key={i} style={styles.box}>
         {/* <Pressable
            onPress={() => setSelectedLetter(letter[i])}> */}
        <Text style={styles.alphabets}>{letter[i]}</Text>
         {/* </Pressable> */}
      </View>
    );
  }
  console.log(letter);
  return boxes;
};
const AnswerBoxes = () => {
  const boxes = [];
  for (let i = 0; i < answer.length; i++) {
    boxes.push(
      <View key={i} style={styles.box}>
        {/* <Text style={styles.alphabets}>{selectedLetter}</Text> */}
      </View>
    );
  }
  console.log(letter);
  return boxes;
};

// const img1 = {uri: './src/assets/Splashscreen.PNG'};

const Play = ({ navigation }) =>  {
  const [selectedLetter, setSelectedLetter] = useState('');
  const handleBoxPress = (letter) => {
    setSelectedLetter(letter);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titlename}>LEVEL 1</Text>
        <View style={styles.container1}>
            <Image
                style={styles.stretch}
                source = {img}
            />
            <Image
                style={styles.stretch}
                source = {img}
            />
        </View>
        <View style={styles.container2}>
            <Image
                style={styles.stretch}
                source = {img}
            />
            <Image
                style={styles.stretch}
                source = {img}
            />
        </View>
       
        <View style={styles.letters1}>
      {AnswerBoxes()}
    </View> 
    
         <View style={styles.letters}>
      {OptionBoxes()}
    </View> 
         {/* <Pressable
            onPress={() => navigation.navigate('Menu')}
           style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
           <Text style={styles.backbtn}>Back</Text>
         </Pressable>  */}

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