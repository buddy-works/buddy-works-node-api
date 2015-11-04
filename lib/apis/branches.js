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
	 * @param {String} projectName
	 * @param {Function} done
	 */
	this.getList = function(accessToken, domain, projectName, done){
		api.client.getJson(accessToken, api.client.createUrl('/workspaces/:domain/projects/:project_name/repository/branches', {
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
	this.getRevision = function(accessToken, domain, projectName, name, done){
		api.client.getJson(accessToken, api.client.createUrl('/workspaces/:domain/projects/:project_name/repository/branches/:name', {
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
	this.addBranch = function(accessToken, domain, projectName, data, done){
		api.client.postJson(accessToken, api.client.createUrl('/workspaces/:domain/projects/:project_name/repository/branches', {
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
	this.deleteBranch = function(accessToken, domain, projectName, name, force, done){
		var query = {};
		if (!!force){
			query.force = 'true';
		}
		api.client.deleteJson(accessToken, api.client.createUrl('/workspaces/:domain/projects/:project_name/repository/branches/:name', {
			'domain':		domain,
			'project_name':	projectName,
			'name':			name

		}, query), done);
	};
};