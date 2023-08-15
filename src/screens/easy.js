import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

// useEffect(() => {
//   db.transaction((txn) => {
//     txn.executeSql(
//       "SELECT name FROM sqlite_master WHERE type='table' AND name='level'",
//       [],
//       (tx, res) => {
//         console.log('item:', res.rows.length);
//         if (res.rows.length == 0) {
//           txn.executeSql('DROP TABLE IF EXISTS level', []);
//           txn.executeSql(
//             'CREATE TABLE IF NOT EXISTS level(id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
//             []
//           );
//         }
//       }
//     );
//   });
// }, []);
const easy = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>4 PIC 1 WORD</Text>
      <Pressable
        onPress={() => navigation.navigate('Play')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <Text style={styles.signup}>EASY</Text>
      </Pressable>
      <Pressable
         onPress={() => navigation.navigate('Mediumplay')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <Text style={styles.signup}>Medium</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Hardplay')}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <Text style={styles.signup}>hard</Text>
      </Pressable>
      



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38424C',
    flex: 1
  },
  titlename: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold'
  },
  titlena: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    height: 45,
    width: 350,
    borderBottomWidth: 1,
    backgroundColor: '#7fff00',
    marginLeft: 20,
    borderRadius: 70,

  },
  txtname: {
    fontWeight: 'bold',
    color: '#ffffff',
    height: 45,
    width: 350,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    borderColor: '#ffffff',
    fontSize: 20,
    borderRadius: 70,
    marginTop: 150,
    marginLeft: 20
  },
  txtpassword: {
    fontWeight: 'bold',
    color: '#ffffff',
    height: 45,
    width: 350,
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 70,
    marginTop: 10,
    marginLeft: 20,
    borderColor: '#ffffff',
  },
  forgot: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 80,
    textAlign: 'center'
  },
  signup: {
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


  logintxt: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    height: 45,
    width: 350,
    borderBottomWidth: 1,
    backgroundColor: '#7fff00',
    marginLeft: 20,
    borderRadius: 70,
  },
});

export default easy;