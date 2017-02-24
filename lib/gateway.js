'use strict';

var braintree = require('braintree');
var environment, gateway;

require('dotenv').load();
//environment = process.env.BT_ENVIRONMENT.charAt(0).toUpperCase() + process.env.BT_ENVIRONMENT.slice(1);

gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: 'ygc6hkdtf8tq2bqc',
  publicKey: 'vyq8rqv5vbzf7x3v',
  privateKey: 'e9041aa69c4c604aeb301b8dd490d316'
});

module.exports = gateway;
