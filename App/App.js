import * as React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// You can import from local files
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://avatars0.githubusercontent.com/u/69958827',
        }}></Image>
      <Text style={styles.paragraph}>
        Welcome, Happy to see you here. Meet CAD by HAESolve HEALTH
      </Text>
      <Card style={styles.cardcontainer}>
        <Text style={styles.cardtxtq}>MEET CAD, WAIT WHAT ON EARTH IS IT?</Text>
        <Text style={styles.cardtxt}>
          CAD is short form for Coronary Artery Disease. We all know the
          problems of cardiac arrest and Coronary artery. This model will help
          every person in this world predict the seriousness and level of CAD
          ranging from nothing(0) to extremely dangerous and critical (5). Have
          fun using. PUBLISHED AS HAESolve HEALTH SECTOR v1.1
        </Text>
      </Card>
      <Text style={styles.paragraph}> ___page break___ </Text>      

      <Card style={styles.cardcontainer}>
        <Text></Text>
        <Text style={styles.cardtxtq}>Meet the maserminds</Text>
        <Text style={styles.cardtxt}>Divyosmi Goswami, CEO, HAESolve</Text>
        <Text style={styles.cardtxtq} onPress = {() => Linking.openURL('https://divyosmi.medium.com')}>Blog come website(link)</Text>
        <Text style={styles.cardtxtq} onPress = {() => Linking.openURL('goswamidivyosmi@gmail.com')}>Mail(link)</Text>
        <Text style={styles.cardtxt}>
          Design proposed by Srimayee Das,Inpdependent Blogger and Designer
        </Text>
        <Text style={styles.cardtxtq} onPress = {() => Linking.openURL('https://srimayeedas.medium.com')}>Blog come website(link)</Text>
        <Text style={styles.cardtxtq} onPress = {() => Linking.openURL('srimayeedas.kng@gmail.com')}>Email(link)</Text>
      </Card>
      <Text style={styles.paragraph}> ___page break___ </Text>
      <Card style={styles.cardcontainer}>
      <Text style={styles.cardtxtq}>
      How much do you need to pay? Who can use this product?
      </Text>
      <Text style={styles.cardtxt}>
      We dont really care about it we are just passionate problem solvers we love problems because they are reason to solutions, We love OpenSource, and when it is free we are the ones to sit in the first bench. We are FOS literaly totally free and open source and amateur. You need to pay us 0.00 bucks *giggling and smirking*. We respect all races,religions and people irrespectived of their caste,tribe, or skin color. We only care for ones abilities and skills. We love all people.
      </Text>
      <Text style={styles.cardtxtq}>How to use the product the all rounder way?</Text>
            <Text style={styles.cardtxt}>First download python then set it up quickly and then install Tensorflow library and ...
            go to the project source code page 
            <Text style={styles.cardtxtq} onPress = {() => Linking.openURL('https://github.com/HAESolve/Coronary-artery-disease-CAD-')}>product source code page(link)</Text> then download model.h5 then download a file and save it in your device and ...  
            <Text style={styles.cardtxtq} onPress = {() => Linking.openURL('https://gist.github.com/Divyosmi/55f7dfd8c6353a028a435ec55b76b316')}>download file(link)</Text>
            run the file and input the values, if you face any problem with the product mail Divyosmi Goswami a copy of the report and he will send you the code file with proper formatting for better use dont worry we have a fast team of people working to deliver the service to you. after running you please check the range of CAD. Facing problems installing tensorflow dont worry we have your back we have a poetry.lock file and a pyproject.toml file which you need to install from the product source code location given earlier and then now you have numpy,scipy,pandas,tensorflow,sklearn,matplotlib and many more like extra joblib installed, so dont worry anything you have anything you have got we are here to help every body. but now the question if you have installed .pb you can  ut it is very complex and requires programming skills so please download .h5 and follow the steps or then you can install .pb file but please use the web as we dont have any code file for it. Have a great time using our product. NOTE: all the files should be in the same directory.
            </Text> 
      </Card>
      <Text style={styles.paragraph}>Thank you for using the app, a lot of effort has been put forward towards the development of the app and the product which is a FOS product your support and feedback is very necessary please redirect to the below mail id, and put your review we will try to help you and fix the issue or problem to upgrade the features for you people and will keep bringing up new apps like this one</Text>
        <Text style={styles.cardtxtq} onPress = {() => Linking.openURL('goswamidivyosmi@gmail.com')}>EMail id</Text>
        <Text style={styles.cardtxtq} onPress = {() => Linking.openURL('https://twitter.com/DivyosmiGoswami')}>twitter id</Text>
        <Text style={styles.cardtxtq} onPress = {() => Linking.openURL('https://github.com/HAESolve/Code-of-conduct-and-Introduction')}>Privacy Policy and Terms and conditions</Text>
        <Text style={{color:"cyan",textAlign:"center"}}>---footer---</Text>
        <Text style={styles.cardtxtq}> HAESolve HEALTH SECTOR v1.1 since 20 FEB 2021.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: 'white',
    fontWeight: 'simple',
    textAlign: 'center',
  },
  cardtxtq: {
    margin: 24,
    fontSize: 18,
    color: 'orange',
    fontWeight: 'BOLD',
    textAlign: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  face: {
    width: 150,
    height: 150,
  },
  cardtxt: {
    margin: 24,
    fontSize: 18,
    color: 'skyblue',
    fontWeight: 'ITALIC',
    textAlign: 'center',
  },
  cardcontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
});
