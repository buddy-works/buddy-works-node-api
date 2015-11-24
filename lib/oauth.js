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
function OAuth(options, client) {
	this.options = options;
	this.client = client;
}


/**
 * @param {Array} scopes
 * @param {String} state
 * @param {String} [redirectUrl]
 * @return {string}
 */
OAuth.prototype.getAuthorizeUrl = function(scopes, state, redirectUrl){
	if (scopes.length === 0){
		throw new Error('Must have at least one scope');
	}
	if (!state){
		throw new Error('State must be provided');
	}
	var query = {
		'type':				'web_server',
		'response_type':	'code',
		'clientId':			this.options.clientId,
		'scope':			scopes.join(' '),
		'state':			state
	};
	if (!!redirectUrl && redirectUrl !== ''){
		query['redirect_uri'] = redirectUrl;
	}
	return this.client.createUrl('/oauth2/authorize', null, query);
};

/**
 * @param {String} code
 * @param {String} redirectUrl
 * @param {Function} done
 */
OAuth.prototype.getAccessToken = function(code, redirectUrl, done){
	if (!code){
		done(new Error('Code must be provided'));
		return;
	}
	var data = {
		code: 			code,
		client_id:		this.options.clientId,
		client_secret:	this.options.clientSecret,
		grant_type:		'authorization_code'
	};
	if (!!redirectUrl){
		data.redirect_uri = redirectUrl;
	}
	this.client.post(this.client.createUrl('/oauth2/token'), data, done);
};

module.exports = OAuth;