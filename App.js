import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/screens/Menu';
import Play from './src/screens/Play';
import Customize from './src/screens/Customize';
import Levelscreen from './src/screens/Levelscreen';
import Leveltoplay from './src/screens/Leveltoplay';
import Updatescreen from './src/screens/Updatescreen';
import easy from './src/screens/easy';
import Easycustomize from './src/screens/easycustomize';
import Hardcustomize from './src/screens/hardcustomize';
import Hardplay from './src/screens/Hardplay';
import Mediumplay from './src/screens/Mediumplay';
import mediumcustomize from './src/screens/mediumcustomize';
import mediumlevel from './src/screens/mediumlevel';
import hardlevel from './src/screens/hardlevel';
import multilevel from './src/screens/multilevel';
const Homestack = createNativeStackNavigator();
//  const Homestack = createStackNavigator(); 
function Homestackscreen() {
  return ( 
    <Homestack.Navigator>


      <Homestack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Homestack.Screen name="Play" component={Play} />
      <Homestack.Screen name="Customize" component={Customize} options={{ headerShown: false }} />
      <Homestack.Screen name="Level" component={Levelscreen} />
      <Homestack.Screen name="Leveltoplay" component={Leveltoplay} />
      <Homestack.Screen name="Updatescreen" component={Updatescreen} />
      <Homestack.Screen name="easy" component={easy} />
      <Homestack.Screen name="easycustomize" component={Easycustomize} />
      <Homestack.Screen name="hardcustomize" component={Hardcustomize} />
      <Homestack.Screen name="Hardplay" component={Hardplay} />
      <Homestack.Screen name="Mediumplay" component={Mediumplay} />
      <Homestack.Screen name="mediumcustomize" component={mediumcustomize} />
      <Homestack.Screen name="mediumlevel" component={mediumlevel} />
      <Homestack.Screen name="hardlevel" component={hardlevel} />
      <Homestack.Screen name="multilevel" component={multilevel} />













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