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
function Commits(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @parma {Object} filters
 * @param {Function} done
 */
Commits.prototype.getList = function(accessToken, domain, projectName, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/repository/commits', {
		'domain':		domain,
		'project_name':	projectName

	}, filters), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {String} revision
 * @param {Function} done
 */
Commits.prototype.getCommit = function(accessToken, domain, projectName, revision, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/repository/commits/:revision', {
		'domain':		domain,
		'project_name':	projectName,
		'revision':		revision

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {String} base
 * @param {String} head
 * @param {Function} done
 */
Commits.prototype.getCompare = function(accessToken, domain, projectName, base, head, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/repository/comparison/:base...:head', {
		'domain':		domain,
		'project_name':	projectName,
		'base':			base,
		'head':			head

	}, filters), done);
};

module.exports = Commits;