# Buddy Works APIs Node.js Client
Buddy's officially supported node.js client library.

[![Build](https://api.travis-ci.org/buddy-works/buddy-works-node-api.svg?branch=master)](https://api.travis-ci.org/buddy-works/buddy-works-node-api)

## Installation

This library is distributed on `npm`. In order to add it as a dependency,
run the following command:

``` sh
$ npm install buddyworksapi --save
```
 
## Usage of OAUTH

First you need to add application in your [Buddy ID](https://app.buddy.works/my-apps).
You will then obtain clientId & clientSecret to execute this code:

```javascript
var buddyworksapi = require('buddyworksapi');
buddyworksapi.useClient(clientId, clientSecret);
```

## Usage of direct tokens

You can also use [api tokens](https://app.buddy.works/api-tokens).
That functionality is provided for testing purpose and will only work for individual tokens generated per user.
All requests will be called in behalf of the user whom provided token 
 
```javascript
var buddyworksapi = require('buddyworksapi');
buddyworksapi.useToken(token);
```

## Many api client instances

If you need more instances of client api you can create new with provided code:

```javascript
var buddyworksapi = require('buddyworksapi');
var client = buddyworksapi.create();
client.useToken(token2);
```
