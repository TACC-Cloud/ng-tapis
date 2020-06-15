/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ApplicationFormResponse } from '../models/application-form-response';
import { ApplicationOperationRequest } from '../models/application-operation-request';
import { ApplicationPermissionRequest } from '../models/application-permission-request';
import { ApplicationPermissionResponse } from '../models/application-permission-response';
import { ApplicationRequest } from '../models/application-request';
import { EmptyApplicationResponse } from '../models/empty-application-response';
import { EmptyJobResponse } from '../models/empty-job-response';
import { EmptyMetadataResponse } from '../models/empty-metadata-response';
import { EmptyNotificationResponse } from '../models/empty-notification-response';
import { EmptyRemoteFileResponse } from '../models/empty-remote-file-response';
import { EmptySystemResponse } from '../models/empty-system-response';
import { FileHistoryResponse } from '../models/file-history-response';
import { FileOperationRequest } from '../models/file-operation-request';
import { FilePermissionRequest } from '../models/file-permission-request';
import { JobHistoryResponse } from '../models/job-history-response';
import { JobOperationRequest } from '../models/job-operation-request';
import { JobPermissionRequest } from '../models/job-permission-request';
import { JobPermissionResponse } from '../models/job-permission-response';
import { JobRequest } from '../models/job-request';
import { JobStatusResponse } from '../models/job-status-response';
import { MetadataPermissionRequest } from '../models/metadata-permission-request';
import { MetadataPermissionResponse } from '../models/metadata-permission-response';
import { MetadataRequest } from '../models/metadata-request';
import { MetadataResponse } from '../models/metadata-response';
import { MetadataSchemaPermissionResponse } from '../models/metadata-schema-permission-response';
import { MetadataSchemaResponse } from '../models/metadata-schema-response';
import { MultipleApplicationResponse } from '../models/multiple-application-response';
import { MultipleJobResponse } from '../models/multiple-job-response';
import { MultipleMetadataPermissionResponse } from '../models/multiple-metadata-permission-response';
import { MultipleMetadataResponse } from '../models/multiple-metadata-response';
import { MultipleMetadataSchemaPermissionResponse } from '../models/multiple-metadata-schema-permission-response';
import { MultipleNotificationResponse } from '../models/multiple-notification-response';
import { MultiplePermissionResponse } from '../models/multiple-permission-response';
import { MultiplePostItResponse } from '../models/multiple-post-it-response';
import { MultipleRemoteFileResponse } from '../models/multiple-remote-file-response';
import { MultipleSystemResponse } from '../models/multiple-system-response';
import { MultipleSystemRoleResponse } from '../models/multiple-system-role-response';
import { NotificationRequest } from '../models/notification-request';
import { NotificationResponse } from '../models/notification-response';
import { PostIt } from '../models/post-it';
import { PostItRequest } from '../models/post-it-request';
import { SingleApplicationResponse } from '../models/single-application-response';
import { SingleJobResponse } from '../models/single-job-response';
import { SinglePostItResponse } from '../models/single-post-it-response';
import { SingleRemoteFileResponse } from '../models/single-remote-file-response';
import { SingleSystemResponse } from '../models/single-system-response';
import { SystemOperationRequest } from '../models/system-operation-request';
import { SystemRequest } from '../models/system-request';
import { SystemRole } from '../models/system-role';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation appsList
   */
  static readonly AppsListPath = '/apps/v2/';

  /**
   * Get a list of available applications.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsList()` instead.
   *
   * This method doesn't expect any response body
   */
  appsList$Response(params?: {

    /**
     * Whether to return only public apps.
     */
    publicOnly?: string;

    /**
     * Whether to return only private apps.
     */
    privateOnly?: string;

  }): Observable<StrictHttpResponse<MultipleApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsListPath, 'get');
    if (params) {

      rb.query('publicOnly', params.publicOnly);
      rb.query('privateOnly', params.privateOnly);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleApplicationResponse>;
      })
    );
  }

  /**
   * Get a list of available applications.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsList$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsList(params?: {

    /**
     * Whether to return only public apps.
     */
    publicOnly?: string;

    /**
     * Whether to return only private apps.
     */
    privateOnly?: string;

  }): Observable<MultipleApplicationResponse> {

    return this.appsList$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleApplicationResponse>) => r.body as MultipleApplicationResponse)
    );
  }

  /**
   * Path part for operation appsAddUpdate
   */
  static readonly AppsAddUpdatePath = '/apps/v2/';

  /**
   * Register and update new applications.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsAddUpdate$Response(params: {

  
  /**
   * The description of the app to add or update.
   */
  body: ApplicationRequest
  }): Observable<StrictHttpResponse<SingleApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsAddUpdatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleApplicationResponse>;
      })
    );
  }

  /**
   * Register and update new applications.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsAddUpdate(params: {

  
  /**
   * The description of the app to add or update.
   */
  body: ApplicationRequest
  }): Observable<SingleApplicationResponse> {

    return this.appsAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<SingleApplicationResponse>) => r.body as SingleApplicationResponse)
    );
  }

  /**
   * Path part for operation appsGet
   */
  static readonly AppsGetPath = '/apps/v2/{appId}';

  /**
   * Get details of an application by it's unique id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  appsGet$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  }): Observable<StrictHttpResponse<SingleApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsGetPath, 'get');
    if (params) {

      rb.path('appId', params.appId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleApplicationResponse>;
      })
    );
  }

  /**
   * Get details of an application by it's unique id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsGet(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  }): Observable<SingleApplicationResponse> {

    return this.appsGet$Response(params).pipe(
      map((r: StrictHttpResponse<SingleApplicationResponse>) => r.body as SingleApplicationResponse)
    );
  }

  /**
   * Path part for operation appsEdit
   */
  static readonly AppsEditPath = '/apps/v2/{appId}';

  /**
   * Edit an application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsEdit()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsEdit$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  
  /**
   * The operation to perform.
   */
  body: ApplicationOperationRequest
  }): Observable<StrictHttpResponse<SingleApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsEditPath, 'put');
    if (params) {

      rb.path('appId', params.appId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleApplicationResponse>;
      })
    );
  }

  /**
   * Edit an application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsEdit$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsEdit(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  
  /**
   * The operation to perform.
   */
  body: ApplicationOperationRequest
  }): Observable<SingleApplicationResponse> {

    return this.appsEdit$Response(params).pipe(
      map((r: StrictHttpResponse<SingleApplicationResponse>) => r.body as SingleApplicationResponse)
    );
  }

  /**
   * Path part for operation appsUpdate
   */
  static readonly AppsUpdatePath = '/apps/v2/{appId}';

  /**
   * Update an application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsUpdate$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  
  /**
   * The description of the app to add or update.
   */
  body: ApplicationRequest
  }): Observable<StrictHttpResponse<SingleApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsUpdatePath, 'post');
    if (params) {

      rb.path('appId', params.appId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleApplicationResponse>;
      })
    );
  }

  /**
   * Update an application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsUpdate(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  
  /**
   * The description of the app to add or update.
   */
  body: ApplicationRequest
  }): Observable<SingleApplicationResponse> {

    return this.appsUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<SingleApplicationResponse>) => r.body as SingleApplicationResponse)
    );
  }

  /**
   * Path part for operation appsDelete
   */
  static readonly AppsDeletePath = '/apps/v2/{appId}';

  /**
   * Deletes an application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  appsDelete$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  }): Observable<StrictHttpResponse<EmptyApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsDeletePath, 'delete');
    if (params) {

      rb.path('appId', params.appId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyApplicationResponse>;
      })
    );
  }

  /**
   * Deletes an application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsDelete(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  }): Observable<EmptyApplicationResponse> {

    return this.appsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyApplicationResponse>) => r.body as EmptyApplicationResponse)
    );
  }

  /**
   * Path part for operation appsPemsList
   */
  static readonly AppsPemsListPath = '/apps/v2/{appId}/pems';

  /**
   * Get the permission ACL for this application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsPemsList()` instead.
   *
   * This method doesn't expect any response body
   */
  appsPemsList$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  }): Observable<StrictHttpResponse<ApplicationPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsPemsListPath, 'get');
    if (params) {

      rb.path('appId', params.appId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApplicationPermissionResponse>;
      })
    );
  }

  /**
   * Get the permission ACL for this application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsPemsList$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsPemsList(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  }): Observable<ApplicationPermissionResponse> {

    return this.appsPemsList$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationPermissionResponse>) => r.body as ApplicationPermissionResponse)
    );
  }

  /**
   * Path part for operation appsPemsAddUpdate
   */
  static readonly AppsPemsAddUpdatePath = '/apps/v2/{appId}/pems';

  /**
   * Add or update a user's permission for an application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsPemsAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsPemsAddUpdate$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  
  /**
   * The permission add or update.
   */
  body: ApplicationPermissionRequest
  }): Observable<StrictHttpResponse<EmptyApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsPemsAddUpdatePath, 'post');
    if (params) {

      rb.path('appId', params.appId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyApplicationResponse>;
      })
    );
  }

  /**
   * Add or update a user's permission for an application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsPemsAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsPemsAddUpdate(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  
  /**
   * The permission add or update.
   */
  body: ApplicationPermissionRequest
  }): Observable<EmptyApplicationResponse> {

    return this.appsPemsAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyApplicationResponse>) => r.body as EmptyApplicationResponse)
    );
  }

  /**
   * Path part for operation appsPemsDelete
   */
  static readonly AppsPemsDeletePath = '/apps/v2/{appId}/pems';

  /**
   * Deletes all permissions on an application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsPemsDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  appsPemsDelete$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  }): Observable<StrictHttpResponse<EmptyApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsPemsDeletePath, 'delete');
    if (params) {

      rb.path('appId', params.appId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyApplicationResponse>;
      })
    );
  }

  /**
   * Deletes all permissions on an application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsPemsDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsPemsDelete(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

  }): Observable<EmptyApplicationResponse> {

    return this.appsPemsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyApplicationResponse>) => r.body as EmptyApplicationResponse)
    );
  }

  /**
   * Path part for operation appsPemsListByUsername
   */
  static readonly AppsPemsListByUsernamePath = '/apps/v2/{appId}/pems/{username}';

  /**
   * Get a specific user's permissions for an application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsPemsListByUsername()` instead.
   *
   * This method doesn't expect any response body
   */
  appsPemsListByUsername$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

    /**
     * The username of the api user associated with the permission.
     */
    username: string;

  }): Observable<StrictHttpResponse<ApplicationPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsPemsListByUsernamePath, 'get');
    if (params) {

      rb.path('appId', params.appId);
      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApplicationPermissionResponse>;
      })
    );
  }

  /**
   * Get a specific user's permissions for an application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsPemsListByUsername$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsPemsListByUsername(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

    /**
     * The username of the api user associated with the permission.
     */
    username: string;

  }): Observable<ApplicationPermissionResponse> {

    return this.appsPemsListByUsername$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationPermissionResponse>) => r.body as ApplicationPermissionResponse)
    );
  }

  /**
   * Path part for operation appsPemsAddUpdateByUsername
   */
  static readonly AppsPemsAddUpdateByUsernamePath = '/apps/v2/{appId}/pems/{username}';

  /**
   * Add or update a user's permission for an application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsPemsAddUpdateByUsername()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsPemsAddUpdateByUsername$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

    /**
     * The username of the api user associated with the permission
     */
    username: string;

  
  /**
   * The permission add or update.
   */
  body: ApplicationPermissionRequest
  }): Observable<StrictHttpResponse<EmptyApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsPemsAddUpdateByUsernamePath, 'post');
    if (params) {

      rb.path('appId', params.appId);
      rb.path('username', params.username);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyApplicationResponse>;
      })
    );
  }

  /**
   * Add or update a user's permission for an application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsPemsAddUpdateByUsername$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  appsPemsAddUpdateByUsername(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

    /**
     * The username of the api user associated with the permission
     */
    username: string;

  
  /**
   * The permission add or update.
   */
  body: ApplicationPermissionRequest
  }): Observable<EmptyApplicationResponse> {

    return this.appsPemsAddUpdateByUsername$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyApplicationResponse>) => r.body as EmptyApplicationResponse)
    );
  }

  /**
   * Path part for operation appsPemsDeleteByUsername
   */
  static readonly AppsPemsDeleteByUsernamePath = '/apps/v2/{appId}/pems/{username}';

  /**
   * Deletes all permissions for the given user on an application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsPemsDeleteByUsername()` instead.
   *
   * This method doesn't expect any response body
   */
  appsPemsDeleteByUsername$Response(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

    /**
     * The username of the api user associated with the permission
     */
    username: string;

  }): Observable<StrictHttpResponse<EmptyApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsPemsDeleteByUsernamePath, 'delete');
    if (params) {

      rb.path('appId', params.appId);
      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyApplicationResponse>;
      })
    );
  }

  /**
   * Deletes all permissions for the given user on an application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsPemsDeleteByUsername$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsPemsDeleteByUsername(params: {

    /**
     * The id of the application. The application id is made up of the name and version separated by a dash.
     */
    appId: string;

    /**
     * The username of the api user associated with the permission
     */
    username: string;

  }): Observable<EmptyApplicationResponse> {

    return this.appsPemsDeleteByUsername$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyApplicationResponse>) => r.body as EmptyApplicationResponse)
    );
  }

  /**
   * Path part for operation appsListByName
   */
  static readonly AppsListByNamePath = '/apps/v2/name/{name}';

  /**
   * Get a list of applications with the given name.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsListByName()` instead.
   *
   * This method doesn't expect any response body
   */
  appsListByName$Response(params: {

    /**
     * The name of the application. This should not include the version number.
     */
    name: string;

    /**
     * Whether to return only public apps.
     */
    publicOnly?: string;

    /**
     * Whether to return only private apps.
     */
    privateOnly?: string;

  }): Observable<StrictHttpResponse<MultipleApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsListByNamePath, 'get');
    if (params) {

      rb.path('name', params.name);
      rb.query('publicOnly', params.publicOnly);
      rb.query('privateOnly', params.privateOnly);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleApplicationResponse>;
      })
    );
  }

  /**
   * Get a list of applications with the given name.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsListByName$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsListByName(params: {

    /**
     * The name of the application. This should not include the version number.
     */
    name: string;

    /**
     * Whether to return only public apps.
     */
    publicOnly?: string;

    /**
     * Whether to return only private apps.
     */
    privateOnly?: string;

  }): Observable<MultipleApplicationResponse> {

    return this.appsListByName$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleApplicationResponse>) => r.body as MultipleApplicationResponse)
    );
  }

  /**
   * Path part for operation appsGetByTag
   */
  static readonly AppsGetByTagPath = '/apps/v2/tag/{tag}';

  /**
   * Get a list of applications with the given tag.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsGetByTag()` instead.
   *
   * This method doesn't expect any response body
   */
  appsGetByTag$Response(params: {

    /**
     * The tag of the application.
     */
    tag: string;

    /**
     * Whether to return only public apps.
     */
    publicOnly?: string;

    /**
     * Whether to return only private apps.
     */
    privateOnly?: string;

  }): Observable<StrictHttpResponse<MultipleApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsGetByTagPath, 'get');
    if (params) {

      rb.path('tag', params.tag);
      rb.query('publicOnly', params.publicOnly);
      rb.query('privateOnly', params.privateOnly);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleApplicationResponse>;
      })
    );
  }

  /**
   * Get a list of applications with the given tag.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsGetByTag$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsGetByTag(params: {

    /**
     * The tag of the application.
     */
    tag: string;

    /**
     * Whether to return only public apps.
     */
    publicOnly?: string;

    /**
     * Whether to return only private apps.
     */
    privateOnly?: string;

  }): Observable<MultipleApplicationResponse> {

    return this.appsGetByTag$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleApplicationResponse>) => r.body as MultipleApplicationResponse)
    );
  }

  /**
   * Path part for operation appsFormByName
   */
  static readonly AppsFormByNamePath = '/apps/v2/{uniqueName}/form';

  /**
   * Get a submission form for the named application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appsFormByName()` instead.
   *
   * This method doesn't expect any response body
   */
  appsFormByName$Response(params: {
    uniqueName: string;

  }): Observable<StrictHttpResponse<ApplicationFormResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.AppsFormByNamePath, 'get');
    if (params) {

      rb.path('uniqueName', params.uniqueName);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApplicationFormResponse>;
      })
    );
  }

  /**
   * Get a submission form for the named application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appsFormByName$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  appsFormByName(params: {
    uniqueName: string;

  }): Observable<ApplicationFormResponse> {

    return this.appsFormByName$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationFormResponse>) => r.body as ApplicationFormResponse)
    );
  }

  /**
   * Path part for operation filesDownload
   */
  static readonly FilesDownloadPath = '/files/v2/media/system/{systemId}/{filePath}';

  /**
   * Download a file from the user's default storage location.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesDownload()` instead.
   *
   * This method doesn't expect any response body
   */
  filesDownload$Response(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesDownloadPath, 'get');
    if (params) {

      rb.path('systemId', params.systemId);
      rb.path('filePath', params.filePath);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Download a file from the user's default storage location.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesDownload$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  filesDownload(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  }): Observable<void> {

    return this.filesDownload$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation filesActions
   */
  static readonly FilesActionsPath = '/files/v2/media/system/{systemId}/{filePath}';

  /**
   * Perform an action on a file or folder.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesActions()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  filesActions$Response(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  
  /**
   * The operation to perform.
   */
  body: FileOperationRequest
  }): Observable<StrictHttpResponse<EmptyRemoteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesActionsPath, 'put');
    if (params) {

      rb.path('systemId', params.systemId);
      rb.path('filePath', params.filePath);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyRemoteFileResponse>;
      })
    );
  }

  /**
   * Perform an action on a file or folder.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesActions$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  filesActions(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  
  /**
   * The operation to perform.
   */
  body: FileOperationRequest
  }): Observable<EmptyRemoteFileResponse> {

    return this.filesActions$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyRemoteFileResponse>) => r.body as EmptyRemoteFileResponse)
    );
  }

  /**
   * Path part for operation filesImport
   */
  static readonly FilesImportPath = '/files/v2/media/system/{systemId}/{filePath}';

  /**
   * Import a file via direct upload or importing from a url to the user's default storage location.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesImport()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  filesImport$Response(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

    body?: { 'fileType': string, 'callbackURL': string, 'fileName': string, 'urlToIngest': string, 'fileToUpload': string }
  }): Observable<StrictHttpResponse<SingleRemoteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesImportPath, 'post');
    if (params) {

      rb.path('systemId', params.systemId);
      rb.path('filePath', params.filePath);

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleRemoteFileResponse>;
      })
    );
  }

  /**
   * Import a file via direct upload or importing from a url to the user's default storage location.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesImport$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  filesImport(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

    body?: { 'fileType': string, 'callbackURL': string, 'fileName': string, 'urlToIngest': string, 'fileToUpload': string }
  }): Observable<SingleRemoteFileResponse> {

    return this.filesImport$Response(params).pipe(
      map((r: StrictHttpResponse<SingleRemoteFileResponse>) => r.body as SingleRemoteFileResponse)
    );
  }

  /**
   * Path part for operation filesDelete
   */
  static readonly FilesDeletePath = '/files/v2/media/system/{systemId}/{filePath}';

  /**
   * Deletes a file or folder.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  filesDelete$Response(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  }): Observable<StrictHttpResponse<EmptyRemoteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesDeletePath, 'delete');
    if (params) {

      rb.path('systemId', params.systemId);
      rb.path('filePath', params.filePath);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyRemoteFileResponse>;
      })
    );
  }

  /**
   * Deletes a file or folder.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  filesDelete(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  }): Observable<EmptyRemoteFileResponse> {

    return this.filesDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyRemoteFileResponse>) => r.body as EmptyRemoteFileResponse)
    );
  }

  /**
   * Path part for operation filesList
   */
  static readonly FilesListPath = '/files/v2/listings/system/{systemId}/{filePath}';

  /**
   * Get a remote directory listing on a specific system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesList()` instead.
   *
   * This method doesn't expect any response body
   */
  filesList$Response(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

    /**
     * The number of files to skip before starting to collect the listing
     */
    offset?: number;

    /**
     * The numbers of files to return
     */
    limit?: number;

  }): Observable<StrictHttpResponse<MultipleRemoteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesListPath, 'get');
    if (params) {

      rb.path('systemId', params.systemId);
      rb.path('filePath', params.filePath);
      rb.query('offset', params.offset);
      rb.query('limit', params.limit);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleRemoteFileResponse>;
      })
    );
  }

  /**
   * Get a remote directory listing on a specific system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesList$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  filesList(params: {

    /**
     * The unique id of the system on which the data resides.
     */
    systemId: string;

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

    /**
     * The number of files to skip before starting to collect the listing
     */
    offset?: number;

    /**
     * The numbers of files to return
     */
    limit?: number;

  }): Observable<MultipleRemoteFileResponse> {

    return this.filesList$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleRemoteFileResponse>) => r.body as MultipleRemoteFileResponse)
    );
  }

  /**
   * Path part for operation filesHistoryDefault
   */
  static readonly FilesHistoryDefaultPath = '/files/v2/history/{filePath}';

  /**
   * Get file history.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesHistoryDefault()` instead.
   *
   * This method doesn't expect any response body
   */
  filesHistoryDefault$Response(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  }): Observable<StrictHttpResponse<FileHistoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesHistoryDefaultPath, 'get');
    if (params) {

      rb.path('filePath', params.filePath);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileHistoryResponse>;
      })
    );
  }

  /**
   * Get file history.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesHistoryDefault$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  filesHistoryDefault(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  }): Observable<FileHistoryResponse> {

    return this.filesHistoryDefault$Response(params).pipe(
      map((r: StrictHttpResponse<FileHistoryResponse>) => r.body as FileHistoryResponse)
    );
  }

  /**
   * Path part for operation filesHistory
   */
  static readonly FilesHistoryPath = '/files/v2/history/system/{systemId}/{filePath}';

  /**
   * Download a file from the user's default storage location.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesHistory()` instead.
   *
   * This method doesn't expect any response body
   */
  filesHistory$Response(params: {

    /**
     * The path of the file relative to the given system root location.
     */
    filePath: string;
    systemId: string;

  }): Observable<StrictHttpResponse<FileHistoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesHistoryPath, 'get');
    if (params) {

      rb.path('filePath', params.filePath);
      rb.path('systemId', params.systemId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileHistoryResponse>;
      })
    );
  }

  /**
   * Download a file from the user's default storage location.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesHistory$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  filesHistory(params: {

    /**
     * The path of the file relative to the given system root location.
     */
    filePath: string;
    systemId: string;

  }): Observable<FileHistoryResponse> {

    return this.filesHistory$Response(params).pipe(
      map((r: StrictHttpResponse<FileHistoryResponse>) => r.body as FileHistoryResponse)
    );
  }

  /**
   * Path part for operation filesPemsDefault
   */
  static readonly FilesPemsDefaultPath = '/files/v2/pems/{filePath}';

  /**
   * List all the share permissions for a file or folder.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesPemsDefault()` instead.
   *
   * This method doesn't expect any response body
   */
  filesPemsDefault$Response(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  }): Observable<StrictHttpResponse<MultiplePermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesPemsDefaultPath, 'get');
    if (params) {

      rb.path('filePath', params.filePath);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultiplePermissionResponse>;
      })
    );
  }

  /**
   * List all the share permissions for a file or folder.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesPemsDefault$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  filesPemsDefault(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  }): Observable<MultiplePermissionResponse> {

    return this.filesPemsDefault$Response(params).pipe(
      map((r: StrictHttpResponse<MultiplePermissionResponse>) => r.body as MultiplePermissionResponse)
    );
  }

  /**
   * Path part for operation filesPemsDefaultAddUpdate
   */
  static readonly FilesPemsDefaultAddUpdatePath = '/files/v2/pems/{filePath}';

  /**
   * Update permissions for a single user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesPemsDefaultAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  filesPemsDefaultAddUpdate$Response(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  
  /**
   * The permission add or update.
   */
  body: FilePermissionRequest
  }): Observable<StrictHttpResponse<EmptyRemoteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesPemsDefaultAddUpdatePath, 'post');
    if (params) {

      rb.path('filePath', params.filePath);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyRemoteFileResponse>;
      })
    );
  }

  /**
   * Update permissions for a single user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesPemsDefaultAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  filesPemsDefaultAddUpdate(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;

  
  /**
   * The permission add or update.
   */
  body: FilePermissionRequest
  }): Observable<EmptyRemoteFileResponse> {

    return this.filesPemsDefaultAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyRemoteFileResponse>) => r.body as EmptyRemoteFileResponse)
    );
  }

  /**
   * Path part for operation filesPemsAddUpdate
   */
  static readonly FilesPemsAddUpdatePath = '/files/v2/pems/system/{systemId}/{filePath}';

  /**
   * List all the share permissions for a file or folder.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesPemsAddUpdate()` instead.
   *
   * This method doesn't expect any response body
   */
  filesPemsAddUpdate$Response(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;
    systemId: string;

  }): Observable<StrictHttpResponse<MultiplePermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesPemsAddUpdatePath, 'get');
    if (params) {

      rb.path('filePath', params.filePath);
      rb.path('systemId', params.systemId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultiplePermissionResponse>;
      })
    );
  }

  /**
   * List all the share permissions for a file or folder.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesPemsAddUpdate$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  filesPemsAddUpdate(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;
    systemId: string;

  }): Observable<MultiplePermissionResponse> {

    return this.filesPemsAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<MultiplePermissionResponse>) => r.body as MultiplePermissionResponse)
    );
  }

  /**
   * Path part for operation filesPemsAddUpdateByUser
   */
  static readonly FilesPemsAddUpdateByUserPath = '/files/v2/pems/system/{systemId}/{filePath}';

  /**
   * Update permissions for a single user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesPemsAddUpdateByUser()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  filesPemsAddUpdateByUser$Response(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;
    systemId: string;

  
  /**
   * The permission add or update.
   */
  body: FilePermissionRequest
  }): Observable<StrictHttpResponse<EmptyRemoteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesPemsAddUpdateByUserPath, 'post');
    if (params) {

      rb.path('filePath', params.filePath);
      rb.path('systemId', params.systemId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyRemoteFileResponse>;
      })
    );
  }

  /**
   * Update permissions for a single user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesPemsAddUpdateByUser$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  filesPemsAddUpdateByUser(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;
    systemId: string;

  
  /**
   * The permission add or update.
   */
  body: FilePermissionRequest
  }): Observable<EmptyRemoteFileResponse> {

    return this.filesPemsAddUpdateByUser$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyRemoteFileResponse>) => r.body as EmptyRemoteFileResponse)
    );
  }

  /**
   * Path part for operation filesPemsDelete
   */
  static readonly FilesPemsDeletePath = '/files/v2/pems/system/{systemId}/{filePath}';

  /**
   * Deletes all permissions on a file except those of the owner.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesPemsDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  filesPemsDelete$Response(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;
    systemId: string;

  }): Observable<StrictHttpResponse<EmptyRemoteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.FilesPemsDeletePath, 'delete');
    if (params) {

      rb.path('filePath', params.filePath);
      rb.path('systemId', params.systemId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyRemoteFileResponse>;
      })
    );
  }

  /**
   * Deletes all permissions on a file except those of the owner.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `filesPemsDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  filesPemsDelete(params: {

    /**
     * The path of the file relative to the user&#x27;s default storage location.
     */
    filePath: string;
    systemId: string;

  }): Observable<EmptyRemoteFileResponse> {

    return this.filesPemsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyRemoteFileResponse>) => r.body as EmptyRemoteFileResponse)
    );
  }

  /**
   * Path part for operation jobsList
   */
  static readonly JobsListPath = '/jobs/v2/';

  /**
   * Get a list of jobs the authenticated user had submitted.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsList()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsList$Response(params?: {

  }): Observable<StrictHttpResponse<MultipleJobResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsListPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleJobResponse>;
      })
    );
  }

  /**
   * Get a list of jobs the authenticated user had submitted.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsList$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsList(params?: {

  }): Observable<MultipleJobResponse> {

    return this.jobsList$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleJobResponse>) => r.body as MultipleJobResponse)
    );
  }

  /**
   * Path part for operation jobsCreate
   */
  static readonly JobsCreatePath = '/jobs/v2/';

  /**
   * Submit a new job request.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsCreate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  jobsCreate$Response(params: {

  
  /**
   * The description of the job to submit. This can be either a file upload or json posted to the request body.
   */
  body: JobRequest
  }): Observable<StrictHttpResponse<SingleJobResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsCreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleJobResponse>;
      })
    );
  }

  /**
   * Submit a new job request.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  jobsCreate(params: {

  
  /**
   * The description of the job to submit. This can be either a file upload or json posted to the request body.
   */
  body: JobRequest
  }): Observable<SingleJobResponse> {

    return this.jobsCreate$Response(params).pipe(
      map((r: StrictHttpResponse<SingleJobResponse>) => r.body as SingleJobResponse)
    );
  }

  /**
   * Path part for operation jobsGet
   */
  static readonly JobsGetPath = '/jobs/v2/{jobId}';

  /**
   * Get details of the job with the specific job id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsGet$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<StrictHttpResponse<SingleJobResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsGetPath, 'get');
    if (params) {

      rb.path('jobId', params.jobId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleJobResponse>;
      })
    );
  }

  /**
   * Get details of the job with the specific job id.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsGet(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<SingleJobResponse> {

    return this.jobsGet$Response(params).pipe(
      map((r: StrictHttpResponse<SingleJobResponse>) => r.body as SingleJobResponse)
    );
  }

  /**
   * Path part for operation jobsActions
   */
  static readonly JobsActionsPath = '/jobs/v2/{jobId}';

  /**
   * Perform an action on a job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsActions()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  jobsActions$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  
  /**
   * The operation to perform.
   */
  body: JobOperationRequest
  }): Observable<StrictHttpResponse<SingleJobResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsActionsPath, 'post');
    if (params) {

      rb.path('jobId', params.jobId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleJobResponse>;
      })
    );
  }

  /**
   * Perform an action on a job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsActions$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  jobsActions(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  
  /**
   * The operation to perform.
   */
  body: JobOperationRequest
  }): Observable<SingleJobResponse> {

    return this.jobsActions$Response(params).pipe(
      map((r: StrictHttpResponse<SingleJobResponse>) => r.body as SingleJobResponse)
    );
  }

  /**
   * Path part for operation jobsDelete
   */
  static readonly JobsDeletePath = '/jobs/v2/{jobId}';

  /**
   * Deletes a job from the user's history.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsDelete$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<StrictHttpResponse<EmptyJobResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsDeletePath, 'delete');
    if (params) {

      rb.path('jobId', params.jobId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyJobResponse>;
      })
    );
  }

  /**
   * Deletes a job from the user's history.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsDelete(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<EmptyJobResponse> {

    return this.jobsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyJobResponse>) => r.body as EmptyJobResponse)
    );
  }

  /**
   * Path part for operation jobsHistory
   */
  static readonly JobsHistoryPath = '/jobs/v2/{jobId}/history';

  /**
   * Get the history of this job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsHistory()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsHistory$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<StrictHttpResponse<JobHistoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsHistoryPath, 'get');
    if (params) {

      rb.path('jobId', params.jobId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JobHistoryResponse>;
      })
    );
  }

  /**
   * Get the history of this job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsHistory$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsHistory(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<JobHistoryResponse> {

    return this.jobsHistory$Response(params).pipe(
      map((r: StrictHttpResponse<JobHistoryResponse>) => r.body as JobHistoryResponse)
    );
  }

  /**
   * Path part for operation jobsPems
   */
  static readonly JobsPemsPath = '/jobs/v2/{jobId}/pems';

  /**
   * Get the permission ACL for this job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsPems()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsPems$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<StrictHttpResponse<JobPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsPemsPath, 'get');
    if (params) {

      rb.path('jobId', params.jobId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JobPermissionResponse>;
      })
    );
  }

  /**
   * Get the permission ACL for this job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsPems$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsPems(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<JobPermissionResponse> {

    return this.jobsPems$Response(params).pipe(
      map((r: StrictHttpResponse<JobPermissionResponse>) => r.body as JobPermissionResponse)
    );
  }

  /**
   * Path part for operation jobsPemsAddUpdate
   */
  static readonly JobsPemsAddUpdatePath = '/jobs/v2/{jobId}/pems';

  /**
   * Add or update a user's permission for an application.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsPemsAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  jobsPemsAddUpdate$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  
  /**
   * The permission add or update.
   */
  body: JobPermissionRequest
  }): Observable<StrictHttpResponse<EmptyJobResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsPemsAddUpdatePath, 'post');
    if (params) {

      rb.path('jobId', params.jobId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyJobResponse>;
      })
    );
  }

  /**
   * Add or update a user's permission for an application.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsPemsAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  jobsPemsAddUpdate(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  
  /**
   * The permission add or update.
   */
  body: JobPermissionRequest
  }): Observable<EmptyJobResponse> {

    return this.jobsPemsAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyJobResponse>) => r.body as EmptyJobResponse)
    );
  }

  /**
   * Path part for operation jobsPemsDelete
   */
  static readonly JobsPemsDeletePath = '/jobs/v2/{jobId}/pems';

  /**
   * Deletes all permissions on an job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsPemsDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsPemsDelete$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<StrictHttpResponse<EmptyJobResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsPemsDeletePath, 'delete');
    if (params) {

      rb.path('jobId', params.jobId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyJobResponse>;
      })
    );
  }

  /**
   * Deletes all permissions on an job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsPemsDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsPemsDelete(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<EmptyJobResponse> {

    return this.jobsPemsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyJobResponse>) => r.body as EmptyJobResponse)
    );
  }

  /**
   * Path part for operation jobsPemsByUser
   */
  static readonly JobsPemsByUserPath = '/jobs/v2/{jobId}/pems/{username}';

  /**
   * Get a specific user's permissions for a job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsPemsByUser()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsPemsByUser$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

    /**
     * The username of the api user associated with the permission.
     */
    username: string;

  }): Observable<StrictHttpResponse<JobPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsPemsByUserPath, 'get');
    if (params) {

      rb.path('jobId', params.jobId);
      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JobPermissionResponse>;
      })
    );
  }

  /**
   * Get a specific user's permissions for a job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsPemsByUser$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsPemsByUser(params: {

    /**
     * The id of the job.
     */
    jobId: string;

    /**
     * The username of the api user associated with the permission.
     */
    username: string;

  }): Observable<JobPermissionResponse> {

    return this.jobsPemsByUser$Response(params).pipe(
      map((r: StrictHttpResponse<JobPermissionResponse>) => r.body as JobPermissionResponse)
    );
  }

  /**
   * Path part for operation jobsPemsByUserAddUpdate
   */
  static readonly JobsPemsByUserAddUpdatePath = '/jobs/v2/{jobId}/pems/{username}';

  /**
   * Add or update a user's permission for an job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsPemsByUserAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  jobsPemsByUserAddUpdate$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

    /**
     * The username of the api user associated with the permission
     */
    username: string;

  
  /**
   * The permission to update.
   */
  body: JobPermissionRequest
  }): Observable<StrictHttpResponse<EmptyJobResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsPemsByUserAddUpdatePath, 'post');
    if (params) {

      rb.path('jobId', params.jobId);
      rb.path('username', params.username);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyJobResponse>;
      })
    );
  }

  /**
   * Add or update a user's permission for an job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsPemsByUserAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  jobsPemsByUserAddUpdate(params: {

    /**
     * The id of the job.
     */
    jobId: string;

    /**
     * The username of the api user associated with the permission
     */
    username: string;

  
  /**
   * The permission to update.
   */
  body: JobPermissionRequest
  }): Observable<EmptyJobResponse> {

    return this.jobsPemsByUserAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyJobResponse>) => r.body as EmptyJobResponse)
    );
  }

  /**
   * Path part for operation jobsPemsByUserDelete
   */
  static readonly JobsPemsByUserDeletePath = '/jobs/v2/{jobId}/pems/{username}';

  /**
   * Deletes all permissions for the given user on an job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsPemsByUserDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsPemsByUserDelete$Response(params: {

    /**
     * The username of the api user associated with the permission
     */
    username: string;
    jobId: string;

  }): Observable<StrictHttpResponse<EmptyApplicationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsPemsByUserDeletePath, 'delete');
    if (params) {

      rb.path('username', params.username);
      rb.path('jobId', params.jobId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyApplicationResponse>;
      })
    );
  }

  /**
   * Deletes all permissions for the given user on an job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsPemsByUserDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsPemsByUserDelete(params: {

    /**
     * The username of the api user associated with the permission
     */
    username: string;
    jobId: string;

  }): Observable<EmptyApplicationResponse> {

    return this.jobsPemsByUserDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyApplicationResponse>) => r.body as EmptyApplicationResponse)
    );
  }

  /**
   * Path part for operation jobsStatus
   */
  static readonly JobsStatusPath = '/jobs/v2/{jobId}/status';

  /**
   * Get the status of the job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsStatus()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsStatus$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<StrictHttpResponse<JobStatusResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsStatusPath, 'get');
    if (params) {

      rb.path('jobId', params.jobId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<JobStatusResponse>;
      })
    );
  }

  /**
   * Get the status of the job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsStatus$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsStatus(params: {

    /**
     * The id of the job.
     */
    jobId: string;

  }): Observable<JobStatusResponse> {

    return this.jobsStatus$Response(params).pipe(
      map((r: StrictHttpResponse<JobStatusResponse>) => r.body as JobStatusResponse)
    );
  }

  /**
   * Path part for operation jobsOutputs
   */
  static readonly JobsOutputsPath = '/jobs/v2/{jobId}/ouputs/listings/{filePath}';

  /**
   * List the output folder for a job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsOutputs()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsOutputs$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

    /**
     * The path to an output file or folder relative to the job output directory. This resource will follow data around as it moves from the execution system to archival storage.
     */
    filePath: string;

  }): Observable<StrictHttpResponse<MultipleRemoteFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsOutputsPath, 'get');
    if (params) {

      rb.path('jobId', params.jobId);
      rb.path('filePath', params.filePath);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleRemoteFileResponse>;
      })
    );
  }

  /**
   * List the output folder for a job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsOutputs$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsOutputs(params: {

    /**
     * The id of the job.
     */
    jobId: string;

    /**
     * The path to an output file or folder relative to the job output directory. This resource will follow data around as it moves from the execution system to archival storage.
     */
    filePath: string;

  }): Observable<MultipleRemoteFileResponse> {

    return this.jobsOutputs$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleRemoteFileResponse>) => r.body as MultipleRemoteFileResponse)
    );
  }

  /**
   * Path part for operation jobsOutputsDownload
   */
  static readonly JobsOutputsDownloadPath = '/jobs/v2/{jobId}/ouputs/media/{filePath}';

  /**
   * Download an output file from a specific job.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsOutputsDownload()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsOutputsDownload$Response(params: {

    /**
     * The id of the job.
     */
    jobId: string;

    /**
     * The path to an output file relative to the job output directory.
     */
    filePath: string;

  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsOutputsDownloadPath, 'get');
    if (params) {

      rb.path('jobId', params.jobId);
      rb.path('filePath', params.filePath);

    }
    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/octet-stream'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Download an output file from a specific job.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsOutputsDownload$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsOutputsDownload(params: {

    /**
     * The id of the job.
     */
    jobId: string;

    /**
     * The path to an output file relative to the job output directory.
     */
    filePath: string;

  }): Observable<Blob> {

    return this.jobsOutputsDownload$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation jobsSearch
   */
  static readonly JobsSearchPath = '/jobs/v2/{attribute}/{value}';

  /**
   * Find jobs matching the given attribute/value combination(s).
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `jobsSearch()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsSearch$Response(params: {

    /**
     * The attribute to query by. This can be any job field.
     */
    attribute: string;

    /**
     * The value of the attribute to query for.
     */
    value: string;

  }): Observable<StrictHttpResponse<MultipleJobResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.JobsSearchPath, 'get');
    if (params) {

      rb.path('attribute', params.attribute);
      rb.path('value', params.value);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleJobResponse>;
      })
    );
  }

  /**
   * Find jobs matching the given attribute/value combination(s).
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `jobsSearch$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  jobsSearch(params: {

    /**
     * The attribute to query by. This can be any job field.
     */
    attribute: string;

    /**
     * The value of the attribute to query for.
     */
    value: string;

  }): Observable<MultipleJobResponse> {

    return this.jobsSearch$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleJobResponse>) => r.body as MultipleJobResponse)
    );
  }

  /**
   * Path part for operation metadataList
   */
  static readonly MetadataListPath = '/meta/v2/data';

  /**
   * List and/or search metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataList()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataList$Response(params: {

    /**
     * The query to perform. Traditional MongoDB queries are supported
     */
    q: string;

  }): Observable<StrictHttpResponse<MultipleMetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataListPath, 'get');
    if (params) {

      rb.query('q', params.q);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleMetadataResponse>;
      })
    );
  }

  /**
   * List and/or search metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataList$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataList(params: {

    /**
     * The query to perform. Traditional MongoDB queries are supported
     */
    q: string;

  }): Observable<MultipleMetadataResponse> {

    return this.metadataList$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleMetadataResponse>) => r.body as MultipleMetadataResponse)
    );
  }

  /**
   * Path part for operation metadataCreate
   */
  static readonly MetadataCreatePath = '/meta/v2/data';

  /**
   * Update or Add new Metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataCreate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataCreate$Response(params: {

  
  /**
   * The metadata to add.
   */
  body: MetadataRequest
  }): Observable<StrictHttpResponse<MetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataCreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataResponse>;
      })
    );
  }

  /**
   * Update or Add new Metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataCreate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataCreate(params: {

  
  /**
   * The metadata to add.
   */
  body: MetadataRequest
  }): Observable<MetadataResponse> {

    return this.metadataCreate$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataResponse>) => r.body as MetadataResponse)
    );
  }

  /**
   * Path part for operation metadataGet
   */
  static readonly MetadataGetPath = '/meta/v2/data/{uuid}';

  /**
   * Retrieve Metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataGet()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataGet$Response(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<MetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataGetPath, 'get');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataResponse>;
      })
    );
  }

  /**
   * Retrieve Metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataGet(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  }): Observable<MetadataResponse> {

    return this.metadataGet$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataResponse>) => r.body as MetadataResponse)
    );
  }

  /**
   * Path part for operation metadataAddUpdate
   */
  static readonly MetadataAddUpdatePath = '/meta/v2/data/{uuid}';

  /**
   * Update or Add new Metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataAddUpdate$Response(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  
  /**
   * The metadata to update.
   */
  body: MetadataRequest
  }): Observable<StrictHttpResponse<MetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataAddUpdatePath, 'post');
    if (params) {

      rb.path('uuid', params.uuid);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataResponse>;
      })
    );
  }

  /**
   * Update or Add new Metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataAddUpdate(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  
  /**
   * The metadata to update.
   */
  body: MetadataRequest
  }): Observable<MetadataResponse> {

    return this.metadataAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataResponse>) => r.body as MetadataResponse)
    );
  }

  /**
   * Path part for operation metadataDelete
   */
  static readonly MetadataDeletePath = '/meta/v2/data/{uuid}';

  /**
   * Remove Metadata from the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataDelete$Response(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<EmptyMetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataDeletePath, 'delete');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyMetadataResponse>;
      })
    );
  }

  /**
   * Remove Metadata from the system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataDelete(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  }): Observable<EmptyMetadataResponse> {

    return this.metadataDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyMetadataResponse>) => r.body as EmptyMetadataResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasList
   */
  static readonly MetadataSchemasListPath = '/meta/v2/schemas';

  /**
   * Retrieve Metadata Schemata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasList()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasList$Response(params?: {

  }): Observable<StrictHttpResponse<MetadataSchemaResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasListPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataSchemaResponse>;
      })
    );
  }

  /**
   * Retrieve Metadata Schemata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasList$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasList(params?: {

  }): Observable<MetadataSchemaResponse> {

    return this.metadataSchemasList$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataSchemaResponse>) => r.body as MetadataSchemaResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasCreate
   */
  static readonly MetadataSchemasCreatePath = '/meta/v2/schemas';

  /**
   * Add a new Metadata Schema.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasCreate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataSchemasCreate$Response(params: {

  
  /**
   * A valid JSON Schema object
   */
  body: string
  }): Observable<StrictHttpResponse<MetadataSchemaResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasCreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataSchemaResponse>;
      })
    );
  }

  /**
   * Add a new Metadata Schema.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasCreate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataSchemasCreate(params: {

  
  /**
   * A valid JSON Schema object
   */
  body: string
  }): Observable<MetadataSchemaResponse> {

    return this.metadataSchemasCreate$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataSchemaResponse>) => r.body as MetadataSchemaResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasGet
   */
  static readonly MetadataSchemasGetPath = '/meta/v2/schemas/{uuid}';

  /**
   * Retrieve Metadata Schemata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasGet()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasGet$Response(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<MetadataSchemaResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasGetPath, 'get');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataSchemaResponse>;
      })
    );
  }

  /**
   * Retrieve Metadata Schemata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasGet(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  }): Observable<MetadataSchemaResponse> {

    return this.metadataSchemasGet$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataSchemaResponse>) => r.body as MetadataSchemaResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasAddUpdate
   */
  static readonly MetadataSchemasAddUpdatePath = '/meta/v2/schemas/{uuid}';

  /**
   * Update or Add a new Metadata Schema.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataSchemasAddUpdate$Response(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  
  /**
   * A valid JSON Schema object
   */
  body: string
  }): Observable<StrictHttpResponse<MetadataSchemaResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasAddUpdatePath, 'post');
    if (params) {

      rb.path('uuid', params.uuid);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataSchemaResponse>;
      })
    );
  }

  /**
   * Update or Add a new Metadata Schema.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataSchemasAddUpdate(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  
  /**
   * A valid JSON Schema object
   */
  body: string
  }): Observable<MetadataSchemaResponse> {

    return this.metadataSchemasAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataSchemaResponse>) => r.body as MetadataSchemaResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasDelete
   */
  static readonly MetadataSchemasDeletePath = '/meta/v2/schemas/{uuid}';

  /**
   * Remove Metadata Schema from the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasDelete$Response(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<EmptyMetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasDeletePath, 'delete');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyMetadataResponse>;
      })
    );
  }

  /**
   * Remove Metadata Schema from the system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasDelete(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  }): Observable<EmptyMetadataResponse> {

    return this.metadataSchemasDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyMetadataResponse>) => r.body as EmptyMetadataResponse)
    );
  }

  /**
   * Path part for operation metadataPemsList
   */
  static readonly MetadataPemsListPath = '/meta/v2/data/{uuid}/pems';

  /**
   * Get the permission ACL for this metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataPemsList()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataPemsList$Response(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<MultipleMetadataPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataPemsListPath, 'get');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleMetadataPermissionResponse>;
      })
    );
  }

  /**
   * Get the permission ACL for this metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataPemsList$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataPemsList(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  }): Observable<MultipleMetadataPermissionResponse> {

    return this.metadataPemsList$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleMetadataPermissionResponse>) => r.body as MultipleMetadataPermissionResponse)
    );
  }

  /**
   * Path part for operation metadataPemsAddUpdate
   */
  static readonly MetadataPemsAddUpdatePath = '/meta/v2/data/{uuid}/pems';

  /**
   * Add or update a user's permission for the given metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataPemsAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataPemsAddUpdate$Response(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  
  /**
   * The metadata permission to update.
   */
  body: MetadataPermissionRequest
  }): Observable<StrictHttpResponse<MetadataPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataPemsAddUpdatePath, 'post');
    if (params) {

      rb.path('uuid', params.uuid);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataPermissionResponse>;
      })
    );
  }

  /**
   * Add or update a user's permission for the given metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataPemsAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataPemsAddUpdate(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  
  /**
   * The metadata permission to update.
   */
  body: MetadataPermissionRequest
  }): Observable<MetadataPermissionResponse> {

    return this.metadataPemsAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataPermissionResponse>) => r.body as MetadataPermissionResponse)
    );
  }

  /**
   * Path part for operation metadataPemsDeleteByUser
   */
  static readonly MetadataPemsDeleteByUserPath = '/meta/v2/data/{uuid}/pems';

  /**
   * Deletes all permissions on the given metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataPemsDeleteByUser()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataPemsDeleteByUser$Response(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<EmptyMetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataPemsDeleteByUserPath, 'delete');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyMetadataResponse>;
      })
    );
  }

  /**
   * Deletes all permissions on the given metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataPemsDeleteByUser$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataPemsDeleteByUser(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

  }): Observable<EmptyMetadataResponse> {

    return this.metadataPemsDeleteByUser$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyMetadataResponse>) => r.body as EmptyMetadataResponse)
    );
  }

  /**
   * Path part for operation metadataPemsGetByUser
   */
  static readonly MetadataPemsGetByUserPath = '/meta/v2/data/{uuid}/pems/{username}';

  /**
   * Get the permission ACL for this metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataPemsGetByUser()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataPemsGetByUser$Response(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  }): Observable<StrictHttpResponse<MetadataPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataPemsGetByUserPath, 'get');
    if (params) {

      rb.path('uuid', params.uuid);
      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataPermissionResponse>;
      })
    );
  }

  /**
   * Get the permission ACL for this metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataPemsGetByUser$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataPemsGetByUser(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  }): Observable<MetadataPermissionResponse> {

    return this.metadataPemsGetByUser$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataPermissionResponse>) => r.body as MetadataPermissionResponse)
    );
  }

  /**
   * Path part for operation metadataPemsAddUpdateByUser
   */
  static readonly MetadataPemsAddUpdateByUserPath = '/meta/v2/data/{uuid}/pems/{username}';

  /**
   * Add or update a user's permission for the given metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataPemsAddUpdateByUser()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataPemsAddUpdateByUser$Response(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  
  /**
   * The metadata permission to update.
   */
  body: MetadataPermissionRequest
  }): Observable<StrictHttpResponse<MetadataPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataPemsAddUpdateByUserPath, 'post');
    if (params) {

      rb.path('uuid', params.uuid);
      rb.path('username', params.username);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataPermissionResponse>;
      })
    );
  }

  /**
   * Add or update a user's permission for the given metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataPemsAddUpdateByUser$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataPemsAddUpdateByUser(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  
  /**
   * The metadata permission to update.
   */
  body: MetadataPermissionRequest
  }): Observable<MetadataPermissionResponse> {

    return this.metadataPemsAddUpdateByUser$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataPermissionResponse>) => r.body as MetadataPermissionResponse)
    );
  }

  /**
   * Path part for operation metadataPemsDelete
   */
  static readonly MetadataPemsDeletePath = '/meta/v2/data/{uuid}/pems/{username}';

  /**
   * Deletes all permissions on the given metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataPemsDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataPemsDelete$Response(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  }): Observable<StrictHttpResponse<EmptyMetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataPemsDeletePath, 'delete');
    if (params) {

      rb.path('uuid', params.uuid);
      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyMetadataResponse>;
      })
    );
  }

  /**
   * Deletes all permissions on the given metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataPemsDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataPemsDelete(params: {

    /**
     * The uuid of the metadata item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  }): Observable<EmptyMetadataResponse> {

    return this.metadataPemsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyMetadataResponse>) => r.body as EmptyMetadataResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasPemsList
   */
  static readonly MetadataSchemasPemsListPath = '/meta/v2/schemas/{uuid}/pems';

  /**
   * Get the permission ACL for this schema.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasPemsList()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasPemsList$Response(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<MultipleMetadataSchemaPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasPemsListPath, 'get');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleMetadataSchemaPermissionResponse>;
      })
    );
  }

  /**
   * Get the permission ACL for this schema.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasPemsList$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasPemsList(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  }): Observable<MultipleMetadataSchemaPermissionResponse> {

    return this.metadataSchemasPemsList$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleMetadataSchemaPermissionResponse>) => r.body as MultipleMetadataSchemaPermissionResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasPemsAddUpdate
   */
  static readonly MetadataSchemasPemsAddUpdatePath = '/meta/v2/schemas/{uuid}/pems';

  /**
   * Add or update a user's permission for the given schema.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasPemsAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataSchemasPemsAddUpdate$Response(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  
  /**
   * The schema permission to update.
   */
  body: MetadataPermissionRequest
  }): Observable<StrictHttpResponse<MetadataSchemaPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasPemsAddUpdatePath, 'post');
    if (params) {

      rb.path('uuid', params.uuid);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataSchemaPermissionResponse>;
      })
    );
  }

  /**
   * Add or update a user's permission for the given schema.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasPemsAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataSchemasPemsAddUpdate(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  
  /**
   * The schema permission to update.
   */
  body: MetadataPermissionRequest
  }): Observable<MetadataSchemaPermissionResponse> {

    return this.metadataSchemasPemsAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataSchemaPermissionResponse>) => r.body as MetadataSchemaPermissionResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasPemsDelete
   */
  static readonly MetadataSchemasPemsDeletePath = '/meta/v2/schemas/{uuid}/pems';

  /**
   * Deletes all permissions on the given schema.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasPemsDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasPemsDelete$Response(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<EmptyMetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasPemsDeletePath, 'delete');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyMetadataResponse>;
      })
    );
  }

  /**
   * Deletes all permissions on the given schema.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasPemsDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasPemsDelete(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

  }): Observable<EmptyMetadataResponse> {

    return this.metadataSchemasPemsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyMetadataResponse>) => r.body as EmptyMetadataResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasPemsDeleteByUser
   */
  static readonly MetadataSchemasPemsDeleteByUserPath = '/meta/v2/schemas/{uuid}/pems/{username}';

  /**
   * Get the permission ACL for this schema.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasPemsDeleteByUser()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasPemsDeleteByUser$Response(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  }): Observable<StrictHttpResponse<MetadataSchemaPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasPemsDeleteByUserPath, 'get');
    if (params) {

      rb.path('uuid', params.uuid);
      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataSchemaPermissionResponse>;
      })
    );
  }

  /**
   * Get the permission ACL for this schema.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasPemsDeleteByUser$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasPemsDeleteByUser(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  }): Observable<MetadataSchemaPermissionResponse> {

    return this.metadataSchemasPemsDeleteByUser$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataSchemaPermissionResponse>) => r.body as MetadataSchemaPermissionResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasPemsAddUpdateByUser
   */
  static readonly MetadataSchemasPemsAddUpdateByUserPath = '/meta/v2/schemas/{uuid}/pems/{username}';

  /**
   * Add or update a user's permission for the given metadata schema.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasPemsAddUpdateByUser()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataSchemasPemsAddUpdateByUser$Response(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  
  /**
   * The schema permission to update.
   */
  body: MetadataPermissionRequest
  }): Observable<StrictHttpResponse<MetadataSchemaPermissionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasPemsAddUpdateByUserPath, 'post');
    if (params) {

      rb.path('uuid', params.uuid);
      rb.path('username', params.username);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MetadataSchemaPermissionResponse>;
      })
    );
  }

  /**
   * Add or update a user's permission for the given metadata schema.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasPemsAddUpdateByUser$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  metadataSchemasPemsAddUpdateByUser(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  
  /**
   * The schema permission to update.
   */
  body: MetadataPermissionRequest
  }): Observable<MetadataSchemaPermissionResponse> {

    return this.metadataSchemasPemsAddUpdateByUser$Response(params).pipe(
      map((r: StrictHttpResponse<MetadataSchemaPermissionResponse>) => r.body as MetadataSchemaPermissionResponse)
    );
  }

  /**
   * Path part for operation metadataSchemasPemsDeleteByUserAndUuid
   */
  static readonly MetadataSchemasPemsDeleteByUserAndUuidPath = '/meta/v2/schemas/{uuid}/pems/{username}';

  /**
   * Deletes all permissions on the given metadata.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metadataSchemasPemsDeleteByUserAndUuid()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasPemsDeleteByUserAndUuid$Response(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  }): Observable<StrictHttpResponse<EmptyMetadataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.MetadataSchemasPemsDeleteByUserAndUuidPath, 'delete');
    if (params) {

      rb.path('uuid', params.uuid);
      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyMetadataResponse>;
      })
    );
  }

  /**
   * Deletes all permissions on the given metadata.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `metadataSchemasPemsDeleteByUserAndUuid$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  metadataSchemasPemsDeleteByUserAndUuid(params: {

    /**
     * The uuid of the metadata schema item
     */
    uuid: string;

    /**
     * The username of the permission owner
     */
    username: string;

  }): Observable<EmptyMetadataResponse> {

    return this.metadataSchemasPemsDeleteByUserAndUuid$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyMetadataResponse>) => r.body as EmptyMetadataResponse)
    );
  }

  /**
   * Path part for operation notificationsV2Get
   */
  static readonly NotificationsV2GetPath = '/notifications/v2/';

  /**
   * Retrieve notification for a specific resource.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsV2Get()` instead.
   *
   * This method doesn't expect any response body
   */
  notificationsV2Get$Response(params: {

    /**
     * The uuid of the associated resource. All notifications for this resource visible to the user will be returned.
     */
    associatedUuid: string;

  }): Observable<StrictHttpResponse<MultipleNotificationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.NotificationsV2GetPath, 'get');
    if (params) {

      rb.query('associatedUuid', params.associatedUuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleNotificationResponse>;
      })
    );
  }

  /**
   * Retrieve notification for a specific resource.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsV2Get$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  notificationsV2Get(params: {

    /**
     * The uuid of the associated resource. All notifications for this resource visible to the user will be returned.
     */
    associatedUuid: string;

  }): Observable<MultipleNotificationResponse> {

    return this.notificationsV2Get$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleNotificationResponse>) => r.body as MultipleNotificationResponse)
    );
  }

  /**
   * Path part for operation notificationsV2Post
   */
  static readonly NotificationsV2PostPath = '/notifications/v2/';

  /**
   * Update or Add new notification.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsV2Post()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  notificationsV2Post$Response(params: {

  
  /**
   * The notification to add.
   */
  body: NotificationRequest
  }): Observable<StrictHttpResponse<NotificationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.NotificationsV2PostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationResponse>;
      })
    );
  }

  /**
   * Update or Add new notification.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsV2Post$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  notificationsV2Post(params: {

  
  /**
   * The notification to add.
   */
  body: NotificationRequest
  }): Observable<NotificationResponse> {

    return this.notificationsV2Post$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationResponse>) => r.body as NotificationResponse)
    );
  }

  /**
   * Path part for operation notificationsV2ByUuidGet
   */
  static readonly NotificationsV2ByUuidGetPath = '/notifications/v2/{uuid}';

  /**
   * Retrieve notification.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsV2ByUuidGet()` instead.
   *
   * This method doesn't expect any response body
   */
  notificationsV2ByUuidGet$Response(params: {

    /**
     * The uuid of the notification item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<NotificationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.NotificationsV2ByUuidGetPath, 'get');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationResponse>;
      })
    );
  }

  /**
   * Retrieve notification.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsV2ByUuidGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  notificationsV2ByUuidGet(params: {

    /**
     * The uuid of the notification item
     */
    uuid: string;

  }): Observable<NotificationResponse> {

    return this.notificationsV2ByUuidGet$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationResponse>) => r.body as NotificationResponse)
    );
  }

  /**
   * Path part for operation notificationsV2ByUuidPost
   */
  static readonly NotificationsV2ByUuidPostPath = '/notifications/v2/{uuid}';

  /**
   * Update or Add new notification.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsV2ByUuidPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  notificationsV2ByUuidPost$Response(params: {

    /**
     * The uuid of the notification item
     */
    uuid: string;

  
  /**
   * The notification to update.
   */
  body: NotificationRequest
  }): Observable<StrictHttpResponse<NotificationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.NotificationsV2ByUuidPostPath, 'post');
    if (params) {

      rb.path('uuid', params.uuid);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationResponse>;
      })
    );
  }

  /**
   * Update or Add new notification.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsV2ByUuidPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  notificationsV2ByUuidPost(params: {

    /**
     * The uuid of the notification item
     */
    uuid: string;

  
  /**
   * The notification to update.
   */
  body: NotificationRequest
  }): Observable<NotificationResponse> {

    return this.notificationsV2ByUuidPost$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationResponse>) => r.body as NotificationResponse)
    );
  }

  /**
   * Path part for operation notificationsV2ByUuidDelete
   */
  static readonly NotificationsV2ByUuidDeletePath = '/notifications/v2/{uuid}';

  /**
   * Remove notification from the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsV2ByUuidDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  notificationsV2ByUuidDelete$Response(params: {

    /**
     * The uuid of the notification item
     */
    uuid: string;

  }): Observable<StrictHttpResponse<EmptyNotificationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.NotificationsV2ByUuidDeletePath, 'delete');
    if (params) {

      rb.path('uuid', params.uuid);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyNotificationResponse>;
      })
    );
  }

  /**
   * Remove notification from the system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `notificationsV2ByUuidDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  notificationsV2ByUuidDelete(params: {

    /**
     * The uuid of the notification item
     */
    uuid: string;

  }): Observable<EmptyNotificationResponse> {

    return this.notificationsV2ByUuidDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptyNotificationResponse>) => r.body as EmptyNotificationResponse)
    );
  }

  /**
   * Path part for operation postitsV2Get
   */
  static readonly PostitsV2GetPath = '/postits/v2/';

  /**
   * List existing PostIts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postitsV2Get()` instead.
   *
   * This method doesn't expect any response body
   */
  postitsV2Get$Response(params?: {

  }): Observable<StrictHttpResponse<MultiplePostItResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostitsV2GetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultiplePostItResponse>;
      })
    );
  }

  /**
   * List existing PostIts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postitsV2Get$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  postitsV2Get(params?: {

  }): Observable<MultiplePostItResponse> {

    return this.postitsV2Get$Response(params).pipe(
      map((r: StrictHttpResponse<MultiplePostItResponse>) => r.body as MultiplePostItResponse)
    );
  }

  /**
   * Path part for operation postitsV2Post
   */
  static readonly PostitsV2PostPath = '/postits/v2/';

  /**
   * Create a new PostIt
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postitsV2Post()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  postitsV2Post$Response(params: {

  
  /**
   * The PostIt to create.
   */
  body: PostItRequest
  }): Observable<StrictHttpResponse<PostIt>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostitsV2PostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostIt>;
      })
    );
  }

  /**
   * Create a new PostIt
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postitsV2Post$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  postitsV2Post(params: {

  
  /**
   * The PostIt to create.
   */
  body: PostItRequest
  }): Observable<PostIt> {

    return this.postitsV2Post$Response(params).pipe(
      map((r: StrictHttpResponse<PostIt>) => r.body as PostIt)
    );
  }

  /**
   * Path part for operation postitsV2ByNonceDelete
   */
  static readonly PostitsV2ByNonceDeletePath = '/postits/v2/{nonce}';

  /**
   * Immediately invalidates this PostIt URL.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postitsV2ByNonceDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  postitsV2ByNonceDelete$Response(params: {

    /**
     * The nonce of this PostIt URL
     */
    nonce: string;

  }): Observable<StrictHttpResponse<SinglePostItResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostitsV2ByNonceDeletePath, 'delete');
    if (params) {

      rb.path('nonce', params.nonce);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SinglePostItResponse>;
      })
    );
  }

  /**
   * Immediately invalidates this PostIt URL.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postitsV2ByNonceDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  postitsV2ByNonceDelete(params: {

    /**
     * The nonce of this PostIt URL
     */
    nonce: string;

  }): Observable<SinglePostItResponse> {

    return this.postitsV2ByNonceDelete$Response(params).pipe(
      map((r: StrictHttpResponse<SinglePostItResponse>) => r.body as SinglePostItResponse)
    );
  }

  /**
   * Path part for operation systemsList
   */
  static readonly SystemsListPath = '/systems/v2/';

  /**
   * Show all systems available to the user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsList()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsList$Response(params?: {

    /**
     * The type of system to return
     */
    type?: 'STORAGE' | 'EXECUTION';

    /**
     * Should only default systems be returned
     */
    default?: boolean;

    /**
     * Should only publicly available systems be returned
     */
    public?: boolean;

  }): Observable<StrictHttpResponse<MultipleSystemResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsListPath, 'get');
    if (params) {

      rb.query('type', params.type);
      rb.query('default', params.default);
      rb.query('public', params.public);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleSystemResponse>;
      })
    );
  }

  /**
   * Show all systems available to the user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsList$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsList(params?: {

    /**
     * The type of system to return
     */
    type?: 'STORAGE' | 'EXECUTION';

    /**
     * Should only default systems be returned
     */
    default?: boolean;

    /**
     * Should only publicly available systems be returned
     */
    public?: boolean;

  }): Observable<MultipleSystemResponse> {

    return this.systemsList$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleSystemResponse>) => r.body as MultipleSystemResponse)
    );
  }

  /**
   * Path part for operation systemsCreate
   */
  static readonly SystemsCreatePath = '/systems/v2/';

  /**
   * Find information about an individual system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsCreate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsCreate$Response(params: {

  
  /**
   * The description of the system to add or update.
   */
  body: SystemRequest
  }): Observable<StrictHttpResponse<SingleSystemResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsCreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleSystemResponse>;
      })
    );
  }

  /**
   * Find information about an individual system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsCreate(params: {

  
  /**
   * The description of the system to add or update.
   */
  body: SystemRequest
  }): Observable<SingleSystemResponse> {

    return this.systemsCreate$Response(params).pipe(
      map((r: StrictHttpResponse<SingleSystemResponse>) => r.body as SingleSystemResponse)
    );
  }

  /**
   * Path part for operation systemsGetById
   */
  static readonly SystemsGetByIdPath = '/systems/v2/{systemId}';

  /**
   * Find information about an individual system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsGetById()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsGetById$Response(params: {

    /**
     * The unique id of the system
     */
    systemId: string;

  }): Observable<StrictHttpResponse<SingleSystemResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsGetByIdPath, 'get');
    if (params) {

      rb.path('systemId', params.systemId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleSystemResponse>;
      })
    );
  }

  /**
   * Find information about an individual system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsGetById$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsGetById(params: {

    /**
     * The unique id of the system
     */
    systemId: string;

  }): Observable<SingleSystemResponse> {

    return this.systemsGetById$Response(params).pipe(
      map((r: StrictHttpResponse<SingleSystemResponse>) => r.body as SingleSystemResponse)
    );
  }

  /**
   * Path part for operation systemsPut
   */
  static readonly SystemsPutPath = '/systems/v2/{systemId}';

  /**
   * Perform a management action on the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsPut()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsPut$Response(params: {

    /**
     * The unique id of the system
     */
    systemId: string;

  
  /**
   * The description of the system to update.
   */
  body: SystemOperationRequest
  }): Observable<StrictHttpResponse<EmptySystemResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsPutPath, 'put');
    if (params) {

      rb.path('systemId', params.systemId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptySystemResponse>;
      })
    );
  }

  /**
   * Perform a management action on the system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsPut$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsPut(params: {

    /**
     * The unique id of the system
     */
    systemId: string;

  
  /**
   * The description of the system to update.
   */
  body: SystemOperationRequest
  }): Observable<EmptySystemResponse> {

    return this.systemsPut$Response(params).pipe(
      map((r: StrictHttpResponse<EmptySystemResponse>) => r.body as EmptySystemResponse)
    );
  }

  /**
   * Path part for operation systemsV2BySystemIdPost
   */
  static readonly SystemsV2BySystemIdPostPath = '/systems/v2/{systemId}';

  /**
   * Find information about an individual system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsV2BySystemIdPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsV2BySystemIdPost$Response(params: {

    /**
     * The unique id of the system
     */
    systemId: string;

  
  /**
   * The description of the system to update.
   */
  body: SystemRequest
  }): Observable<StrictHttpResponse<SingleSystemResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsV2BySystemIdPostPath, 'post');
    if (params) {

      rb.path('systemId', params.systemId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleSystemResponse>;
      })
    );
  }

  /**
   * Find information about an individual system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsV2BySystemIdPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsV2BySystemIdPost(params: {

    /**
     * The unique id of the system
     */
    systemId: string;

  
  /**
   * The description of the system to update.
   */
  body: SystemRequest
  }): Observable<SingleSystemResponse> {

    return this.systemsV2BySystemIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<SingleSystemResponse>) => r.body as SingleSystemResponse)
    );
  }

  /**
   * Path part for operation systemsV2BySystemIdDelete
   */
  static readonly SystemsV2BySystemIdDeletePath = '/systems/v2/{systemId}';

  /**
   * Delete a system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsV2BySystemIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsV2BySystemIdDelete$Response(params: {

    /**
     * The unique id of the system
     */
    systemId: string;

  }): Observable<StrictHttpResponse<EmptySystemResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsV2BySystemIdDeletePath, 'delete');
    if (params) {

      rb.path('systemId', params.systemId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptySystemResponse>;
      })
    );
  }

  /**
   * Delete a system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsV2BySystemIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsV2BySystemIdDelete(params: {

    /**
     * The unique id of the system
     */
    systemId: string;

  }): Observable<EmptySystemResponse> {

    return this.systemsV2BySystemIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptySystemResponse>) => r.body as EmptySystemResponse)
    );
  }

  /**
   * Path part for operation systemsV2RolesBySystemIdGet
   */
  static readonly SystemsV2RolesBySystemIdGetPath = '/systems/v2/{systemId}/roles';

  /**
   * Get a list of all users and their roles on this system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsV2RolesBySystemIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsV2RolesBySystemIdGet$Response(params: {

    /**
     * The id of the system.
     */
    systemId: string;

  }): Observable<StrictHttpResponse<MultipleSystemRoleResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsV2RolesBySystemIdGetPath, 'get');
    if (params) {

      rb.path('systemId', params.systemId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleSystemRoleResponse>;
      })
    );
  }

  /**
   * Get a list of all users and their roles on this system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsV2RolesBySystemIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsV2RolesBySystemIdGet(params: {

    /**
     * The id of the system.
     */
    systemId: string;

  }): Observable<MultipleSystemRoleResponse> {

    return this.systemsV2RolesBySystemIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleSystemRoleResponse>) => r.body as MultipleSystemRoleResponse)
    );
  }

  /**
   * Path part for operation systemsRolesAddUpdate
   */
  static readonly SystemsRolesAddUpdatePath = '/systems/v2/{systemId}/roles';

  /**
   * Add or update a user's role on a system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsRolesAddUpdate()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsRolesAddUpdate$Response(params: {

    /**
     * The id of the system.
     */
    systemId: string;

  
  /**
   * The role to update.
   */
  body: SystemRole
  }): Observable<StrictHttpResponse<EmptySystemResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsRolesAddUpdatePath, 'post');
    if (params) {

      rb.path('systemId', params.systemId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptySystemResponse>;
      })
    );
  }

  /**
   * Add or update a user's role on a system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsRolesAddUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsRolesAddUpdate(params: {

    /**
     * The id of the system.
     */
    systemId: string;

  
  /**
   * The role to update.
   */
  body: SystemRole
  }): Observable<EmptySystemResponse> {

    return this.systemsRolesAddUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<EmptySystemResponse>) => r.body as EmptySystemResponse)
    );
  }

  /**
   * Path part for operation systemsRolesDelete
   */
  static readonly SystemsRolesDeletePath = '/systems/v2/{systemId}/roles';

  /**
   * Deletes all roles on a system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsRolesDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsRolesDelete$Response(params: {

    /**
     * The id of the system.
     */
    systemId: string;

  }): Observable<StrictHttpResponse<EmptySystemResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsRolesDeletePath, 'delete');
    if (params) {

      rb.path('systemId', params.systemId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptySystemResponse>;
      })
    );
  }

  /**
   * Deletes all roles on a system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsRolesDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsRolesDelete(params: {

    /**
     * The id of the system.
     */
    systemId: string;

  }): Observable<EmptySystemResponse> {

    return this.systemsRolesDelete$Response(params).pipe(
      map((r: StrictHttpResponse<EmptySystemResponse>) => r.body as EmptySystemResponse)
    );
  }

  /**
   * Path part for operation systemsRolesGetByUsername
   */
  static readonly SystemsRolesGetByUsernamePath = '/systems/v2/{systemId}/roles/{username}';

  /**
   * Get a specific user's roles on this system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsRolesGetByUsername()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsRolesGetByUsername$Response(params: {

    /**
     * The id of the system.
     */
    systemId: string;

    /**
     * The username of the user about whose role you are inquiring.
     */
    username: string;

  }): Observable<StrictHttpResponse<MultipleSystemRoleResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsRolesGetByUsernamePath, 'get');
    if (params) {

      rb.path('systemId', params.systemId);
      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MultipleSystemRoleResponse>;
      })
    );
  }

  /**
   * Get a specific user's roles on this system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsRolesGetByUsername$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  systemsRolesGetByUsername(params: {

    /**
     * The id of the system.
     */
    systemId: string;

    /**
     * The username of the user about whose role you are inquiring.
     */
    username: string;

  }): Observable<MultipleSystemRoleResponse> {

    return this.systemsRolesGetByUsername$Response(params).pipe(
      map((r: StrictHttpResponse<MultipleSystemRoleResponse>) => r.body as MultipleSystemRoleResponse)
    );
  }

  /**
   * Path part for operation systemsRolesAddUpdateByUsername
   */
  static readonly SystemsRolesAddUpdateByUsernamePath = '/systems/v2/{systemId}/roles/{username}';

  /**
   * Add or update a user's role on a system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemsRolesAddUpdateByUsername()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsRolesAddUpdateByUsername$Response(params: {

    /**
     * The id of the system.
     */
    systemId: string;

    /**
     * The username of the api user associated with the role
     */
    username: string;

  
  /**
   * The role to update.
   */
  body: SystemRole
  }): Observable<StrictHttpResponse<EmptySystemResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.SystemsRolesAddUpdateByUsernamePath, 'post');
    if (params) {

      rb.path('systemId', params.systemId);
      rb.path('username', params.username);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptySystemResponse>;
      })
    );
  }

  /**
   * Add or update a user's role on a system.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `systemsRolesAddUpdateByUsername$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  systemsRolesAddUpdateByUsername(params: {

    /**
     * The id of the system.
     */
    systemId: string;

    /**
     * The username of the api user associated with the role
     */
    username: string;

  
  /**
   * The role to update.
   */
  body: SystemRole
  }): Observable<EmptySystemResponse> {

    return this.systemsRolesAddUpdateByUsername$Response(params).pipe(
      map((r: StrictHttpResponse<EmptySystemResponse>) => r.body as EmptySystemResponse)
    );
  }

}
