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
var crypto = require('crypto');
var Utils = function(){

	var e = 0;
	var n = 0;
	var t = 0;

	/**
	 * @return {string}
	 */
	this.createRandomEmail = function(){
		e++;
		return this.createRandomText() + Date.now() + '' + e + '@mailinator.com';
	};

	/**
	 * @return {string}
	 */
	this.createRandomText = function(){
		t++;
		return crypto.randomBytes(Math.ceil(12/2)).toString('hex').slice(0,12) + '' + t;
	};

	/**
	 * @param {Number} [atLeastdaysAgo]
	 * @return {Date}
	 */
	this.createRandomPastDate = function(atLeastdaysAgo){
		if (!atLeastdaysAgo){
			atLeastdaysAgo = 0;
		}
		//losuje od 1 do 100 dni
		atLeastdaysAgo += Math.floor((Math.random() * 100) + 1);
		var now = new Date();
		now.setTime(now.getTime() - atLeastdaysAgo*24*60*60*1000);
		return now;
	};

	/**
	 * @return {number}
	 */
	this.createRandomNumber = function(){
		n++;
		return Number(Date.now() + '' + n);
	};

};
module.exports = new Utils();