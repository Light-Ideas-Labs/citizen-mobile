import React, { Component, useState, useEffect } from 'react'
import { web3, kit } from '../../root'
import { StyleSheet,Text, TextInput,TouchableOpacity, KeyboardAvoidingView, Image, View, StatusBar } from 'react-native'
import { requestTxSig, waitForSignedTxs, requestAccountAddress, waitForAccountAuth, FeeCurrency } from '@celo/dappkit'
import { FloatingAction } from 'react-native-floating-action'
import { LinearGradient } from "expo-linear-gradient"
import * as Linking from 'expo-linking'
import { Icon } from 'react-native-elements'
import CitizenContract from '../../contracts/citizen.json'
import { Avatar, Card, Title, Caption  } from "react-native-paper"
import { actions } from "../../global/Data"


const OrganizationScreen = ({ route, navigation }) => {

  

  const [citizenContract, setCitizenContract] = useState({})
  const [organizationId, setOrganizationId] = useState(0)
  const [organizationTitle, setOrganizationTitle] = useState('')
  const [organizationAddress, setOrganizationAddress] = useState('')

  // const [data, setData] = useState ({
  //   address: '',
  //   contractName: '',
  //   citizenContract: {},
  // })

  // similar to componentDidMount and componentDidUpdate: 
  useEffect(() => {
    (async () => {
      // Check the Celo network ID
      const networkId = await web3.eth.net.getId();
      // console.log("my network", networkId)
      // Get the deployed HelloWorld contract info for the appropriate network ID
      const deployedNetwork = CitizenContract.networks[networkId];
      // console.log("my contract", deployedNetwork)
      // Create a new contract instance with the HelloWorld contract info
      const instance = new web3.eth.Contract( CitizenContract.abi, deployedNetwork && deployedNetwork.address );

      // console.log("contract instance",instance)
      // Save the contract instance
      setCitizenContract(instance)
    })()
  }, [])

  console.log("====>",citizenContract)


  // ( "0x464F97b8C1AcFf617Da6C0DBe3B752235254C0B2", 3, "organizationTitle")


// console.log("state info", citizenContract)

// const onChangeText = async (text) => {
//   setData({ organizationTitle: text})
// }

// const onChangeAddress = async (val) => {
//   setData({ organizationAddress: val })
// }

// const onChangeNumber = async (number) => {
//     setData({ organizationId: number })
// }


const write = async () => {
  const requestId = 'create_task'
  const dappName = 'Citizen Dapp'
  const callBack = Linking.makeUrl('/my/path')

  console.log('my inputs', organizationAddress )

  const txObject = await this.citizenContract.methods.registerOrganization( organizationAddress, organizationId, organizationTitle)

  console.log("=<==>", txObject)

      // Send a request to the Celo wallet to send an update transaction to the HelloWorld contract
      requestTxSig(
          kit,
          [
            {
              from: route.params.address,
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



        return (
            <View style={styles.container}>
                <StatusBar animated={true} backgroundColor="#3A95FF" barStyle="light-content" />

                <View styles={styles.orgInfoSection}>                  
                <View style={styles.container1}>
                <Avatar.Image source={require("../../assets/profile/PhotoProfile.png")}
                  size={60} />
                  <View style={styles.container2}>

                  <Title style={styles.headerText}>{route.params.phoneNumber}</Title>
                  <Caption style={styles.captionAddress}>{route.params.address}</Caption>
                  <Text style={styles.headerText}>{route.params.balance}</Text>
                  </View>
                  </View>

                  <View style={styles.footer}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}>
            <Text>Organization Title</Text>
            <TextInput style={{ height: 40, borderBottomColor: '#FFB500', borderBottomWidth: 1, marginBottom: 20, }}
                onChangeText={(text) => setOrganizationTitle(text)}
                value={organizationTitle || null}
                placeholder="UGC/RDS/RM/026/2020-2021" />

            <Text>Organization Address</Text>
            <TextInput style={{ height: 40, borderBottomColor: '#FFB500', borderBottomWidth: 1,  marginBottom: 20 }} 
                autoComplete
                multiline
                placeholder="Hunger strike in the northern part of the country the worst counties being Turkana and Wajir."
                onChange={(text) => setOrganizationAddress(text)}
                value={organizationAddress || null}
                underlineColorAndroid="transparent" />
                
            <Text>Organization Id</Text>
            <TextInput style={{ height: 40, borderBottomColor: '#FFB500', borderBottomWidth: 1,  marginBottom: 20 }} 
                autoComplete
                multiline
                placeholder="Hunger strike in the northern part of the country the worst counties being Turkana and Wajir."
                onChange={(number) => setOrganizationId(number)}
                value={organizationId || null}
                underlineColorAndroid="transparent" />

            <View style={styles.button}>
                <TouchableOpacity style={styles.signIn}   onPress={()=> write()} >
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

          

                <FloatingAction
                 actions={actions}
                 color={"#3A95FF"}
                 onPressItem={(name) => {
                   if (name == "bt_proposal" ) {
                     navigation.navigate("Create Proposal", {address: route.params.address,});
                    }
                  }} />

            </View>
        )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F8",
    },
    orgInfoSection: {
      paddingLeft: 30,
      marginBottom: 30,
    },
    container1: {
      // justifyContent: "space-between",
      marginLeft: 25,
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      // height: 200,
    },
    container2: {
      // alignSelf: "stretch",
      // justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      marginLeft: 15
    },
    headerText: {
      // marginVertical: 8, 
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    captionAddress: {
      fontSize: 14,
      lineHeight: 14,
    },
  
  });

  export default OrganizationScreen
