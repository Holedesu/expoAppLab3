// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutMeScreen from './screens/AboutMeScreen';
import ProgrammingLanguagesScreen from './screens/ProgrammingLanguagesScreen';
import NotFoundScreen from "./screens/NotFoundScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="О Себе" component={AboutMeScreen} />
          <Tab.Screen name="Мои языки" component={ProgrammingLanguagesScreen} />
          <Tab.Screen name="Не найдено" component={NotFoundScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
