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
var request = require('request');
var qs = require('qs');

/**
 * @param {Boolean} isJson
 * @param {String} method
 * @param {String} url
 * @param {Object} data
 * @param {Function} done
 */
var makeRequest = function(isJson, method, url, data, headers, done){
	var options = {
		url:		url,
		method:		method,
		json:		!!isJson
	};
	if (!!headers){
		options.headers = headers;
	}
	if (!!data){
		if (isJson){
			options.body = data;

		}else{
			options.form = data;

		}
	}
	request(options, function(err, resp, json){
		if (err){
			done(err);

		}else if (resp.statusCode >= 200 && resp.statusCode < 300){
			done(null, json);

		}else{
			var msg = resp.statusMessage;
			var errors = [];
			if (!!json && !!json.errors){
				errors = json.errors;
				if (json.errors.length > 0 && !!json.errors[0].message){
					msg = json.errors[0].message;
				}
			}
			err = new Error(msg);
			err.code = resp.statusCode;
			err.messages = errors;
			done(err);
		}
	});
};

function Client(host) {
	this.host = host;
}

/**
 * @param {String} accessToken
 * @param {String} url
 * @param {Function} done
 */
Client.prototype.getJson = function(accessToken, url, done){
	makeRequest(true, 'GET', url, null, {
		'Authorization': 'Bearer ' + accessToken
	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} url
 * @param {Object} data
 * @param {Function} done
 */
Client.prototype.postJson = function(accessToken, url, data, done){
	makeRequest(true, 'POST', url, data, {
		'Authorization': 'Bearer ' + accessToken
	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} url
 * @param {Object} data
 * @param {Function} done
 */
Client.prototype.patchJson = function(accessToken, url, data, done){
	makeRequest(true, 'PATCH', url, data, {
		'Authorization': 'Bearer ' + accessToken
	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} url
 * @param {Object} data
 * @param {Function} done
 */
Client.prototype.putJson = function(accessToken, url, data, done){
	makeRequest(true, 'PUT', url, data, {
		'Authorization': 'Bearer ' + accessToken
	}, done);
};

/**
 * @param {String} accessToken
 * @param {String} url
 * @param {Object} data
 * @param {Function} done
 */
Client.prototype.deleteJson = function(accessToken, url, data, done){
	makeRequest(true, 'DELETE', url, data, {
		'Authorization': 'Bearer ' + accessToken
	}, done);
};

/**
 * @param {String} url
 * @param {Object} data
 * @param {Function} done
 */
Client.prototype.post = function(url, data, done){
	makeRequest(false, 'POST', url, data, null, done);
};

/**
 * @param {String} url
 * @param {Object} [params]
 * @param {Object} [query]
 * @return {String}
 */
Client.prototype.createUrl = function(url, params, query){
	if (!!params) {
		for (var name in params) {
			url = url.replace(':' + name, encodeURIComponent(params[name]));
		}
	}
	if (!!query){
		url += '?' + qs.stringify(query);
	}
	return this.host + url;
};

/**
 * @param {String} url
 * @param {Object} params
 * @param {String} path
 * @param {Object} [query]
 * @return {string}
 */
Client.prototype.createPathUrl = function(url, params, path, query){
	if (!!params) {
		for (var name in params) {
			url = url.replace(':' + name, encodeURIComponent(params[name]));
		}
	}
	if (!path){
		path = '/';
	}
	path = encodeURIComponent(path);
	path = path.replace(/%2F/g, '/');
	url += path;
	if (!!query){
		url += '?' + qs.stringify(query);
	}
	return this.host + url;
};

module.exports = Client;