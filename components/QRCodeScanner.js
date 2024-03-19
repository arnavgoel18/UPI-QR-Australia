import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default function QRCodeScanner({navigation, route}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('')
    const [counter, setCounter] = useState(1)

    const askForCameraPermission = () => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })()
      };

    //Requesting Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
        <View style={styles.container}>
            <Text>Requesting for camera permission</Text>
        </View>)
    }
    if (hasPermission === false) {
        return (
        <View style={styles.container}>
            <Text style={{ margin: 10 }}>No access to camera</Text>
            <Button title={'Allow Camera'} onPress={() => askForCameraPermission()}/>
        </View>)
    }

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
        console.log('Type: ' + type + '\nData: ' + data)
        handleButtonClick();
    };

    const handleButtonClick = () => {
        // window.alert(text);
        if(counter == 1){
            setCounter(2);
            setScanned(false);
        }
        else{
            navigation.navigate('PayComplete', {
                data:  text
            })
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.barcodebox}>
                <BarCodeScanner
                onBarCodeScanned={scanned ?  undefined : handleBarCodeScanned}
                style={{ height: 400, width: 400 }} />
            </View>
            {/* <Text style={styles.maintext}> Paying To: {text}</Text>
            <Text>Amount: {textInputValue}</Text> */}

            {scanned && <TouchableOpacity onPress={() => setScanned(null)} style={styles.buttonContainer}><Text style={styles.ScanButton}>Scan Again</Text></TouchableOpacity>}
            {/* <Button title="Proceed" onPress={() => handleButtonClick()}/> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    maintext: {
        fontSize: 16,
        margin: 20,
      },
      barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
      },
      ScanButton: {
        marginTop: 60,
        color: '#000',
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 5,
        borderRadius: 10,
        fontSize: 20,
        fontFamily: 'Times New Roman'
      }
});