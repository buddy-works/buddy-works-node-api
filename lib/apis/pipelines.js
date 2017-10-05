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
function Pipelines(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Object} filters
 * @param {Function} done
 */
Pipelines.prototype.getList = function(accessToken, domain, projectName, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines', {
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
Pipelines.prototype.addPipeline = function(accessToken, domain, projectName, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines', {
		'domain':		domain,
		'project_name':	projectName

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Function} done
 */
Pipelines.prototype.getPipeline = function(accessToken, domain, projectName, pipelineId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Object} data
 * @param {Function} done
 */
Pipelines.prototype.editPipeline = function(accessToken, domain, projectName, pipelineId, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Function} done
 */
Pipelines.prototype.deletePipeline = function(accessToken, domain, projectName, pipelineId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId

	}), null, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Object} filters
 * @param {Function} done
 */
Pipelines.prototype.getPipelineActions = function(accessToken, domain, projectName, pipelineId, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id/actions', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId

	}, filters), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Object} data
 * @param {Function} done
 */
Pipelines.prototype.addPipelineAction = function(accessToken, domain, projectName, pipelineId, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id/actions', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Number} actionId
 * @param {Function} done
 */
Pipelines.prototype.getPipelineAction = function(accessToken, domain, projectName, pipelineId, actionId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id/actions/:action_id', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId,
		'action_id':	actionId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Number} actionId
 * @param {Object} data
 * @param {Function} done
 */
Pipelines.prototype.editPipelineAction = function(accessToken, domain, projectName, pipelineId, actionId, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id/actions/:action_id', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId,
		'action_id':	actionId

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Number} actionId
 * @param {Function} done
 */
Pipelines.prototype.deletePipelineAction = function(accessToken, domain, projectName, pipelineId, actionId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id/actions/:action_id', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId,
		'action_id':	actionId

	}), null, done);
};

module.exports = Pipelines;