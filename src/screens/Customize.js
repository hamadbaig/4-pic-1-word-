import React, { useState } from 'react';
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
import ImagePicker from 'react-native-image-picker';

const img = {
  uri:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
};

const Customize = ({ navigation }) => {
  const [Answer, setAnswer] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    if (ImagePicker) {
      ImagePicker.launchImageLibrary({}, (response) => {
        if (response.uri) {
          setSelectedImage(response.uri);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>ADD LEVELS</Text>
      <View style={styles.container1}>
        <Pressable onPress={handleImagePicker}>
          <Image
            key="image1"
            style={styles.stretch}
            source={selectedImage ? { uri: selectedImage } : img}
          />
        </Pressable>
        <Pressable onPress={handleImagePicker}>
          <Image
            key="image2"
            style={styles.stretch}
            source={selectedImage ? { uri: selectedImage } : img}
          />
        </Pressable>
      </View>
        <View style={styles.container2}>
        <Pressable onPress={handleImagePicker}>
          <Image
            key="image3"
            style={styles.stretch}
            source={selectedImage ? { uri: selectedImage } : img}
          />
        </Pressable>
        <Pressable onPress={handleImagePicker}>
          <Image
            key="image4"
            style={styles.stretch}
            source={selectedImage ? { uri: selectedImage } : img}
          />
        </Pressable>
        </View>
        <View style={styles.btn}>
        <TextInput style={styles.txtname}
        value={Answer}
        placeholder={' Enter answer'}
        onChangeText={(value) => setAnswer(value)}
      />
        </View>
        <View style={styles.btn1}>
        <Button
        title="save"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="cancel"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      
        </View>
       
         <Pressable
            onPress={() => navigation.navigate('Menu')}
           style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
           <Text style={styles.signup}>Back</Text>
         </Pressable> 

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
  name: {
    fontFamily: 'Verdana',
    fontSize: 26,
    fontWeight:'bold',
    backgroundColor: "gray",
    flexDirection:'row',
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
     borderRadius: 70,


  },
  container2: {
    // paddingTop:50,
    paddingLeft:20,
    backgroundColor: '#2f4f4f',
    flex:5,
    flexDirection:'row',
     justifyContent: 'space-between',
     marginRight:10

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
  btn:{
    paddingLeft:120,
    flexDirection: 'row',
    // justifyContent: 'space-between'
    flex:6,

    
  },
  btn1:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    flex:1,

    
  },
  txtname: {
    height: 45,
    width: 250,
    borderBottomWidth: 1,
    fontSize: 20,
    borderRadius: 70,
    
  },

 
});

export default Customize;