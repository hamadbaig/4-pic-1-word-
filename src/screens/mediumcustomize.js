// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Pressable,
//   Image,
//   Button,
//   TextInput,
//   Alert,
//   PermissionsAndroid
// } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import sqlite from "react-native-sqlite-storage";
// import RNFS from 'react-native-fs';

// var db = sqlite.openDatabase({ name: 'FourPicOneWord.db' });

// const img = {
//   uri:
//     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
// };

// const Customize = ({ navigation }) => {
//   const [Answer, setAnswer] = useState('');
//   const [opt1, setopt1] = useState('');
//   const [opt2, setopt2] = useState('');
//   const [opt3, setopt3] = useState('');
//   const [opt4, setopt4] = useState('');

//   // const [FirstGalleryphoto, setFirstGalleryphoto] = useState(null);
//   // const [SecondGalleryphoto, setSecondGalleryphoto] = useState(null);
//   // const [ThirdGalleryphoto, setThirdGalleryphoto] = useState(null);
//   // const [FourthGalleryphoto, setFourthGalleryphoto] = useState(null);
//   const saveData = async () => {
//     const [image1Base64, image2Base64, image3Base64, image4Base64] = await Promise.all([
//       RNFS.readFile(FirstGalleryphoto, 'base64'),
//       RNFS.readFile(SecondGalleryphoto, 'base64'),
//       RNFS.readFile(ThirdGalleryphoto, 'base64'),
//       RNFS.readFile(FourthGalleryphoto, 'base64'),
//     ]);

//   }

//     let options = {
//       saveToPhoto: true,
//       mediatype: 'photo',
//     };
//     const OpenGallery = async () => {
//       const granted = await launchImageLibrary(options);
//       setFirstGalleryphoto(granted.assets[0].uri);
//     };
//     const SecondOpenGallery = async () => {
//       const granted = await launchImageLibrary(options);
//       setSecondGalleryphoto(granted.assets[0].uri);
//     };
//     const ThirdOpenGallery = async () => {
//       const granted = await launchImageLibrary(options);
//       setThirdGalleryphoto(granted.assets[0].uri);
//     };
//     const FourthOpenGallery = async () => {
//       const granted = await launchImageLibrary(options);
//       setFourthGalleryphoto(granted.assets[0].uri);
//     };

//     const createTable = () => {
//       db.transaction((tx) => {
//         tx.executeSql(
//           'CREATE TABLE IF NOT EXISTS Levels (id INTEGER PRIMARY KEY AUTOINCREMENT, answer TEXT, opt1 TEXT, opt2 TEXT, opt3 TEXT, opt4 TEXT, image1 BLOB, image2 BLOB, image3 BLOB, image4 BLOB)',
//           [],
//           () => console.log('Table created successfully'),
//           (error) => console.log('Error creating table:', error)
//         );
//       });
//     };
//     // useEffect(() => {
//     //   createTable();
//     // }, []);
//     const saveData = () => {
//       db.transaction((tx) => {
//         tx.executeSql(
//           'INSERT INTO Levels (answer, image1, image2, image3, image4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
//           [Answer, opt1, opt2, opt3, opt4, image1Base64, image2Base64, image3Base64, image4Base64],
//           () => {
//             Alert.alert('Data saved successfully');
//             // Reset the state values to clear the form
//             setAnswer('');
//             setFirstGalleryphoto(null);
//             setSecondGalleryphoto(null);
//             setThirdGalleryphoto(null);
//             setFourthGalleryphoto(null);
//           },
//           (error) => console.log('Error saving data:', error)
//         );
//       });
//     };

//     return (
//       <View style={styles.container}>
//         <Text style={styles.titlename}>ADD LEVELS</Text>
//         <View style={styles.container1}>
//           <Pressable onPress={OpenGallery}>
//             <Image
//               key="image1"
//               style={styles.stretch}
//               source={FirstGalleryphoto ? { uri: FirstGalleryphoto } : img}
//             />
//           </Pressable>
//           <Pressable onPress={SecondOpenGallery}>
//             <Image
//               key="image2"
//               style={styles.stretch}
//               source={SecondGalleryphoto ? { uri: SecondGalleryphoto } : img}
//             />
//           </Pressable>
//         </View>
//         <View style={styles.container2}>
//           <Pressable onPress={ThirdOpenGallery}>
//             <Image
//               key="image3"
//               style={styles.stretch}
//               source={ThirdGalleryphoto ? { uri: ThirdGalleryphoto } : img}
//             />
//           </Pressable>
//           <Pressable onPress={FourthOpenGallery}>
//             <Image
//               key="image4"
//               style={styles.stretch}
//               source={FourthGalleryphoto ? { uri: FourthGalleryphoto } : img}
//             />
//           </Pressable>
//         </View>
//         <View style={styles.btn}>
//           <TextInput style={styles.txtname}
//             value={Answer}
//             placeholder={' Answer'}
//             onChangeText={(value) => setAnswer(value)}
//           />
//         </View>
//         <View style={styles.btn}>
//           <TextInput style={styles.txtname}
//             value={Answer}
//             placeholder={' Enter option 1'}
//             onChangeText={(value) => setopt1(value)}
//           />


//           <TextInput style={styles.txtname}
//             value={Answer}
//             placeholder={' Enter option 2'}
//             onChangeText={(value) => setopt2(value)}
//           />
//         </View>
//         <View style={styles.btn}>

//           <TextInput style={styles.txtname}
//             value={Answer}
//             placeholder={' Enter optin 3'}
//             onChangeText={(value) => setopt3(value)}
//           />
//           <TextInput style={styles.txtname}
//             value={Answer}
//             placeholder={' Enter optin 4'}
//             onChangeText={(value) => setopt4(value)}
//           />
//         </View>
//         <View style={styles.btn1}>
//           <Button
//             title="save"
//             onPress={saveData}
//           />
//           <Button
//             title="cancel"
//             onPress={() => Alert.alert('Simple Button pressed')}
//           />

//         </View>

//         <Pressable
//           onPress={() => navigation.navigate('Menu')}
//           style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
//           <Text style={styles.back}>Back</Text>
//         </Pressable>

//       </View>
//     );
//   };
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import SQLite from 'react-native-sqlite-storage';
import RNFS from 'react-native-fs';

const db = SQLite.openDatabase({ name: 'FourPicOneWordgame.db' });
//  const img = require('../image');

const img = {
  uri:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
};
const mediumcustomize = ({ navigation }) => {
  const [Answer, setAnswer] = useState('');
  const [opt1, setopt1] = useState('');
  const [opt2, setopt2] = useState('');
  const [opt3, setopt3] = useState('');
  const [opt4, setopt4] = useState('');
  const [FirstGalleryphoto, setFirstGalleryphoto] = useState(null);
  const [SecondGalleryphoto, setSecondGalleryphoto] = useState(null);
  const [ThirdGalleryphoto, setThirdGalleryphoto] = useState(null);
  const [FourthGalleryphoto, setFourthGalleryphoto] = useState(null);

  const openGallery = async (setImage) => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.error && !response.customButton) {
        setImage(response.assets[0].uri);
      }
    });
  };

  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       'CREATE TABLE IF NOT EXISTS Levels (id INTEGER PRIMARY KEY AUTOINCREMENT, answer TEXT, opt1 TEXT, opt2 TEXT, opt3 TEXT, opt4 TEXT, image1 BLOB, image2 BLOB, image3 BLOB, image4 BLOB)', [],
  //       () => console.log('Table created successfully'),
  //       (error) => console.log('Error creating table:', error)
  //     );
  //   });
  // }, []);
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Medium'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Medium', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Medium (id INTEGER PRIMARY KEY AUTOINCREMENT, answer TEXT, opt1 TEXT, opt2 TEXT, opt3 TEXT, opt4 TEXT, image1 BLOB, image2 BLOB, image3 BLOB, image4 BLOB)', [],
              [],
            );
          }
        },
      );
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Medium'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
             
            txn.executeSql('DROP TABLE IF EXISTS Medium', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Medium (id INTEGER PRIMARY KEY AUTOINCREMENT, answer TEXT, opt1 TEXT, opt2 TEXT, opt3 TEXT, opt4 TEXT, image1 BLOB, image2 BLOB, image3 BLOB, image4 BLOB)', [],
              [],
            );
          }
        },
      );
      txn.executeSql( 
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Hard'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Hard', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Hard (id INTEGER PRIMARY KEY AUTOINCREMENT, answer TEXT, opt1 TEXT, opt2 TEXT, opt3 TEXT, opt4 TEXT, image1 BLOB, image2 BLOB, image3 BLOB, image4 BLOB)', [],
              [],
            );
          }
        },
      );
    });
  }, []);


  const saveData = async () => {
    const image1Base64 = await RNFS.readFile(FirstGalleryphoto, 'base64');
    const image2Base64 = await RNFS.readFile(SecondGalleryphoto, 'base64');
    const image3Base64 = await RNFS.readFile(ThirdGalleryphoto, 'base64');
    const image4Base64 = await RNFS.readFile(FourthGalleryphoto, 'base64');

    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO Medium (answer, opt1, opt2, opt3, opt4, image1, image2, image3, image4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [Answer, opt1, opt2, opt3, opt4, image1Base64, image2Base64, image3Base64, image4Base64],
        (tx, result) => {
          console.log('Results', result.rowsAffected);
          if (result.rowsAffected > 0) {
            Alert.alert('Data saved successfully');
            setAnswer('');
            setopt1('');
            setopt2('');
            setopt3('');
            setopt4('');
            setFirstGalleryphoto(null);
            setSecondGalleryphoto(null);
            setThirdGalleryphoto(null);
            setFourthGalleryphoto(null);
          } else {
            Alert.alert('Failed to save data');
          }
        },
        (error) => console.log('Error saving data:', error)
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>ADD LEVELS</Text>
      <View style={styles.container1}>
        <Pressable onPress={() => openGallery(setFirstGalleryphoto)}>
          <Image
            key="image1"
            style={styles.stretch}
            source={FirstGalleryphoto ? { uri: FirstGalleryphoto } : img}
          />
        </Pressable>
        <Pressable onPress={() => openGallery(setSecondGalleryphoto)}>
          <Image
            key="image2"
            style={styles.stretch}
            source={SecondGalleryphoto ? { uri: SecondGalleryphoto } : img}
          />
        </Pressable>
      </View>
      <View style={styles.container2}>
        <Pressable onPress={() => openGallery(setThirdGalleryphoto)}>
          <Image
            key="image3"
            style={styles.stretch}
            source={ThirdGalleryphoto ? { uri: ThirdGalleryphoto } : img}

          />
        </Pressable>
        <Pressable onPress={() => openGallery(setFourthGalleryphoto)}>
          <Image
            key="image4"
            style={styles.stretch}
            source={FourthGalleryphoto ? { uri: FourthGalleryphoto } : img}
          />
        </Pressable>
      </View>
      <View style={styles.btn}>
        <TextInput
          style={styles.txtname}
          value={Answer}
          placeholder={' Answer'}
          onChangeText={(Text) => setAnswer(Text)}
        />
      </View>
      {/* Additional code for options inputs */}
      <View style={styles.btn}>
        <TextInput
          style={styles.txtname}
          value={opt1}
          placeholder={' Enter option 1'}
          onChangeText={(Text) => setopt1(Text)}
        />
        <TextInput
          style={styles.txtname}
          value={opt2}
          placeholder={' Enter option 2'}
          onChangeText={(Text) => setopt2(Text)}
        />
      </View>
      <View style={styles.btn}>
        <TextInput
          style={styles.txtname}
          value={opt3}
          placeholder={' Enter option 3'}
          onChangeText={(Text) => setopt3(Text)} />
        <TextInput
          style={styles.txtname}
          value={opt4}
          placeholder={' Enter option 4'}
          onChangeText={(Text) => setopt4(Text)} />
      </View>
      {/* End of additional code */}
      <View style={styles.btn1}>
        <Button title="save" onPress={saveData} />
        <Button
          title="cancel"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Menu')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text style={styles.back}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 10,
    backgroundColor: '#2f4f4f',
    flex: 1
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 26,
    fontWeight: 'bold',
    backgroundColor: "gray",
    flexDirection: 'row',
  },
  container1: {
    paddingTop: 50,
    // paddingLeft: 20,
    backgroundColor: '#2f4f4f',
    // flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 70,


  },
  container2: {
    paddingTop: 20,
    // paddingLeft: 20,
    backgroundColor: '#2f4f4f',
    // flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10

  },

  back: {
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
    width: 130,
    height: 70,
  },
  titlename: {

    color: '#ffffff',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold',
  },
  btn: {
    paddingTop: 30,
    paddingLeft: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between'
    // flex: 3,


  },
  btn1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 5,


  },
  txtname: {
    paddingTop: 10,

    color: '#ffffff',
    height: 45,
    width: 180,
    borderBottomWidth: 1,
    fontSize: 20,
    borderRadius: 70,

  },


});

export default mediumcustomize;
