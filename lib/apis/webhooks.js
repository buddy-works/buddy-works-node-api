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
function Webhooks(client) {
	this.client = client;
}

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Function} done
 */
Webhooks.prototype.getList = function(accessToken, domain, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/webhooks', {
		'domain': domain

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Object} data
 * @param {Function} done
 */
Webhooks.prototype.addWebhook = function(accessToken, domain, data, done){
	this.client.postJson(accessToken, this.client.createUrl('/workspaces/:domain/webhooks', {
		'domain': domain

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} webhookId
 * @param {Function} done
 */
Webhooks.prototype.getWebhook = function(accessToken, domain, webhookId, done){
	this.client.getJson(accessToken, this.client.createUrl('/workspaces/:domain/webhooks/:webhook_id', {
		'domain':		domain,
		'webhook_id':	webhookId

	}), done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} webhookId
 * @param {Object} data
 * @param {Function} done
 */
Webhooks.prototype.editWebhook = function(accessToken, domain, webhookId, data, done){
	this.client.patchJson(accessToken, this.client.createUrl('/workspaces/:domain/webhooks/:webhook_id', {
		'domain':		domain,
		'webhook_id':	webhookId

	}), data, done);
};

/**
 * @param {String} accessToken
 * @param {String} domain
 * @param {Number} webhookId
 * @param {Function} done
 */
Webhooks.prototype.deleteWebhook = function(accessToken, domain, webhookId, done){
	this.client.deleteJson(accessToken, this.client.createUrl('/workspaces/:domain/webhooks/:webhook_id', {
		'domain':		domain,
		'webhook_id':	webhookId

	}), null, done);
};

module.exports = Webhooks;