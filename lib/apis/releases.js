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
function Releases(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Object} filters
 * @param {Function} done
 */
Releases.prototype.getList = function(accessToken, domain, projectName, scenarioId, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/releases', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId

	}, filters), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Object} data
 * @param {Function} done
 */
Releases.prototype.runRelease = function(accessToken, domain, projectName, scenarioId, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/releases', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Number} releaseId
 * @param {Function} done
 */
Releases.prototype.getRelease = function(accessToken, domain, projectName, scenarioId, releaseId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/releases/:release_id', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId,
		'release_id':			releaseId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Number} releaseId
 * @param {String} operation
 * @param {Function} done
 */
Releases.prototype.cancelOrRetryRelease = function(accessToken, domain, projectName, scenarioId, releaseId, operation, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/releases/:release_id', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId,
		'release_id':			releaseId

	}), {
		'operation': operation

	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Number} releaseId
 * @param {Function} done
 */
Releases.prototype.cancelRelease = function(accessToken, domain, projectName, scenarioId, releaseId, done){
	this.cancelOrRetryRelease(accessToken, domain, projectName, scenarioId, releaseId, 'CANCEL', done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Number} releaseId
 * @param {Function} done
 */
Releases.prototype.retryRelease = function(accessToken, domain, projectName, scenarioId, releaseId, done){
	this.cancelOrRetryRelease(accessToken, domain, projectName, scenarioId, releaseId, 'RETRY', done);
};

module.exports = Releases;