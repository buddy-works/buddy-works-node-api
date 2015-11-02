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

var BuddyWorksApi = function(){

	this.options = {
		useToken:	false,
		useClient:	false
	};

	/**
	 * @param {String} token
	 * @return {BuddyWorksApi}
	 */
	this.useToken = function(token){
		this.options.token = token;
		this.options.useToken = true;
		return this;
	};

	/**
	 * @param {String} clientId
	 * @param {String} clientSecret
	 * @return {BuddyWorksApi}
	 */
	this.useClient = function(clientId, clientSecret){
		this.options.clientId = clientId;
		this.options.clientSecret = clientSecret;
		this.options.useClient = true;
		return this;
	};

	/**
	 * @return {BuddyWorksApi}
	 */
	this.create = function(){
		return new BuddyWorksApi();
	};
};

module.exports = new BuddyWorksApi();