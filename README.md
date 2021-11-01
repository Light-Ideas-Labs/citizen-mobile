# Citizen Dapp

Citizen is a Decentralized Application built on top of the Celo Blockchain to track donation /procurement funds as well as NGOs/government projects.

## App download

Check out the latest [Expo build here]() (requires the Expo Go app).

**Note: This app uses testnet cUSD exclusively, and requires a [Celo test wallet](https://celo.org/developers/wallet) in order to work**

## Background info

Celo is a mobile-first blockchain. It is a fork of Ethereum and is built to be a global payments infrastructure targeting the developing world. Celo has two native cryptocurrencies, cUSD (a currency that's pegged to the Dollar, 1 cUSD = 1 USD) and Celo gold (a volatile currency used for Celo governance and utility). Coperacha uses cUSD exclusively to transact.

## The Team

1. Jordan Muthemba

An Experienced Software Engineer with a demonstrated history of working in the computer and network security industry. Skilled in Python, Java Script, React Native, Solidity, and Public Speaking. Strong engineering professional graduated from Moi University.

Currlently a Developer Evangelist teaching and training both web2 and web3 developers about Celo Blockchain.

2. Rachael Chege

Currently a UI/UX designer at Ubrica, Rachael Chege graduated from JKUAT with a Bachelor's degree in Information Technology(IT).

Drawn to the problem solving and creative aspects of UX design, Rachael is passionate about creating human-centric solutions to solve users’ problems and revealing new opportunities for them.

She creates customer-focused designs that result in positive user experiences, empathizing with people to comprehend their needs fully.

3. Damaris Waithera

4. Ambrose O. Aiwerioghene  

I'm currently a Freelance ICT Consultant with over 10 years working experience with vast years in Telecommunication industry as a Charging System Engineer Customer Technical Manager.

Ambrose specializes in Charging/Pre-Paid Systems Operations/Support, Data Analytics Skill with Business Intelligence and aspiring Blockchain/Smart Contract Developer. I enjoy using my skills to contribute to the exciting technological advances where I work. In my free time, I like to spend it with my family, playing games and contributing to my immediate environment.

## Theme we are addressing

Transparency in public procurement and the administration of public finances.

## The Problem

Worldwide, governments devote an estimated $9.5 trillion each year to public procurement – an average of approximately 15% of national GDP. This money goes to public goods and services such as the construction of roads and the delivery of healthcare services, but also tends to line the pockets of corrupt government officials, corporate executives and others who are involved in the procurement process. The problem is almost universal.

Both the UN and the Organization for Economic Co-operation and Development (OECD) estimate that 10-30% of a public contract’s overall value is commonly lost to corruption. These numbers have led the World Bank to conclude that “curtailing procurement corruption may represent one of the most effective economic development programs that a country can adopt.”
While the extent of procurement corruption varies from country to country, the causes are common: inadequate record keeping, low public accountability, repeat and close interactions between the private sector and government officials and centrally controlled processes. These combined factors create an opaque, complex and high-value process vulnerable to corruption.

## The Solution

The use of a Blockchain-Based Public Procurement System is the most comprehensive solution for public procurement and for public-sector corruption in general.
It will enable permanent and tamper-evident record keeping, real-time transparency and auditability, and automated “smart contracts.” This will increase uniformity, objectivity and transparency.

For instance, during the COVID-19 pandemic, many governments began emergency direct contracting to procure necessary health services and supplies. These contracts were and still are particularly at high risk as they are awarded very quickly in the absence of competitive auction. The next-generation electronic procurement systems, including those developed with blockchain, can record direct-contract activity in a permanent, secure and automated manner to potentially reduce corruption risk going forward.

## Why we made Citizen Dapp and it's potential for impact in Kenya and the African continent

Money heist became the trending hashtag after funds donated by world bank and other organizations to fight Covid-19 were misused. This angered many Kenyans.

The project was accelerated by the first UNODC Hackathon where Celo was part of the main sponsors and we won on the best implementation category. This inspirated us to work this project.

We envision that our platform will promote participatory democracy in Africa where citizens can participate in important projects through verification of work done by organizations and earn incentives. We also believe in Celo’s mission; prosperity for all and funds should not be for the elite only. Our project aligns with the SDG Goal 16 – Peace, Justice, Strong Institution.

With the decentralized ledgers it will be more difficult to extract records of bids and public comments, or to alter bid or tender offers once submitted. This will decentralize decision-making, oversight and record-keeping, enhance transparency and devolve power away from authorities who might be prone to corruption.

It will enable vendors and tenderers to conduct the vendor bidding and evaluation processes, while also allowing third parties such as journalists and citizens to monitor and flag risky activity in real time. The software includes several automated features such as minimum bidding and public comment periods and automatic “red flags” to alert potentially corrupt activity.
The blockchain-based procurement will offer governments and procurement entities the potential to de-corrupt their procurement processes.

Our target audience is NGOs, Donors, Procurement Entities and Citizens.

Some ideas for Citizen Dapp include:

- Creating a Project
- viewing a list of all projects
- 

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Expo](https://docs.expo.io/get-started/installation/)

## Get the boilerplate

```bash
truffle unbox critesjosh/celo-dappkit
``` 

The project smart contracts and configuration are in the root directory. The React Native front end is in the `/client` directory. Once you download the box, run 

```bash
yarn       # install depenedncies
cd client  # move into the client directory
yarn       # install front end dependencies
```

This Truffle box uses React Native and [Expo](https://expo.io/) for developing a mobile first Celo blockchain experience. 

## Mobile Dependencies

You will need the Expo app installed on your development mobile device or emulator ([iOS](https://apps.apple.com/app/apple-store/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)). 

You will also need the [Celo Wallet](https://celo.org/developers/wallet) on your mobile device (or emulator) to sign transactions. The app may automatically connect to a HelloWorld contract that has already been deployed to the testnet, or you may have to deploy your own (details below).

## Smart contract development

The project comes with a [Hello World example contract](https://github.com/critesjosh/celo-dappkit/blob/master/contracts/HelloWorld.sol) in the root contracts directory. 

The box is also configured to deploy Solidity smart contracts to the Alfajores test network. You will need test network funds to deploy your own contract. 

To create a new account for development, in the project root run

```bash
yarn account
```

The new account address will be printed in the console. This script will generate a private key for you and store it in `/.secret`. If you need to print the account info again, run `yarn account` again. It will not create a new account, it will read the saved private key and print the corresponding account address. 

Truffle will read this private key for contract deployments. 

Copy your account address and paste it in to the [Alfajores faucet](https://celo.org/developers/faucet) to fund your account.

You can migrate the `HelloWorld.sol` contract to the alfajores test network with

```bash
truffle migrate --network alfajores
```

You should deploy the `HelloWorld.sol` contract to work through the exercise. You can deploy it using the remote node specified in `truffle-config.js`. You may get an error about connecting to a running RPC client. If you run into the error, trying running `truffle migrate --network alfajores` again. A successful deployment should print something like the following:

```
Joshs-MacBook-Pro-2:untitled folder joshcrites$ truffle migrate --network alfajores

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'alfajores'
> Network id:      44786
> Block gas limit: 0x1312d00


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x8a7d5f323ef9e356407566ded4d191e3b68b0ba579c5a7b920e5dea3936bb101
   > Blocks: 0            Seconds: 4
   > contract address:    0x6363f95B5dDe5bbb1A73dbdc752036e105769207
   > block number:        587188
   > block timestamp:     1583779418
   > account:             0x0ac6eDb733EAB57f8fa6c0F8678de0b9ef950bc6
   > balance:             4.98552399999999992
   > gas used:            188419
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00376838 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00376838 ETH


2_deploy_contracts.js
=====================

   Replacing 'HelloWorld'
   ----------------------
   > transaction hash:    0x2c668a91c268d0e553ec783ea2d6ae0dc63f9c00470c8de596a1b2c1a1d4563c
   > Blocks: 1            Seconds: 4
   > contract address:    0xa0Bfb781CE0FdB77e58FA6Dd94bA71b0eabbf9D3
   > block number:        439845
   > block timestamp:     1588698470
   > account:             0x919a4290aB4EcA0229D42C263505d656f0e94563
   > balance:             4.9898324
   > gas used:            277896 (0x43d88)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00555792 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00555792 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.0093263 ETH
```

Since we are developing this on the public Alfajores test network, we can view all the accounts, contracts and transactions on the [public Alfajores block explorer](https://alfajores-blockscout.celo-testnet.org/).

You can look up the contract deployment transaction on the Alfajores block explorer via the transaction hash.

Truffle will save the deployment information to the Truffle artifact located at `client/contracts/HelloWorld.json`. You will use this deployment information to connect your React Native application to the correct contract.

## Developing the mobile application

Keep in mind that you will need a version of the Celo Wallet installed on the mobile device with which you are developing the application. The Celo Wallet is the private key management software that the user will sign transactions with. 

You can install the Celo wallet on your physical device with an invite code [here.](https://celo.org/developers/wallet) 

You can build a the latest version of the Celo Wallet and find instructions on running a development build [here.](https://github.com/celo-org/celo-monorepo/tree/master/packages/mobile) 

Once you have a device with the Celo wallet installed, you can start working on your application. 

For the purposes of introduction, we have added some code to you get you started located in App.js in the `client` directory.

### Application development with Expo

In this project, the React Native application lives in the `client` directory. `cd` into the client directory and run `$ yarn` to install the dependencies. 

[Expo](https://expo.io/) is a tool that makes developing React Native applications much easier. We will be using Expo for easy setup.

Install it with:
```
yarn global add expo-cli
# or
npm install --global expo-cli
```

You can start the application from the client directory with
```
expo start
```

You can use your physical mobile device or an emulator to develop apps with Expo. If you want to use your physical device, you will have to [install the Expo app on your device.](https://expo.io/learn)

Make sure the Celo Wallet app is open on your device when you are using your dapp. Your dapp will be requesting information from the Celo Wallet.

### Using an emulator

You can find more information about running and Android emulator [here.](https://developer.android.com/studio/run/emulator-commandline)

## Celo Dapp Examples

Check out the [Celo DApp Gallery](https://docs.celo.org/developer-guide/celo-dapp-gallery) for more examples.

## Wrapping up

You should now have the necessary skills to get started with developing mobile applications on Celo.

This is not a comprehensive tutorial for Celo's features and capabilities. 

Please [see our documentation](https://docs.celo.org/) for more info and feel free to [connect with us on Discord](https://discord.gg/745Qntv) if you need any help!
