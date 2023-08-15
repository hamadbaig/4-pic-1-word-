
// export default Play; 
// // const OptionBoxes = ({ onPress }) => {
// //   const letter = option.split('');

// //   return (
// //     <View style={styles.letters}>
// //       {letter.map((l, i) => (
// //         <Pressable key={i} onPress={() => onPress(l)}>
// //           <View style={styles.box}>
// //             <Text style={styles.alphabets}>{l}</Text>
// //           </View>
// //         </Pressable>
// //       ))}
// //     </View>
// //   );
// // };

// // const AnswerBoxes = ({ letters, onPress }) => {
// //   return (
// //     <View style={styles.letters}>
// //       {letters.map((l, i) => (
// //         <Pressable key={i} onPress={() => onPress(i)}>
// //           <View style={[styles.box, styles.answerBox]}>
// //             <Text style={styles.alphabets}>{l || ''}</Text>
// //           </View>
// //         </Pressable>
// //       ))}
// //     </View>
// //   );
// // }; 
// // const AnswerBoxes = ({ letters, answer, onPress }) => {
// //   return (
// //     <View style={styles.letters}>
// //       {letters.map((l, i) => (
// //         <Pressable key={i} onPress={() => onPress(i)}>
// //           <View style={[styles.box, styles.answerBox]}>
// //             <Text style={styles.alphabets}>{l || answer[i] || ''}</Text>
// //           </View>
// //         </Pressable>
// //       ))}
// //     </View>
// //   );
// // };


// // const Play = () => {
// //   const [data, setData] = useState([]);

// //   const [letters, setLetters] = useState(new Array(answer.length).fill(null));
// //   useEffect(() => {
// //     const db = SQLite.openDatabase({ name: 'FourPicOneWord.db', createFromLocation: '~FourPicOneWord.db' });

// //     db.transaction(tx => {
// //       tx.executeSql('SELECT * FROM Levels WHERE id = 0', [], (_, { rows }) => {
// //         const retrievedData = rows.raw();
// //         setData(retrievedData);
// //         console.log(retrievedData);
// //       });
// //     });
// //   }, );


// //   const handleOptionPress = (letter) => {
// //     // Find the first empty slot in the answer boxes
// //     const index = letters.findIndex((l) => l === null);

// //     // Update the letters state with the selected letter
// //     if (index !== -1) {
// //       const newLetters = [...letters];
// //       newLetters[index] = letter;
// //       setLetters(newLetters);

// //       // If all letters have been filled, compare with the answer
// //       if (newLetters.every(l => l !== null)) {
// //         const guessedWord = newLetters.join('');
// //         if (guessedWord === answer) {
// //           Alert.alert('You guessed right!');
// //         } else {
// //           Alert.alert('Your guess is not accurate, try to guess again');
// //         }
// //       }
// //     }
// //   };

 
// //   const handleAnswerPress = (index) => {
// //     // Update the letters state by removing the letter at the specified index
// //     const newLetters = [...letters];
// //     newLetters[index] = null;
// //     setLetters(newLetters);
// //   };


//   // const [letters, setLetters] = useState(new Array(answer.length).fill(null));
 
//   // const handleOptionPress = (letter) => {
//   //   // Find the first empty slot in the answer boxes
//   //   const index = letters.findIndex((l) => l === null);

//   //   // Update the letters state with the selected letter
//   //   if (index !== -1) {
//   //     const newLetters = [...letters];
//   //     newLetters[index] = letter;
//   //     setLetters(newLetters);

//   //     // If all letters have been filled, compare with the answer
//   //     if (newLetters.every(l => l !== null)) {
//   //       const guessedWord = newLetters.join('');
//   //       if (guessedWord === answer) {
//   //         Alert.alert('You guessed right!');
//   //       } else {
//   //         Alert.alert('Your guess is not accurate, try to guess again');
//   //       }
//   //     }
//   //   }
//   // };

//   // const handleAnswerPress = (index) => {
//   //   // Update the letters state by removing the letter at the specified index
//   //   const newLetters = [...letters];
//   //   newLetters[index] = null;
//   //   setLetters(newLetters);
// //   // };
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import SQLite from "react-native-sqlite-storage";


// const UserId = 1;
const answer = 'Native';

let db = SQLite.openDatabase({ name: 'FourPicOneWordgame.db' });

const Mediumplay = ({ navigation }) => {
  const [userlist, setuserlist] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [UserId, setUserId] = useState(1);
  const [right, setright] = useState(0);
  const [wrong, setwrong] = useState(0);



  // useEffect(() => {
   
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       'SELECT * FROM Levels where id = ?',
  //       [UserId],
  //       (tx, results) => {
  //         var len = results.rows.length;
  //         if (len > 0) {
  //           setuserlist(results.rows.item(0));
  //         } else {
  //           alert('No user found');
  //         }
  //       }
  //     );
  //   });
  // }, []);
  useEffect(() => {
    if (UserId === 0) {
      // If UserId is 0, increment the value by 1
      const newUserId = UserId + 1;
      setUserId(newUserId);
    }
  
    // Fetch the user from the database based on the updated UserId
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Medium WHERE id = ?',
        [UserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            setuserlist(results.rows.item(0));
          } else {
      //      Alert.alert('right: '+ right +"\n"+'wrong: '+wrong,
      // [
      //   // {
      //   //   text: 'Cancel',
      //   //   style: 'cancel',
      //   // },
      //   {
      //     text: 'reset',
      //     onPress: resetvalue,
      //   },
      // ]);
      alert('no more questions',
      [
       
        {
          text: 'reset',
          onPress: resetvalue,
        },
      ]
      );
          }
        }
      );
    });
  }, []);
  
  const handleRadioPress = (option) => {
    setSelectedValue(option);
  };

  const checkAnswer = () => {
    if (selectedValue === userlist.answer) {
      Alert.alert(
        'Correct Answer',
        'Your answer is correct! Do you want to play next?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Next',
            onPress: handleNextQuestion,
          },
        ]
      );
    } else {
      Alert.alert('Incorrect Answer', 'Sorry, your answer is incorrect.want to play next?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Next',
          onPress: handlewrongQuestion,
        },
      ]
      );
    }
  };
  const resetvalue = () => {
   setright(0);
   setwrong(0);
   console.log('wrong: ',wrong)
   console.log('right: ',right)

    
  }; 
  const foam = () => {
    alert('                 Medium level score'+"\n"+"\n"+"\n"+'All Right Attempts: '+ right +"\n"+"\n"+'All wrongAttempts: '+wrong,
     
    );
 
     
   };
 
  const handleNextQuestion = () => {
    setUserId((prevUserId) => prevUserId + 1);
    setSelectedValue('');
    setright((prevright) => right + 1);
    // setSelectedValue('');
    console.log('right',right)
    
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Medium where id = ?',
        [UserId + 1],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            setuserlist(results.rows.item(0));
          } else {
      //        Alert.alert('right: '+ right +"\n"+'wrong: '+wrong,
      // [
      //   // {
      //   //   text: 'Cancel',
      //   //   style: 'cancel',
      //   // },
      //   {
      //     text: 'reset',
      //     onPress: resetvalue,
      //   },
      // ]);
      alert('no more questions',
     
      );
           
          }
        }
      );
    });
  };
 
  const handlewrongQuestion = () => {
    setUserId((prevUserId) => prevUserId + 1);
    setSelectedValue('');
    setwrong((prevwrong) => wrong + 1);
    // setSelectedValue('');
    console.log('wrong: ',wrong)
    
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Medium where id = ?',
        [UserId + 1],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            setuserlist(results.rows.item(0));
          } else {
           
            alert('no more questions',
            [
              // {
              //   text: 'Cancel',
              //   style: 'cancel',
              // },
              {
                text: 'reset',
                onPress: resetvalue,
              },
            ]
            );          }
        }
      );
    });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>Question {UserId}</Text>
      
        <Pressable onPress={foam} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <Text style={styles.foam}>FOAM</Text>
      </Pressable>
      <Pressable onPress={resetvalue} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <Text style={styles.foam}>reset</Text>
      </Pressable>
    
      <View style={styles.container1}>
        {userlist && (
          <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${userlist.image1}` }} />
        )}
        {userlist && (
          <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${userlist.image2}` }} />
        )}
      </View>
      <View style={styles.container2}>
        {userlist && (
          <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${userlist.image3}` }} />
        )}
        {userlist && (
          <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${userlist.image4}` }} />
        )}
      </View>

      {userlist && (
        // <View style={styles.optionsContainer}>
        //   <View style={styles.rowContainer}>
        //     <RadioButton.Group onValueChange={handleRadioPress} value={selectedValue}>
        //       <RadioButton.Item label={userlist.opt1} value={userlist.opt1} />
        //       <RadioButton.Item label={userlist.opt2} value={userlist.opt2} />
        //     </RadioButton.Group>
        //   </View>
        //   <View style={styles.rowContainer}>
        //     <RadioButton.Group onValueChange={handleRadioPress} value={selectedValue}>
        //       <RadioButton.Item label={userlist.opt3} value={userlist.opt3} />
        //       <RadioButton.Item label={userlist.opt4} value={userlist.opt4} />
        //     </RadioButton.Group>
        //   </View>
        // </View>
        <View style={styles.optionsContainer}>
  <View style={styles.rowContainer}>
    <RadioButton.Group onValueChange={handleRadioPress} value={selectedValue}>
      <View style={styles.radioButtonContainer}>
        <RadioButton value={userlist.opt1} />
        <Text style={styles.radioButtonLabel}>{userlist.opt1}</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton value={userlist.opt2} />
        <Text style={styles.radioButtonLabel}>{userlist.opt2}</Text>
      </View>
    </RadioButton.Group>
  {/* </View>
  <View style={styles.rowContainer}> */}
    <RadioButton.Group onValueChange={handleRadioPress} value={selectedValue}>
      <View style={styles.radioButtonContainer}>
        <RadioButton value={userlist.opt3} />
        <Text style={styles.radioButtonLabel}>{userlist.opt3}</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton value={userlist.opt4} />
        <Text style={styles.radioButtonLabel}>{userlist.opt4}</Text>
      </View>
    </RadioButton.Group>
  </View>
</View>

      )}

      <Pressable onPress={checkAnswer} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <Text style={styles.signup}>Check Answer</Text>
      </Pressable>

      {/* <Pressable onPress={() => navigation.navigate('Menu')} style={{ padding: 10, marginBottom: 10 }}>
        <Text style={styles.signup}>Back</Text>
      </Pressable> */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foam:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 45,
    width: 80,
    borderBottomWidth: 1,
    backgroundColor: '#7fff00',
    marginLeft: 20,
    },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  stretch: {
    width: 120,
    height: 120,
    resizeMode: 'stretch',
    margin: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButtonLabel: {
    marginLeft: 8,
  },
  
  titlename: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Mediumplay;
