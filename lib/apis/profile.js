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
function You(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {Function} done
 */
You.prototype.getUser = function(accessToken, done){
	this.client.getJson(accessToken, this.client.createUrl('/user'), done);
};

/**
 * @param {String} accessToken
 * @param {Object} data
 * @param {Function} done
 */
You.prototype.editUser = function(accessToken, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/user'), data, done);
};

/**
 * @param {String} accessToken
 * @param {Function} done
 */
You.prototype.getEmails = function(accessToken, done){
	this.client.getJson(accessToken, this.client.createUrl('/user/emails'), done);
};

/**
 * @param {String} accessToken
 * @param {String} email
 * @param {Function} done
 */
You.prototype.addEmail = function(accessToken, email, done){
	this.client.postJson(accessToken, this.client.createUrl('/user/emails'), {
		'email': email

	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} email
 * @param {Function} done
 */
You.prototype.deleteEmail = function(accessToken, email, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/user/emails/:email', {
		'email': email

	}), null, done);
};

/**
 * @param {String} accessToken
 * @param {Function} done
 */
You.prototype.getSshKeys = function(accessToken, done){
	this.client.getJson(accessToken, this.client.createUrl('/user/keys'), done);
};

/**
 * @param {String} accessToken
 * @param {Object} data
 * @param {Function} done
 */
You.prototype.addSshKey = function(accessToken, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/user/keys'), data, done);
};

/**
 * @param {String} accessToken
 * @param {Number} keyId
 * @param {Function} done
 */
You.prototype.deleteSshKey = function(accessToken, keyId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/user/keys/:key_id', {
		'key_id': keyId

	}), null, done);
};

/**
 * @param {String} accessToken
 * @param {Number} keyId
 * @param {Function} done
 */
You.prototype.getSshKey = function(accessToken, keyId, done){
	this.client.getJson(accessToken, this.client.createUrl('/user/keys/:key_id', {
		'key_id': keyId

	}), done);
};

module.exports = You;