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
function Branches(client) {
	this.client = client;
}

/**
 * @memberOf Branches
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Function} done
 */
Branches.prototype.getList = function(accessToken, domain, projectName, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/repository/branches', {
		'domain': 		domain,
		'project_name':	projectName

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {String} name
 * @param {Function} done
 */
Branches.prototype.getRevision = function(accessToken, domain, projectName, name, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/repository/branches/:name', {
		'domain': 		domain,
		'project_name':	projectName,
		'name':			name

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Object} data
 * @param {Function} done
 */
Branches.prototype.addBranch = function(accessToken, domain, projectName, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/repository/branches', {
		'domain':		domain,
		'project_name':	projectName

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {String} name
 * @param {Boolean} force
 * @param {Function} done
 */
Branches.prototype.deleteBranch = function(accessToken, domain, projectName, name, force, done){
	var query = {};
	if (!!force){
		query.force = 'true';
	}
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/repository/branches/:name', {
		'domain':		domain,
		'project_name':	projectName,
		'name':			name

	}, query), null, done);
};

module.exports = Branches;