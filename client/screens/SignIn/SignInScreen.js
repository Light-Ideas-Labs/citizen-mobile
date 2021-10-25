import React from 'react'
import '../../global'
import { web3, kit } from '../../root'
import { Image, StyleSheet, StatusBar, Text, TextInput, Button, View, LogBox } from 'react-native'
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { requestTxSig, waitForSignedTxs, requestAccountAddress, waitForAccountAuth, FeeCurrency } from '@celo/dappkit'
import { toTxResult } from "@celo/connect"
import * as Linking from 'expo-linking'
import { actions } from "../../global/Data"
import styles from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class SignInScreen extends React.Component {
    
    // Set the defaults for the state
    state = {
      address: 'Not logged in',
      phoneNumber: 'Not logged in',
      cUSDBalance: 'Not logged in',
      helloWorldContract: {},
      contractName: '',
      textInput: ''
    }

    login = async () => {
    
      // A string you can pass to DAppKit, that you can use to listen to the response for that request
      const requestId = 'login'
      
      // A string that will be displayed to the user, indicating the DApp requesting access/signature
      const dappName = 'Citizen Dapp'
      
      // The deeplink that the Celo Wallet will use to redirect the user back to the DApp with the appropriate payload.
      const callback = Linking.makeUrl('/my/path')
    
      // Ask the Celo Alfajores Wallet for user info
      requestAccountAddress({
        requestId,
        dappName,
        callback,
      })
    
      // Wait for the Celo Wallet response
      const dappkitResponse = await waitForAccountAuth(requestId)
  
      // Set the default account to the account returned from the wallet
      kit.defaultAccount = dappkitResponse.address
  
      // Get the stabel token contract
      const stableToken = await kit.contracts.getStableToken()
  
      // Get the user account balance (cUSD)
      const cUSDBalanceBig = await stableToken.balanceOf(kit.defaultAccount)
      
      // Convert from a big number to a string by rounding it to the appropriate number of decimal places
      const ERC20_DECIMALS = 18
      let cUSDBalanceDec = cUSDBalanceBig.shiftedBy(-ERC20_DECIMALS).toFixed(2)
      let cUSDBalance = cUSDBalanceDec.toString()

      // console.log(dappkitResponse.phoneNumber)
      
      // Update state
      this.setState({ cUSDBalance, isLoadingBalance: false, address: dappkitResponse.address, phoneNumber: dappkitResponse.phoneNumber })

      this.props.navigation.navigate('Organization', { phoneNumber: dappkitResponse.phoneNumber, address: dappkitResponse.address, balance: cUSDBalance  } )
    }

    onPressContinue = () => {
      // to continue to the input screen
      
      
    }

    onLogin = () => {
      this.login()
    }

    render(){
      return (
        <View style={styles.container}>
        <StatusBar animated={true} backgroundColor="#3A95FF" barStyle="light-content" />
        <View style={styles.header}>
        <Animatable.Image
            animation="bounceIn"
            duraton="3000"
            source={require("../../assets/logo/citizen.png")}
            style={styles.logo}
            resizeMode="stretch"/>

        </View>
        <View style={[styles.footer]}>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn}
            onPress={()=> this.onLogin()} >
            <LinearGradient colors={["#3A95FF", "#3A95FF"]} style={styles.signIn} >
              <Text style={[ styles.textSign, { color: "#fff" }, ]}>Connect with Wallet</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
         </View>  
        </View>
      );
    }
}













// import React, { Component, useState, useContext } from "react";
// import { TouchableOpacity, TextInput, StatusBar, Alert, FlatList, Text, View, Image, link  } from "react-native";
// import { requestTxSig, waitForSignedTxs, requestAccountAddress, waitForAccountAuth, FeeCurrency } from '@celo/dappkit'
// import { toTxResult } from "@celo/connect"
// import * as Linking from 'expo-linking'
// // export default class SignInScreen  extends React.Component

//  const SignInScreen = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//           <StatusBar backgroundColor="#3A95FF" barStyle="light-content" />
//           <View style={styles.header}>

//           </View>
//           <View style={[styles.footer]}>

//           <TouchableOpacity style={styles.signIn}
//                onPress={() => navigation.navigate('Organization')}>
//                 <Text style={[ styles.textSign, { color: "#3A95FF" }, ]}>
//                   Login
//                 </Text>
//             </TouchableOpacity>
//           </View>
//           </View>
//           )
//  }

//  export default SignInScreen