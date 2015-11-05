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
function Groups(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Function} done
 */
Groups.prototype.getList = function(accessToken, domain, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/groups', {
		'domain': domain

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Object} data
 * @param {Function} done
 */
Groups.prototype.addGroup = function(accessToken, domain, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/groups', {
		'domain': domain

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} groupId
 * @param {Function} done
 */
Groups.prototype.getGroup = function(accessToken, domain, groupId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/groups/:group_id', {
		'domain':	domain,
		'group_id':	groupId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} groupId
 * @param {Object} data
 * @param {Function} done
 */
Groups.prototype.editGroup = function(accessToken, domain, groupId, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/groups/:group_id', {
		'domain':	domain,
		'group_id':	groupId

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} groupId
 * @param {Function} done
 */
Groups.prototype.deleteGroup = function(accessToken, domain, groupId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/groups/:group_id', {
		'domain': 	domain,
		'group_id':	groupId

	}), null, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} groupId
 * @param {Function} done
 */
Groups.prototype.getGroupMembers = function(accessToken, domain, groupId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/groups/:group_id/members', {
		'domain':	domain,
		'group_id':	groupId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} groupId
 * @param {Number} memberId
 * @param {Function} done
 */
Groups.prototype.addGroupMember = function(accessToken, domain, groupId, memberId, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/groups/:group_id/members', {
		'domain':	domain,
		'group_id':	groupId

	}), {
		'id': memberId
	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} groupId
 * @param {Number} memberId
 * @param {Function} done
 */
Groups.prototype.getGroupMember = function(accessToken, domain, groupId, memberId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/groups/:group_id/members/:member_id', {
		'domain':		domain,
		'group_id':		groupId,
		'member_id':	memberId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} groupId
 * @param {Number} memberId
 * @param {Function} done
 */
Groups.prototype.deleteGroupMember = function(accessToken, domain, groupId, memberId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/groups/:group_id/members/:member_id', {
		'domain':		domain,
		'group_id':		groupId,
		'member_id':	memberId

	}), null, done);
};

module.exports = Groups;