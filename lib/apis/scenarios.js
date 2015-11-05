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
function Scenarios(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Object} filters
 * @param {Function} done
 */
Scenarios.prototype.getList = function(accessToken, domain, projectName, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios', {
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
Scenarios.prototype.addScenario = function(accessToken, domain, projectName, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios', {
		'domain':		domain,
		'project_name':	projectName

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Function} done
 */
Scenarios.prototype.getScenario = function(accessToken, domain, projectName, scenarioId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Object} data
 * @param {Function} done
 */
Scenarios.prototype.editScenario = function(accessToken, domain, projectName, scenarioId, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id', {
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
 * @param {Function} done
 */
Scenarios.prototype.deleteScenario = function(accessToken, domain, projectName, scenarioId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId

	}), null, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Function} done
 */
Scenarios.prototype.getScenarioActions = function(accessToken, domain, projectName, scenarioId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/actions', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Object} data
 * @param {Function} done
 */
Scenarios.prototype.addScenarioAction = function(accessToken, domain, projectName, scenarioId, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/actions', {
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
 * @param {Array} order
 * @param {Function} done
 */
Scenarios.prototype.reorderScenarioActions = function(accessToken, domain, projectName, scenarioId, order, done){
	var actions = [];
	for(var i = 0; i < order.length; i++){
		actions.push({
			'id': order[i]
		});
	}
	this.client.putJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/actions', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId

	}), {
		'actions': actions

	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Number} actionId
 * @param {Function} done
 */
Scenarios.prototype.getScenarioAction = function(accessToken, domain, projectName, scenarioId, actionId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/actions/:action_id', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId,
		'action_id':			actionId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Number} actionId
 * @param {Object} data
 * @param {Function} done
 */
Scenarios.prototype.editScenarioAction = function(accessToken, domain, projectName, scenarioId, actionId, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/actions/:action_id', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId,
		'action_id':			actionId

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} projectName
 * @param {Number} scenarioId
 * @param {Number} actionId
 * @param {Function} done
 */
Scenarios.prototype.deleteScenarioAction = function(accessToken, domain, projectName, scenarioId, actionId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/projects/:project_name/release_scenarios/:release_scenario_id/actions/:action_id', {
		'domain':				domain,
		'project_name':			projectName,
		'release_scenario_id':	scenarioId,
		'action_id':			actionId

	}), null, done);
};

module.exports = Scenarios;