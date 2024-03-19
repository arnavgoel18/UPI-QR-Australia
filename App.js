import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './components/HomePage.js';
import AcceptPaymentPage from './components/AcceptPaymentPage';
import PayComplete from './components/PayComplete';
import PaymentSuccessfulPage from './components/PaymentSuccessfulPage.js'
import QRCodeScanner from './components/QRCodeScanner.js';
import QRCodeDisplayPage from './components/QRCodeDisplayPage.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style = {styles.container}> 
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomePage"> 
            <Stack.Screen name="AcceptPaymentPage" component={AcceptPaymentPage}/>
            <Stack.Screen name="HomePage" component={HomePage}/>
            <Stack.Screen name="QRCodeScanner" component={QRCodeScanner}/>
            <Stack.Screen name="PayComplete" component={PayComplete}/>
            <Stack.Screen name="PaymentSuccessfulPage" component={PaymentSuccessfulPage}/>
            <Stack.Screen name="QRCodeDisplayPage" component={QRCodeDisplayPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },
});
