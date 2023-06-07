// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
// import { RadioButton } from 'react-native-paper';
// import SQLite from "react-native-sqlite-storage";


// // const UserId = 1;
// const answer = 'Native';

// let db = SQLite.openDatabase({ name: 'FourPicOneWordgame.db' });

// const Leveltoplay = ({ navigation }) => {
//   const [userlist, setuserlist] = useState(null);
//   const [selectedValue, setSelectedValue] = useState('');
//   const [UserId, setUserId] = useState(1);


//   // useEffect(() => {
   
//   //   db.transaction((tx) => {
//   //     tx.executeSql(
//   //       'SELECT * FROM Levels where id = ?',
//   //       [UserId],
//   //       (tx, results) => {
//   //         var len = results.rows.length;
//   //         if (len > 0) {
//   //           setuserlist(results.rows.item(0));
//   //         } else {
//   //           alert('No user found');
//   //         }
//   //       }
//   //     );
//   //   });
//   // }, []);
//   useEffect(() => {
//     if (UserId === 0) {
//       // If UserId is 0, increment the value by 1
//       const newUserId = UserId + 1;
//       setUserId(newUserId);
//     }
  
//     // Fetch the user from the database based on the updated UserId
//     db.transaction((tx) => {
//       tx.executeSql(
//         'SELECT * FROM Levels WHERE id = ?',
//         [storedata],
//         (tx, results) => {
//           var len = results.rows.length;
//           if (len > 0) {
//             setuserlist(results.rows.item(0));
//           } else {
//             alert('No user found');
//           }
//         }
//       );
//     });
//   }, []);
  
//   const handleRadioPress = (option) => {
//     setSelectedValue(option);
//   };

//   const checkAnswer = () => {
//     if (selectedValue === userlist.answer) {
//       Alert.alert(
//         'Correct Answer',
//         'Your answer is correct! Do you want to play next?',
//         [
//           {
//             text: 'Cancel',
//             style: 'cancel',
//           },
//           {
//             text: 'Next',
//             onPress: handleNextQuestion,
//           },
//         ]
//       );
//     } else {
//       Alert.alert('Incorrect Answer', 'Sorry, your answer is incorrect.');
//     }
//   };

// //   const handleNextQuestion = () => {
// //     setUserId((prevUserId) => prevUserId + 1);
// //     setSelectedValue('');
    
// //     db.transaction((tx) => {
// //       tx.executeSql(
// //         'SELECT * FROM Levels where id = ?',
// //         [UserId + 1],
// //         (tx, results) => {
// //           var len = results.rows.length;
// //           if (len > 0) {
// //             setuserlist(results.rows.item(0));
// //           } else {
// //             alert('No user found');
// //           }
// //         }
// //       );
// //     });
// //   };
  

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titlename}>LEVEL {UserId}</Text>
//       <View style={styles.container1}>
//         {userlist && (
//           <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${userlist.image1}` }} />
//         )}
//         {userlist && (
//           <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${userlist.image2}` }} />
//         )}
//       </View>
//       <View style={styles.container2}>
//         {userlist && (
//           <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${userlist.image3}` }} />
//         )}
//         {userlist && (
//           <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${userlist.image4}` }} />
//         )}
//       </View>

//       {userlist && (
//         <View style={styles.optionsContainer}>
//           <View style={styles.rowContainer}>
//             <RadioButton.Group onValueChange={handleRadioPress} value={selectedValue}>
//               <RadioButton.Item label={userlist.opt1} value={userlist.opt1} />
//               <RadioButton.Item label={userlist.opt2} value={userlist.opt2} />
//             </RadioButton.Group>
//           </View>
//           <View style={styles.rowContainer}>
//             <RadioButton.Group onValueChange={handleRadioPress} value={selectedValue}>
//               <RadioButton.Item label={userlist.opt3} value={userlist.opt3} />
//               <RadioButton.Item label={userlist.opt4} value={userlist.opt4} />
//             </RadioButton.Group>
//           </View>
//         </View>
//       )}

//       <Pressable onPress={checkAnswer} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
//         <Text style={styles.signup}>Check Answer</Text>
//       </Pressable>

//       {/* <Pressable onPress={() => navigation.navigate('Menu')} style={{ padding: 10, marginBottom: 10 }}>
//         <Text style={styles.signup}>Back</Text>
//       </Pressable> */}
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   container1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   container2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   stretch: {
//     width: 120,
//     height: 120,
//     resizeMode: 'stretch',
//     margin: 10,
//   },
//   titlename: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   optionsContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   signup: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });
// export default Leveltoplay;
// Leveltoplay.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'FourPicOneWordgame.db' });

const Leveltoplay = ({ route, navigation }) => {
  const [level, setLevel] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const { levelId } = route.params;
    fetchLevel(levelId);
  }, []);

  const fetchLevel = (levelId) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Levels WHERE id = ?',
        [levelId],
        (tx, results) => {
          const len = results.rows.length;
          if (len > 0) {
            const level = results.rows.item(0);
            setLevel(level);
          } else {
            Alert.alert('Error', 'No level found');
          }
        }
      );
    });
  };

  const handleRadioPress = (option) => {
    setSelectedValue(option);
  };

  const checkAnswer = () => {
    if (selectedValue === level.answer) {
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
      Alert.alert('Incorrect Answer', 'Sorry, your answer is incorrect.');
    }
  };

  const handleNextQuestion = () => {
    const nextLevelId = level.id + 1;
    fetchLevel(nextLevelId);
    setSelectedValue('');
  };

  if (!level) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>LEVEL {level.id}</Text>
      <View style={styles.container1}>
        <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${level.image1}` }} />
        <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${level.image2}` }} />
      </View>
      <View style={styles.container2}>
        <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${level.image3}` }} />
        <Image style={styles.stretch} source={{ uri: `data:image/png;base64,${level.image4}` }} />
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.rowContainer}>
          <RadioButton.Group onValueChange={handleRadioPress} value={selectedValue}>
            <RadioButton.Item label={level.opt1} value={level.opt1} />
            <RadioButton.Item label={level.opt2} value={level.opt2} />
          </RadioButton.Group>
        </View>
        <View style={styles.rowContainer}>
          <RadioButton.Group onValueChange={handleRadioPress} value={selectedValue}>
            <RadioButton.Item label={level.opt3} value={level.opt3} />
            <RadioButton.Item label={level.opt4} value={level.opt4} />
          </RadioButton.Group>
        </View>
      </View>

      <Pressable onPress={checkAnswer} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <Text style={styles.signup}>Check Answer</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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

export default Leveltoplay;
