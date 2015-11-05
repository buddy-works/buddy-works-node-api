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
function Projects(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Object} filters
 * @param {Function} done
 */
Projects.prototype.getList = function(accessToken, domain, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects', {
		'domain': domain

	}, filters), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Object} data
 * @param {Function} done
 */
Projects.prototype.addProject = function(accessToken, domain, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects', {
		'domain': domain

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Function} done
 */
Projects.prototype.getProject = function(accessToken, domain, projectName, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name', {
		'domain': 		domain,
		'project_name':	projectName

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Object} data
 * @param {Function} done
 */
Projects.prototype.editProject = function(accessToken, domain, projectName, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name', {
		'domain':		domain,
		'project_name':	projectName

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Function} done
 */
Projects.prototype.deleteProject = function(accessToken, domain, projectName, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name', {
		'domain':		domain,
		'project_name':	projectName

	}), null, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Object} filters
 * @param {Function} done
 */
Projects.prototype.getProjectMembers = function(accessToken, domain, projectName, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/members', {
		'domain':		domain,
		'project_name':	projectName

	}, filters), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Object} data
 * @param {Function} done
 */
Projects.prototype.addProjectMember = function(accessToken, domain, projectName, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/members', {
		'domain':		domain,
		'project_name':	projectName

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} memberId
 * @param {Function} done
 */
Projects.prototype.getProjectMember = function(accessToken, domain, projectName, memberId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/members/:member_id', {
		'domain':		domain,
		'project_name':	projectName,
		'member_id':	memberId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} memberId
 * @param {Number} permissionId
 * @param {Function} done
 */
Projects.prototype.editProjectMember = function(accessToken, domain, projectName, memberId, permissionId, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/members/:member_id', {
		'domain':		domain,
		'project_name':	projectName,
		'member_id':	memberId

	}), {
		'permission_set': {
			'id': permissionId
		}
	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} memberId
 * @param {Function} done
 */
Projects.prototype.deleteProjectMember = function(accessToken, domain, projectName, memberId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/members/:member_id', {
		'domain':		domain,
		'project_name':	projectName,
		'member_id':	memberId

	}), null, done);
};

module.exports = Projects;