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
function Executions(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Object} filters
 * @param {Function} done
 */
Executions.prototype.getList = function(accessToken, domain, projectName, pipelineId, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id/executions', {
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
Executions.prototype.runExecution = function(accessToken, domain, projectName, pipelineId, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id/executions', {
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
 * @param {Number} executionId
 * @param {Function} done
 */
Executions.prototype.getExecution = function(accessToken, domain, projectName, pipelineId, executionId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id/executions/:execution_id', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId,
		'execution_id':	executionId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Number} executionId
 * @param {String} operation
 * @param {Function} done
 */
Executions.prototype.cancelOrRetryExecution = function(accessToken, domain, projectName, pipelineId, executionId, operation, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/pipelines/:pipeline_id/executions/:execution_id', {
		'domain':		domain,
		'project_name':	projectName,
		'pipeline_id':	pipelineId,
		'execution_id':	executionId

	}), {
		'operation': operation

	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Number} executionId
 * @param {Function} done
 */
Executions.prototype.cancelExecution = function(accessToken, domain, projectName, pipelineId, executionId, done){
	this.cancelOrRetryExecution(accessToken, domain, projectName, pipelineId, executionId, 'CANCEL', done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} pipelineId
 * @param {Number} executionId
 * @param {Function} done
 */
Executions.prototype.retryExecution = function(accessToken, domain, projectName, pipelineId, executionId, done){
	this.cancelOrRetryExecution(accessToken, domain, projectName, pipelineId, executionId, 'RETRY', done);
};

module.exports = Executions;