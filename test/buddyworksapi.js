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

	describe('.useOAuth()', function(){

		it('should set client id & secret', function(){
			var clientId = utils.createRandomText();
			var clientSecret = utils.createRandomText();
			buddyworksapi.useOAuth(clientId, clientSecret);
			expect(buddyworksapi.options).to.be.an('object');
			expect(buddyworksapi.options.clientId).equal(clientId);
			expect(buddyworksapi.options.clientSecret).equal(clientSecret);
		});

	});

	describe('oauth.getAuthorizeUrl()', function(){
		var clientId = utils.createRandomText();
		var clientSecret = utils.createRandomText();
		buddyworksapi.useOAuth(clientId, clientSecret);

		it('should throw error when no scopes provided', function(){
			expect(buddyworksapi.oauth.getAuthorizeUrl.bind(buddyworksapi.oauth, [], 'test')).to.throw('Must have at least one scope');
			expect(buddyworksapi.oauth.getAuthorizeUrl.bind(buddyworksapi.oauth, [buddyworksapi.SCOPE_MANAGE_EMAILS], 'test')).to.not.throw('Must have at least one scope');
		});

		it('should throw error when no state provided', function(){
			expect(buddyworksapi.oauth.getAuthorizeUrl.bind(buddyworksapi.oauth, [buddyworksapi.SCOPE_MANAGE_EMAILS], '')).to.throw('State must be provided');
			expect(buddyworksapi.oauth.getAuthorizeUrl.bind(buddyworksapi.oauth, [buddyworksapi.SCOPE_MANAGE_EMAILS], null)).to.throw('State must be provided');
			expect(buddyworksapi.oauth.getAuthorizeUrl.bind(buddyworksapi.oauth, [buddyworksapi.SCOPE_MANAGE_EMAILS], undefined)).to.throw('State must be provided');
			expect(buddyworksapi.oauth.getAuthorizeUrl.bind(buddyworksapi.oauth, [buddyworksapi.SCOPE_MANAGE_EMAILS], 'test')).to.not.throw('State must be provided');
		});

	});

	describe('oauth.getAccessToken()', function(){
		var clientId = utils.createRandomText();
		var clientSecret = utils.createRandomText();
		buddyworksapi.useOAuth(clientId, clientSecret);

		it('should return error when no code provided', function(done){
			buddyworksapi.oauth.getAccessToken('', null, function(err){
				expect(err).to.be.instanceOf(Error);
				done();
			});
		});

		it('should return error when no code provided 2', function(done){
			buddyworksapi.oauth.getAccessToken(null, null, function(err){
				expect(err).to.be.instanceOf(Error);
				done();
			});
		});

		it('should return error when code is wrong', function(done){
			buddyworksapi.oauth.getAccessToken(utils.createRandomText(), null, function(err){
				expect(err).to.be.instanceOf(Error);
				done();
			});
		});
	});

});

