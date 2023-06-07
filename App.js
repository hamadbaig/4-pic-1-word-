import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from './src/screens/Menu';
import Play from './src/screens/Play';
import Customize from './src/screens/Customize';
 import Levelscreen from './src/screens/Levelscreen';
import Leveltoplay from './src/screens/Leveltoplay';
import Updatescreen from './src/screens/Updatescreen'
 
const Homestack = createNativeStackNavigator();
//  const Homestack = createStackNavigator(); 
function Homestackscreen() {
  return (
    <Homestack.Navigator>
          

      <Homestack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Homestack.Screen name="Play" component={Play}  />
      <Homestack.Screen name="Customize" component={Customize} options={{ headerShown: false  }} />
      <Homestack.Screen name="Level" component={Levelscreen}  />
      <Homestack.Screen name="Leveltoplay" component={Leveltoplay}  />
      <Homestack.Screen name="Updatescreen" component={Updatescreen}  />





    </Homestack.Navigator>
  );
}





const App = () => {
  return (
    <NavigationContainer>

      <Homestack.Navigator>
        <Homestack.Screen name="a1" component={Homestackscreen} options={{ headerShown: false }} />
          





      </Homestack.Navigator>
    </NavigationContainer>
  );
};
export default App;