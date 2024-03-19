import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


const data = [
  {id: 1, name: 'Paul P.', amount: '+$34.23'},
  {id: 2, name: 'Arnav Goel', amount: '-$14.13'},
  {id: 3, name: 'Ray Smitch', amount: '+$56.99'},
  {id: 4, name: 'Andrew Mitchel', amount: '-$42.21'},
  {id: 5, name: 'Joel Sam', amount: '+$1.02'},
  {id: 6, name: 'Rahul Sharma', amount: '+$31.56'},
  {id: 7, name: 'Andy Shane', amount: '-$94.00'},
  {id: 8, name: 'Gill', amount: '+$87.77'},
  {id: 9, name: 'Gary Tucker', amount: '+$45.92'},
  {id: 10, name: 'Stevens C.', amount: '+$102.81'},
];

export default function HomePage({navigation}) {
  const [text, onChangeText] = React.useState('Amount Payable');
  
  const renderRow = (item) => {
    return (
      <View key = {item.id} style={payHistoryStyles.rows}>
        <View style={payHistoryStyles.midContainer}>
          <View style={payHistoryStyles.circle}>
            <Text style={payHistoryStyles.circleLetter}>{item.name.substring(0,1)}</Text>
          </View>
          <Text style={{fontWeight: '500', marginLeft: '5vh', color: '#fff', fontSize: 18}}>{item.name}</Text>
        </View>
        <Text style={{color: '#fff'}}>{item.amount}</Text>
      </View> 
    )
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.dashHeading}> Dashboard </Text>
        <View style = {styles.amountDispContainer}>
          <Text style = {styles.amountDis}>$3762.48</Text>
        </View>

        <View style={styles.row}>
            <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('AcceptPaymentPage')}>
                <Image source = {require('../assets/AcceptPaymentPageIcon.png')} style = {styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('QRCodeScanner', "100")}>
                <Image source = {require('../assets/PayerPageIcon.png')} style = {styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('PayComplete', {data: 'ERROR!'})}>
                <Image source = {require('../assets/MoreOptions.png')} style = {styles.image}/>
            </TouchableOpacity>
        </View>

        <View style={payHistoryStyles.payHistoryContainer}>
          <View style={payHistoryStyles.header}>
            <TouchableOpacity style={{borderColor: '#fff', borderBottomWidth: 2, paddingTop: 5}}>
              <Text style={payHistoryStyles.historyText}> Today </Text>
            </TouchableOpacity>
            <TouchableOpacity style={payHistoryStyles.historyButton}>
              <Text style={payHistoryStyles.historyText}> Scheduled </Text>
            </TouchableOpacity>
            <TouchableOpacity style={payHistoryStyles.historyButton}>
              <Text style={payHistoryStyles.historyText}> Bill Payments </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{flex: 1, paddingHorizontal: '2vh'}}>
            {data.map((item) => renderRow(item))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center', 
    color: '#fff',
    // borderWidth: 2,
    // borderColor: 'green',
  },
  dashHeading: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Times New Roman',
    marginTop: 50,
    color: 'red',
  },
  amountDispContainer:{
    marginTop: 40,
    marginBottom: 50,

  },
  amountDis:{
    textAlign: 'center',
    margin: 'auto',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 23,
  },  
  button: {
    height: 30, 
    backgroundColor: '#3F3F3F', 
    padding: 20, 
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    width: '27%',
  },
  image: {
    width: 30,
    height: 30, 
    borderRadius: 25,
  }
});

const payHistoryStyles = StyleSheet.create({
  payHistoryContainer: {
    flex: 1, 
    paddingLeft: 20, 
    borderWidth: 0,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'left',
    marginBottom: 20,
    color: '#fff',
  },
  historyButton: {
    borderColor: '#aaa',
    borderBottomWidth: 2, 
    paddingTop: 5, 
    marginHorizontal: 15,
    marginLeft: '2vh',
  },
  historyText: {
    color: '#000',
    fontSize: 16,
    color: '#fff',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    marginBottom: 10,
    height: 40,
  },
  midContainer: {
    flexDirection: 'row', 
    justifyContent: 'left', 
    alignItems: 'center', 
    paddingHorizontal: 5, 
    width: '70%'
  },
  circle: {
    width: 30, 
    height: 30, 
    borderRadius: 25, 
    backgroundColor: 'grey',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleLetter: {
    color: '#fff',
    fontSize: 18,
  },
});
