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
function Source(client){
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {String} path
 * @param {Object} filters
 * @param {Function} done
 */
Source.prototype.getContents = function(accessToken, domain, projectName, path, filters, done){
	this.client.getJson(accessToken, this.client.createPathUrl('/workspaces/:domain/projects/:project_name/repository/contents', {
		'domain':		domain,
		'project_name':	projectName

	}, path, filters), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Object} data
 * @param {Function} done
 */
Source.prototype.addFile = function(accessToken, domain, projectName, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/repository/contents', {
		'domain':		domain,
		'project_name':	projectName

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {String} path
 * @param {Object} data
 * @param {Function} done
 */
Source.prototype.editFile = function(accessToken, domain, projectName, path, data, done){
	this.client.putJson(accessToken, this.client.createPathUrl('/workspaces/:domain/projects/:project_name/repository/contents', {
		'domain':		domain,
		'project_name':	projectName

	}, path), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {String} path
 * @param {Object} data
 * @param {Function} done
 */
Source.prototype.deleteFile = function(accessToken, domain, projectName, path, data, done){
	this.client.deleteJson(accessToken, this.client.createPathUrl('/workspaces/:domain/projects/:project_name/repository/contents', {
		'domain':		domain,
		'project_name':	projectName

	}, path), data, done);
};

module.exports = Source;