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
var OAuth = require('./oauth');
var Client = require('./client');
var fs = require('fs');
var path = require('path');
function BuddyWorksApi() {

	this.SCOPE_WORKSPACE = 'WORKSPACE';//Access to basic workspace information as well as the rights to manage members, groups and member permissions
	this.SCOPE_PROJECT_DELETE = 'PROJECT_DELETE';//Permission to delete projects.
	this.SCOPE_REPOSITORY_READ = 'REPOSITORY_READ';//Access to commits and repository content. Repository checkout is allowed, too.
	this.SCOPE_REPOSITORY_WRITE = 'REPOSITORY_WRITE';//Permission to write in the repository. File deletion is allowed, too (contains REPOSITORY_READ rights).
	this.SCOPE_RELEASE_INFO = 'RELEASE_INFO';//Access to release history.
	this.SCOPE_RELEASE_RUN = 'RELEASE_RUN';//Permission to run and stop releases (contains RELEASE_INFO rights).
	this.SCOPE_RELEASE_MANAGE = 'RELEASE_MANAGE';//Permission to add/edit release scenarios (contains RELEASE_RUN rights).
	this.SCOPE_USER_INFO = 'USER_INFO';//Access to base information of authorized user.
	this.SCOPE_USER_KEY = 'USER_KEY';//Access to public SSH keys of authorized user (contains USER_INFO rights).
	this.SCOPE_USER_EMAIL = 'USER_EMAIL';//Access to contact info of authorized user (contains USER_INFO rights).
	this.SCOPE_MEMBER_EMAIL = 'MEMBER_EMAIL';//Access to contact info of workspace members.
	this.SCOPE_MANAGE_EMAILS = 'MANAGE_EMAILS';//Permission to view user email addresses (contains USER_INFO rights).
	this.SCOPE_WEBHOOK_INFO = 'WEBHOOK_INFO';//Access to webhooks info
	this.SCOPE_WEBHOOK_ADD = 'WEBHOOK_ADD';//Permission to download and add webhooks
	this.SCOPE_WEBHOOK_MANAGE = 'WEBHOOK_MANAGE';//Permission to add/edit and delete webhooks

	this.options = {
		host: 'https://api.buddy.works',
	};
	this.oauth = null;
	this.client = new Client(this.options.host);

	var rootDir = __dirname;
	var apis = fs.readdirSync(path.join(rootDir, 'apis'));
	for (var i = 0; i < apis.length; i++) {
		var name = apis[i].replace('.js', '');
		var Api = require(path.join(rootDir, 'apis', apis[i]));
		this[name] = new Api(this.client);
	}
}



/**
 * @param {String} clientId
 * @param {String} clientSecret
 * @return {BuddyWorksApi}
 */
BuddyWorksApi.prototype.useOAuth = function(clientId, clientSecret){
	this.options.clientId = clientId;
	this.options.clientSecret = clientSecret;
	this.oauth = new OAuth(this.options, this.client);
	return this;
};

/**
 * @return {BuddyWorksApi}
 */
BuddyWorksApi.prototype.create = function(){
	return new BuddyWorksApi();
};


module.exports = new BuddyWorksApi();