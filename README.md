# Buddy Works APIs Node.js Client
Official Node.js client library for [Buddy Continuous Integration](https://buddy.works) tool.

[![buddy pipeline](https://app.buddy.works/buddy-works/buddy-works-node-api/pipelines/pipeline/302002/badge.svg?token=be04e77cb21d0e7e611853e903e521ba233e01d46699a1e6dc00f85a853cbdd6 "buddy pipeline")](https://app.buddy.works/buddy-works/buddy-works-node-api/pipelines/pipeline/302002)

## Installation

This library is distributed on `npm`. In order to add it as a dependency, run the following command:

``` sh
$ npm install buddyworksapi --save
```
 
## Usage of OAauth

First, you need to add the application in your [Buddy ID](https://app.buddy.works/my-apps).

You will then obtain clientId & clientSecret to execute this code:

```javascript
var buddyworksapi = require('buddyworksapi');
buddyworksapi.useOAuth(clientId, clientSecret);
```

Next you can get AuthorizeUrl:

```javascript
buddyworksapi.oauth.getAuthorizeUrl(scopes, state, redirectUrl);
```
`scopes` are arrays of strings - [help](https://buddy.works/api/reference/getting-started/oauth#supported-scopes)

`state` should be an unguessable random string. It is used to protect against cross-site request forgery attacks.

`redirectUrl` is optional [more](https://buddy.works/api/reference/getting-started/oauth#web-application-flow)

You should redirect the user to the created URL. Upon authorization, the user should get back to your page (configured in application or passed to the method)

`query params` will get you the code & state. State should be the same as you passed before. Code is used in next step to exchange for access token:

```javascript
buddyworksapi.oauth.getAccessToken(code, redirectUrl, function(err, json){
	if (err) console.error(err);
	else{
		console.log(json.access_token);//token used to authenticate requests in API.
		console.log(json.expires_in);//time in seconds how long the token will be valid.
	}
});
```

## Usage of direct tokens

You can also use [API Tokens](https://app.buddy.works/api-tokens).

That functionality is provided for testing purposes and will only work for individual tokens generated per user.

All requests will be called on behalf of the user who provided token.
 
## Numerous API client instances

If you need more instances of the client API you can create them with the following code:

```javascript
var buddyworksapi = require('buddyworksapi');
var buddyworksapi2 = buddyworksapi.create();
```

## API's

For detailed info what send for which method, error codes, rates & limits - check [Buddy documentation](https://buddy.works/api/reference/getting-started/overview)

### Profile

Add email
```javascript
buddyworksapi.profile.addEmail(accessToken, email, function(err, json){});
```

Get emails
```javascript
buddyworksapi.profile.getEmails(accessToken, function(err, json){});
```

Delete email
```javascript
buddyworksapi.profile.deleteEmail(accessToken, email, function(err, json){});
```

Get profile
```javascript
buddyworksapi.profile.getProfile(accessToken, function(err, json){});
```

Add ssh key
```javascript
buddyworksapi.profile.addSshKey(accessToken, data, function(err, json){});
```

Delete ssh key
```javascript
buddyworksapi.profile.deleteSshKey(accessToken, keyId, function(err, json){});
```

Get ssh key
```javascript
buddyworksapi.profile.getSshKey(accessToken, keyId, function(err, json){});
```

Get ssh keys
```javascript
buddyworksapi.profile.getSshKeys(accessToken, function(err, json){});
```

### Integrations

Get integrations list
```javascript
buddyworksapi.integrations.getList(accessToken, domain, filters, function(err, json){});
```

Get integration
```javascript
buddyworksapi.integrations.getIntegration(accessToken, domain, integrationHash, function(err, json){});
```

Add integration
```javascript
buddyworksapi.integrations.addIntegration(accessToken, domain, data, function(err, json){});
```

Edit integration
```javascript
buddyworksapi.integrations.editIntegration(accessToken, domain, integrationHash, data, function(err, json){});
```

Delete integration
```javascript
buddyworksapi.integrations.deleteIntegration(accessToken, domain, integrationHash, function(err, json){});
```

### Workspaces

Workspaces list
```javascript
buddyworksapi.workspaces.getList(accessToken, function(err, json){});
```

Workspace details
```javascript
buddyworksapi.workspaces.getWorkspace(accessToken, domain, function(err, json){});
```

### Projects

Get projects list
```javascript
buddyworksapi.projects.getList(accessToken, domain, filters, function(err, json){});
```

Add project
```javascript
buddyworksapi.projects.addProject(accessToken, domain, data, function(err, json){});
```

Get project
```javascript
buddyworksapi.projects.getProject(accessToken, domain, projectName, function(err, json){});
```

Edit project
```javascript
buddyworksapi.projects.editProject(accessToken, domain, projectName, data, function(err, json){});
```

Delete project
```javascript
buddyworksapi.projects.deleteProject(accessToken, domain, projectName, function(err, json){});
```

Get project members
```javascript
buddyworksapi.projects.getProjectMembers(accessToken, domain, projectName, filters, function(err, json){});
```

Get project members
```javascript
buddyworksapi.projects.addProjectMember(accessToken, domain, projectName, data, function(err, json){});
```

Get project member
```javascript
buddyworksapi.projects.getProjectMember(accessToken, domain, projectName, memberId, function(err, json){});
```

Edit project member
```javascript
buddyworksapi.projects.editProjectMember(accessToken, domain, projectName, memberId, permissionId, function(err, json){});
```

Delete project member
```javascript
buddyworksapi.projects.deleteProjectMember(accessToken, domain, projectName, memberId, function(err, json){});
```

### Workspace members

Get workspace members
```javascript
buddyworksapi.members.getList(accessToken, domain, filters, function(err, json){});
```

Add workspace member
```javascript
buddyworksapi.members.addMember(accessToken, domain, email, function(err, json){});
```

Get workspace member
```javascript
buddyworksapi.members.getMember(accessToken, domain, memberId, function(err, json){});
```

Set member as administrator
```javascript
buddyworksapi.members.updateAdministrator(accessToken, domain, memberId, isAdmin, function(err, json){});
```

Delete workspace member
```javascript
buddyworksapi.members.deleteMember(accessToken, domain, memberId, function(err, json){});
```

Get member projects
```javascript
buddyworksapi.members.getMemberProjects(accessToken, domain, memberId, filters, function(err, json){});
```

### Groups

Get groups list
```javascript
buddyworksapi.groups.getList(accessToken, domain, function(err, json){});
```

Add group
```javascript
buddyworksapi.groups.addGroup(accessToken, domain, data, function(err, json){});
```

Get group
```javascript
buddyworksapi.groups.getGroup(accessToken, domain, groupId, function(err, json){});
```

Edit group
```javascript
buddyworksapi.groups.editGroup(accessToken, domain, groupId, data, function(err, json){});
```

Delete group
```javascript
buddyworksapi.groups.deleteGroup(accessToken, domain, groupId, function(err, json){});
```

Get group members
```javascript
buddyworksapi.groups.getGroupMembers(accessToken, domain, groupId, function(err, json){});
```

Add group member
```javascript
buddyworksapi.groups.addGroupMember(accessToken, domain, groupId, memberId, function(err, json){});
```

Get group member
```javascript
buddyworksapi.groups.getGroupMember(accessToken, domain, groupId, memberId, function(err, json){});
```

Delete group member
```javascript
buddyworksapi.groups.deleteGroupMember(accessToken, domain, groupId, memberId, function(err, json){});
```

### Permissions

Get permissions list
```javascript
buddyworksapi.permissions.getList(accessToken, domain, function(err, json){});
```

Add permission
```javascript
buddyworksapi.permissions.addPermission(accessToken, domain, data, function(err, json){});
```

Get permission
```javascript
buddyworksapi.permissions.getPermission(accessToken, domain, permissionId, function(err, json){});
```

Edit permission
```javascript
buddyworksapi.permissions.editPermission(accessToken, domain, permissionId, data, function(err, json){});
```

Delete permission
```javascript
buddyworksapi.permissions.deletePermission(accessToken, domain, permissionId, function(err, json){});
```

### Webhooks

Delete permission
```javascript
buddyworksapi.webhooks.getList(accessToken, domain, function(err, json){});
```

Add webhook
```javascript
buddyworksapi.webhooks.addWebhook(accessToken, domain, data, function(err, json){});
```

Get webhook
```javascript
buddyworksapi.webhooks.getWebhook(accessToken, domain, webhookId, function(err, json){});
```

Edit webhook
```javascript
buddyworksapi.webhooks.editWebhook(accessToken, domain, webhookId, data, function(err, json){});
```

Delete webhook
```javascript
buddyworksapi.webhooks.deleteWebhook(accessToken, domain, webhookId, function(err, json){});
```

### Source

Get contents
```javascript
buddyworksapi.source.getContents(accessToken, domain, projectName, path, filters, function(err, json){});
```

Add file
```javascript
buddyworksapi.source.addFile(accessToken, domain, projectName, data, function(err, json){});
```

Edit file
```javascript
buddyworksapi.source.editFile(accessToken, domain, projectName, path, data, function(err, json){});
```

Delete file
```javascript
buddyworksapi.source.deleteFile(accessToken, domain, projectName, path, data, function(err, json){});
```

### Commits

Get commits
```javascript
buddyworksapi.commits.getList(accessToken, domain, projectName, filters, function(err, json){});
```

Get commit
```javascript
buddyworksapi.commits.getCommit(accessToken, domain, projectName, revision, function(err, json){});
```

Get compare
```javascript
buddyworksapi.commits.getCompare(accessToken, domain, projectName, base, head, filters, function(err, json){});
```

### Tags

Get tags
```javascript
buddyworksapi.tags.getList(accessToken, domain, projectName, function(err, json){});
```

Get tag
```javascript
buddyworksapi.tags.getTag(accessToken, domain, projectName, name, function(err, json){});
```

### Branches

Get branches
```javascript
buddyworksapi.branches.getList(accessToken, domain, projectName, function(err, json){});
```

Get branch revision
```javascript
buddyworksapi.branches.getRevision(accessToken, domain, projectName, name, function(err, json){});
```

Add branch
```javascript
buddyworksapi.branches.addBranch(accessToken, domain, projectName, data, function(err, json){});
```

Delete branch
```javascript
buddyworksapi.branches.deleteBranch(accessToken, domain, projectName, name, force, function(err, json){});
```

### Pipelines

Get pipelines
```javascript
buddyworksapi.pipelines.getList(accessToken, domain, projectName, filters, function(err, json){});
```

Add pipeline
```javascript
buddyworksapi.pipelines.addPipeline(accessToken, domain, projectName, data, function(err, json){});
```

Get pipeline
```javascript
buddyworksapi.pipelines.getPipeline(accessToken, domain, projectName, pipelineId, function(err, json){});
```

Edit pipeline
```javascript
buddyworksapi.pipelines.editPipeline(accessToken, domain, projectName, pipelineId, data, function(err, json){});
```

Delete pipeline
```javascript
buddyworksapi.pipelines.deletePipeline(accessToken, domain, projectName, pipelineId, function(err, json){});
```

Get pipeline actions
```javascript
buddyworksapi.pipelines.getPipelineActions(accessToken, domain, projectName, pipelineId, filters, function(err, json){});
```

Add pipeline action
```javascript
buddyworksapi.pipelines.addPipelineAction(accessToken, domain, projectName, pipelineId, data, function(err, json){});
```

Get pipeline action
```javascript
buddyworksapi.pipelines.getPipelineAction(accessToken, domain, projectName, pipelineId, actionId, function(err, json){});
```

Edit pipeline action
```javascript
buddyworksapi.pipelines.editPipelineAction(accessToken, domain, projectName, pipelineId, actionId, data, function(err, json){});
```

Delete pipeline action
```javascript
buddyworksapi.pipelines.deletePipelineAction(accessToken, domain, projectName, pipelineId, actionId, function(err, json){});
```

### Executions

Get executions
```javascript
buddyworksapi.executions.getList(accessToken, domain, projectName, pipelineId, filters, function(err, json){});
```

Run execution
```javascript
buddyworksapi.executions.runExecution(accessToken, domain, projectName, pipelineId, data, function(err, json){});
```

Get execution
```javascript
buddyworksapi.executions.getExecution(accessToken, domain, projectName, pipelineId, executionId, function(err, json){});
```

Cancel execution
```javascript
buddyworksapi.executions.cancelExecution(accessToken, domain, projectName, pipelineId, executionId, function(err, json){});
```

Retry execution
```javascript
buddyworksapi.executions.retryExecution(accessToken, domain, projectName, pipelineId, executionId, function(err, json){});
```
