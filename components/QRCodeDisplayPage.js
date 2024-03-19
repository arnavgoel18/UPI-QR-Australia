import React, { useRef , useState} from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from 'react-native-view-shot';


const QRCodeDisplayPage = ({ navigation, route }) => {
  // const {data} = route.params;
  const {textInputValue} = route.params;
  const qrcodeRef = useRef(null)
  const viewShotRef = useRef(null)

  const qrCodeValue = textInputValue;

  return (
    <View style={styles.container}>
      <ViewShot
        ref={viewShotRef}
        options={{format: 'png', quality: 1.0}}
        style={styles.QRCodeContainer}
      >
        <QRCode
          ref={qrcodeRef}
          value={qrCodeValue}
          size={200}
          color='black'
          backgroundColor='#fff'
        />
      </ViewShot>
      <View style={styles.textViewContainers}>
        <Text style={styles.textInfoContainers}> Paying To: <Text style={styles.insideTextInfoBox}>0491 570 110</Text></Text>
        <Text style={styles.textInfoContainers}> Amount: <Text style={styles.insideTextInfoBox}>${textInputValue}</Text></Text>
      </View>
      <View style={styles.processButton}>
        <TouchableOpacity style={{padding: 10}} onPress={() => navigation.navigate('PaymentSuccessfulPage')}><Text style={{color: '#fff', fontWeight: 'bold'}}>Payment Complete</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingVertical: 10,
  },
  QRCodeContainer: {
    height: '40%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  textViewContainers: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2, 
    borderColor: '#fff',
    height: '20%',
  },
  textInfoContainers: {
    color: '#000',
    fontSize: 23,
    borderWidth: 2, 
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#999',
    padding: 10,
    margin: 10,
  },
  insideTextInfoBox: {
    borderWidth: 2,
    borderColor: '#000',
    margin: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  processButton: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'green',
    maxHeight: 50,
    marginBottom: 100,

  }
});

export default QRCodeDisplayPage;

// {/* <Text>Name of Payee: {data.name}</Text>
//       <Text>Amount Payable: AU${data.amountPayable}</Text> */}
