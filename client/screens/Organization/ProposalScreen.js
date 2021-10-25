import React,{ Component, useState} from 'react'
import { web3, kit } from '../../root'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Button, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native'
import { requestTxSig, waitForSignedTxs, requestAccountAddress, waitForAccountAuth, FeeCurrency } from '@celo/dappkit'
import { LinearGradient } from "expo-linear-gradient"
import * as Linking from 'expo-linking'
import { Icon } from 'react-native-elements'
import CitizenContract from '../../contracts/citizen.json'
import styles from "./styles"


export default class ProposalScreen extends React.Component {

    state = {
        address: '',
        organizationId: '',
        organizationTitle: '',
        organizationAddress: '0x464f97b8c1acff617da6c0dbe3b752235254c0b2',
        contractName: '',
        citizenContract: {},
    }

      // This function is called when the page successfully renders
  componentDidMount = async () => {
    
    // Check the Celo network ID
    const networkId = await web3.eth.net.getId();

    // console.log("my network", networkId)
    
    // Get the deployed HelloWorld contract info for the appropriate network ID
    const deployedNetwork = CitizenContract.networks[networkId];

    // console.log("my network", citizenContract)

    // Create a new contract instance with the HelloWorld contract info
    const instance = new web3.eth.Contract( CitizenContract.abi, deployedNetwork && deployedNetwork.address );

    // Save the contract instance
    this.setState({ citizenContract: instance })
  }

  onChangeText = async (text) => {
      this.setState({ organizationTitle: text})
    //   this.setState({ organizationAddress: text})
  }
  onChangeNumber = async (number) => {
      this.setState({ organizationId: number })
  }

//   function to read
write = async () => {
    const requestId = 'create_task'
    const dappName = 'Citizen Dapp'
    const callBack = Linking.makeUrl('/my/path')

    console.log('my inputs', this.state.organizationAddress, this.state.organizationTitle, this.state.organizationId)

    const txObject = await this.state.citizenContract.methods.registerOrganization( this.state.organizationAddress,  this.state.organizationId, this.state.organizationTitle,)

    // console.log(txObject)

        // Send a request to the Celo wallet to send an update transaction to the HelloWorld contract
        requestTxSig(
            kit,
            [
              {
                from: this.state.address,
                to: this.state.citizenContract.options.address,
                tx: txObject,
                feeCurrency: FeeCurrency.cUSD
              }
            ],
            { requestId, dappName, callBack }
          )
    
    // Get the response from the Celo wallet
    const dappkitResponse = await waitForSignedTxs(requestId)
    console.log(dappkitResponse)
    const tx = dappkitResponse.rawTxs[0]
        
    // Get the transaction result, once it has been included in the Celo blockchain
    let result = await toTxResult(kit.web3.eth.sendSignedTransaction(tx)).waitReceipt()
    
    console.log(`organization created transaction receipt:`, result) 
   
}

    render(){
    return(
        <View style = {styles.container}>
            
            <View style={styles.footer}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}>
            <Text>Project title</Text>
            <TextInput style={{ height: 40, borderBottomColor: '#FFB500', borderBottomWidth: 1, marginBottom: 20, }}
                onChangeText={text => this.onChangeText(text)}
                value={this.state.organizationTitle}
                placeholder="UGC/RDS/RM/026/2020-2021" />

            <Text>Description (Define the problem)</Text>
            <TextInput style={{ height: 40, borderBottomColor: '#FFB500', borderBottomWidth: 1,  marginBottom: 20 }} 
                autoComplete
                multiline
                placeholder="Hunger strike in the northern part of the country the worst counties being Turkana and Wajir."
                // onChange={text => this.onChangeText(text)}
                value={this.state.organizationAddress}
                underlineColorAndroid="transparent" />
            
            <Text>Proposed solution</Text>
            <TextInput
                style={{  height: 40, borderBottomColor: '#FFB500', borderBottomWidth: 1, marginBottom: 20 }} 
                multiline
                placeholder="Provide dry foods to the less privileged every week"
                onChangeText={number => this.onChangeNumber(number)}
                value={this.state.organizationId}
                underlineColorAndroid="transparent"
            />
            
            <Text>Strategy / plan</Text>
            <TextInput
                style={{ 
                    height: 40,
                    borderBottomColor: '#FFB500', 
                    borderBottomWidth: 1,  
                    marginBottom: 20 }}
                multiline
                numberOfLines={4}
                placeholder="Consolidate teams of 6 people that will equally distribute the food in the interior parts of the villages"
                underlineColorAndroid="transparent"
            />
            
            <Text>Timline</Text>
            <TextInput
                style={{ 
                    height: 40,
                    borderBottomColor: '#FFB500', 
                    borderBottomWidth: 1,  
                    marginBottom: 20 }}
                placeholder="6 months"
                underlineColorAndroid="transparent"
            />

            <Text>Budget</Text>
            <TextInput
                style={{ 
                    height: 40,
                    borderBottomColor: '#FFB500', 
                    borderBottomWidth: 1,  
                    marginBottom: 20 }}
                placeholder="Ksh. 500,000"
                underlineColorAndroid="transparent"
            />
            <Text>Category</Text>
            <TextInput
                style={{ 
                    height: 40,
                    borderBottomColor: '#FFB500', 
                    borderBottomWidth: 1,  
                    marginBottom: 20 }}
                placeholder="Food"
                underlineColorAndroid="transparent"
            />
            <View style={styles.button}>
                <TouchableOpacity style={styles.signIn}   onPress={()=> this.write()} >
                    <LinearGradient colors={["#3A95FF", "#3A95FF"]} style={styles.signIn}>
                        <Text style={[ styles.textSign, { color: "#fff" }, ]}>
                            Submit
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
            </View>
        </View>
    )
}
}
