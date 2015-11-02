/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
var expect = require('chai').expect;
var buddyworksapi = require('../lib/buddyworksapi');
var utils = require('./utils');
describe('buddyworksapi', function(){

	it('should return instance of buddyworksapi', function(){
		expect(buddyworksapi).to.be.an('object');
	});

	describe('.create()', function(){

		it('should return a new instance of buddyworksapi', function(){
			expect(buddyworksapi.create).to.be.an('function');
			var buddyworksapi2 = buddyworksapi.create();
			expect(buddyworksapi2).not.equal(buddyworksapi);
			expect(buddyworksapi2).to.be.an('object');
		});

	});

	describe('.useToken()', function(){

		it('should set token', function(){
			var token = utils.createRandomText();
			buddyworksapi.useToken(token);
			expect(buddyworksapi.options).to.be.an('object');
			expect(buddyworksapi.options.token).equal(token);
			expect(buddyworksapi.options.useToken).equal(true);
		});
	});

	describe('.useClient()', function(){

		it('should set client id & secret', function(){
			var clientId = utils.createRandomText();
			var clientSecret = utils.createRandomText();
			buddyworksapi.useClient(clientId, clientSecret);
			expect(buddyworksapi.options).to.be.an('object');
			expect(buddyworksapi.options.clientId).equal(clientId);
			expect(buddyworksapi.options.clientSecret).equal(clientSecret);
			expect(buddyworksapi.options.useClient).equal(true);
		});

	});

});

