// import React, { useEffect, useState } from 'react';
// import { View, FlatList, Text, TouchableOpacity,Image} from 'react-native';
// import SQLite from 'react-native-sqlite-storage';
// let db = SQLite.openDatabase({ name: 'FourPicOneWordgame.db' });

// const Levelscreen = ({ navigation }) => {
//     const [levels, setLevels] = useState([]);
  
//     useEffect(() => {
//       fetchLevels();
//     }, []);
  
//     const fetchLevels = () => {
//       db.transaction((tx) => {
//         tx.executeSql(
//           'SELECT * FROM Levels',
//           [],
//           (tx, result) => {
//             const data = [];
//             for (let i = 0; i < result.rows.length; i++) {
//               const level = result.rows.item(i);
//               data.push(level);
//             }
//             setLevels(data);
//           },
//           (error) => console.log('Error fetching levels:', error)
//         );
//       });
//     };
  
//     const handleLevelPress = (level) => {
//       navigation.navigate('Leveltoplay', { level });
//     };
//     const storelevel = (item) => {
//       global.storedata = item.id;
//     };
  
//     const renderLevelItem = ({ item }) => {
//       return (
//         <TouchableOpacity onPress={() => handleLevelPress(item)}>
//           <View>
           
//             <Image source={{ uri: `data:image/png;base64,${item.image1}` }} style={{ width: 100, height: 100 }} />
//             <Text >Level {item.id}</Text>

//           </View>
//         </TouchableOpacity>
//       );
//     };
  
//     return (
//       <View>
//         <FlatList
//           data={levels}
//           renderItem={renderLevelItem}
//           keyExtractor={(item) => item.id.toString()}
//         /> 
//       </View>
//     );
//   };
  

//   export default Levelscreen;
  // Levelscreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
let db = SQLite.openDatabase({ name: 'FourPicOneWordgame.db' });

const Levelscreen = ({ navigation }) => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    fetchLevels();
  }, []);

  const fetchLevels = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Levels',
        [],
        (tx, result) => {
          const data = [];
          for (let i = 0; i < result.rows.length; i++) {
            const level = result.rows.item(i);
            data.push(level);
          }
          setLevels(data);
        },
        (error) => console.log('Error fetching levels:', error)
      );
    });
  };

  const handleLevelPress = (level) => {
    navigation.navigate('Leveltoplay', { levelId: level.id });
  };

  const renderLevelItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleLevelPress(item)}>
        <View>
          <Image source={{ uri: `data:image/png;base64,${item.image1}` }} style={{ width: 100, height: 100 }} />
          <Text>Level {item.id}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={levels}
        renderItem={renderLevelItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Levelscreen;
