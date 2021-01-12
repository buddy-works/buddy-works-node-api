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
function Integrations(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Object} filters
 * @param {Function} done
 */
Integrations.prototype.getList = function(accessToken, domain, filters, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/integrations', {
		'domain': domain

	}, filters), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Object} data
 * @param {Function} done
 */
Integrations.prototype.addIntegration = function(accessToken, domain, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/integrations', {
		'domain': domain

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} integrationHash
 * @param {Function} done
 */
Integrations.prototype.getIntegration = function(accessToken, domain, integrationHash, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/integrations/:integration_hash', {
		'domain': 		domain,
		'integration_hash':	integrationHash

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} integrationHash
 * @param {Object} data
 * @param {Function} done
 */
Integrations.prototype.editIntegration = function(accessToken, domain, integrationHash, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/integrations/:integration_hash', {
		'domain':		domain,
		'integration_hash':	integrationHash

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {String} integrationHash
 * @param {Function} done
 */
Integrations.prototype.deleteIntegration = function(accessToken, domain, integrationHash, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/integrations/:integration_hash', {
		'domain':		domain,
		'integration_hash':	integrationHash

	}), null, done);
};

module.exports = Integrations;