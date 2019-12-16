 
# Bloomen token

This is a complete implementation of the [ERC-223](https://github.com/ethereum/EIPs/issues/223) fungible token standard for the Ethereum blockchain. This is an open source project build with [Truffle](http://truffleframework.com) framework.

The purpose of this project is the construction of a crypto token that will be used within the ecosystem of applications created within the European project [Bloomen](http://bloomen.io/).

## Structure

Since this is a Truffle project, you will find all tokens in `contracts/` directory.

## Requirements

* NodeJS 9.0+ recommended.
* Windows, Linux or Mac OS X.

## Installation

### NPM

This is an [NPM](https://www.npmjs.com/package/@0xcert/ethereum-erc20) module for [Truffle](http://truffleframework.com) framework. In order to use it as a dependency in your Javascript project, you must install it through the `npm` command:

```
$ npm install
```

## Usage

### NPM

In order to facilitate the use of the token, an npm package has been created that must be incorporated into the project. This package contains the .json files with references to the contracts deployed on the Alastria Blockchain Telsius network.

```
$ npm install bloomen-token --save
```

After this it will be necessary to adapt the application code to obtain the abi and the address of the smart contract that will allow us to interact with it.

### Source

#### Creating your own Bloomen Token smart contract

```
$ cp .env.example .env
 -- fill .env file with your configuration
```

Let's compile the contract:

```
$ npm start development
```

You can se a new instance of the Bloomen Token on the [build](.build/contracts/ERC223.json) folder.

## Licence

See [LICENSE](./LICENSE) for details.