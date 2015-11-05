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
function Permissions(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Function} done
 */
Permissions.prototype.getList = function(accessToken, domain, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/permissions', {
		'domain': domain

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Object} data
 * @param {Function} done
 */
Permissions.prototype.addPermission = function(accessToken, domain, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/permissions', {
		'domain': domain

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} permissionId
 * @param {Function} done
 */
Permissions.prototype.getPermission = function(accessToken, domain, permissionId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/permissions/:permission_set_id', {
		'domain':				domain,
		'permission_set_id':	permissionId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} permissionId
 * @param {Object} data
 * @param {Function} done
 */
Permissions.prototype.editPermission = function(accessToken, domain, permissionId, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/permissions/:permission_set_id', {
		'domain':				domain,
		'permission_set_id':	permissionId

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} permissionId
 * @param {Function} done
 */
Permissions.prototype.deletePermission = function(accessToken, domain, permissionId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/permissions/:permission_set_id', {
		'domain':				domain,
		'permission_set_id':	permissionId

	}), null, done);
};

module.exports = Permissions;