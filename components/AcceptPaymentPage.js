import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


export default function AcceptPaymentPage({navigation}) {
  const [textInputValue, setTextInputValue] = useState('');

  const handleInputChange = (text) => {
    setTextInputValue(text);
  };

  return (
    <>
      <View style={styles.payerPagecontainer}>
        <View style={styles.topLayer}>
          <Text style={{color: '#fff', fontSize: 23, }}>Enter Amount: </Text>
          <TextInput
            style={styles.input}
            placeholder="$"
            placeholderTextColor={'#aaa'}
            onChangeText={handleInputChange}
            value={textInputValue}
          /> 
        </View>
        <View style={styles.bottomLayer}>
          <TouchableOpacity style={styles.bottomCircle} onPress={() => navigation.navigate('QRCodeDisplayPage', {textInputValue})}>
            <Image source = {require('../assets/snack-icon.png')} style = {styles.image}/>
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 17, textAlign: 'center'}}>Proceed{"\n"}To Payment</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  payerPagecontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  topLayer: {
    backgroundColor: '#000',
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '40%',
    paddingTop: 100,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    color: 'white',
    textAlign: 'center',
    width: '50%',
    fontSize: 35,
  },
  bottomLayer: {
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  bottomCircle: {
    height: 60,
    width: 60,
    borderWidth: 2, 
    borderRadius: '50%',
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 40,
    height: 40, 
    borderRadius: 25,
  }
});