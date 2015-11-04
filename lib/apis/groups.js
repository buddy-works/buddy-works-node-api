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
module.exports = function(api){

	/**
	 * @param {String} accessToken
	 * @param {String} domain
	 * @param {Function} done
	 */
	this.getList = function(accessToken, domain, done){
		api.client.getJson(accessToken, api.client.createUrl('/workspaces/:domain/groups', {
			'domain': domain

		}), done);
	};

	/**
	 * @param {String} accessToken
	 * @param {String} domain
	 * @param {Object} data
	 * @param {Function} done
	 */
	this.addGroup = function(accessToken, domain, data, done){
		api.client.postJson(accessToken, api.client.createUrl('/workspaces/:domain/groups', {
			'domain': domain

		}), data, done);
	};

	/**
	 * @param {String} accessToken
	 * @param {String} domain
	 * @param {Number} groupId
	 * @param {Function} done
	 */
	this.getGroup = function(accessToken, domain, groupId, done){
		api.client.getJson(accessToken, api.client.createUrl('/workspaces/:domain/groups/:group_id', {
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
	this.editGroup = function(accessToken, domain, groupId, data, done){
		api.client.patchJson(accessToken, api.client.createUrl('/workspaces/:domain/groups/:group_id', {
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
	this.deleteGroup = function(accessToken, domain, groupId, done){
		api.client.deleteJson(accessToken, api.client.createUrl('/workspaces/:domain/groups/:group_id', {
			'domain': 	domain,
			'group_id':	groupId

		}), done);
	};

	/**
	 * @param {String} accessToken
	 * @param {String} domain
	 * @param {Number} groupId
	 * @param {Function} done
	 */
	this.getGroupMembers = function(accessToken, domain, groupId, done){
		api.client.getJson(accessToken, api.client.createUrl('/workspaces/:domain/groups/:group_id/members', {
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
	this.addGroupMember = function(accessToken, domain, groupId, memberId, done){
		api.client.postJson(accessToken, api.client.createUrl('/workspaces/:domain/groups/:group_id/members', {
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
	this.getGroupMember = function(accessToken, domain, groupId, memberId, done){
		api.client.getJson(accessToken, api.client.createUrl('/workspaces/:domain/groups/:group_id/members/:member_id', {
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
	this.deleteGroupMember = function(accessToken, domain, groupId, memberId, done){
		api.client.deleteJson(accessToken, api.client.createUrl('/workspaces/:domain/groups/:group_id/members/:member_id', {
			'domain':		domain,
			'group_id':		groupId,
			'member_id':	memberId

		}), done);
	};

};