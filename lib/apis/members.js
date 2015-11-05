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
function Members(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Function} done
 */
Members.prototype.getList = function(accessToken, domain, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/members', {
		'domain': domain

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} email
 * @param {Function} done
 */
Members.prototype.addMember = function(accessToken, domain, email, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/members', {
		'domain': domain
	}), {
		'email': email

	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} memberId
 * @param {Function} done
 */
Members.prototype.getMember = function(accessToken, domain, memberId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/members/:member_id', {
		'domain': 		domain,
		'member_id':	memberId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} memberId
 * @param {Boolean} isAdmin
 * @param {Function} done
 */
Members.prototype.updateAdministrator = function(accessToken, domain, memberId, isAdmin, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/members/:member_id', {
		'domain':		domain,
		'member_id':	memberId

	}), {
		'admin': isAdmin

	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} memberId
 * @param {Function} done
 */
Members.prototype.deleteMember = function(accessToken, domain, memberId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/members/:member_id', {
		'domain':		domain,
		'member_id':	memberId

	}), null, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} memberId
 * @param {Function} done
 */
Members.prototype.getMemberProjects = function(accessToken, domain, memberId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/members/:member_id/projects', {
		'domain':		domain,
		'member_id':	memberId

	}), done);
};

module.exports = Members;