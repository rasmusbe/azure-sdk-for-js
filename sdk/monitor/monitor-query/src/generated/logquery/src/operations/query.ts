/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Query } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureLogAnalyticsContext } from "../azureLogAnalyticsContext";
import {
  QueryGetOptionalParams,
  QueryGetResponse,
  QueryBody,
  QueryExecuteOptionalParams,
  QueryExecuteResponse,
  BatchRequest,
  QueryBatchOptionalParams,
  QueryBatchResponse
} from "../models";

/** Class containing Query operations. */
export class QueryImpl implements Query {
  private readonly client: AzureLogAnalyticsContext;

  /**
   * Initialize a new instance of the class Query class.
   * @param client Reference to the service client
   */
  constructor(client: AzureLogAnalyticsContext) {
    this.client = client;
  }

  /**
   * Executes an Analytics query for data
   * @param workspaceId ID of the workspace. This is Workspace ID from the Properties blade in the Azure
   *                    portal.
   * @param query The Analytics query. Learn more about the [Analytics query
   *              syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   * @param options The options parameters.
   */
  get(
    workspaceId: string,
    query: string,
    options?: QueryGetOptionalParams
  ): Promise<QueryGetResponse> {
    return this.client.sendOperationRequest(
      { workspaceId, query, options },
      getOperationSpec
    );
  }

  /**
   * Executes an Analytics query for data.
   * [Here](https://dev.loganalytics.io/documentation/Using-the-API) is an example for using POST with an
   * Analytics query.
   * @param workspaceId ID of the workspace. This is Workspace ID from the Properties blade in the Azure
   *                    portal.
   * @param body The Analytics query. Learn more about the [Analytics query
   *             syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   * @param options The options parameters.
   */
  execute(
    workspaceId: string,
    body: QueryBody,
    options?: QueryExecuteOptionalParams
  ): Promise<QueryExecuteResponse> {
    return this.client.sendOperationRequest(
      { workspaceId, body, options },
      executeOperationSpec
    );
  }

  /**
   * Executes a batch of Analytics queries for data.
   * [Here](https://dev.loganalytics.io/documentation/Using-the-API) is an example for using POST with an
   * Analytics query.
   * @param body The batch request body
   * @param options The options parameters.
   */
  batch(
    body: BatchRequest,
    options?: QueryBatchOptionalParams
  ): Promise<QueryBatchResponse> {
    return this.client.sendOperationRequest(
      { body, options },
      batchOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/workspaces/{workspaceId}/query",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryResults
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.query, Parameters.timespan],
  urlParameters: [Parameters.$host, Parameters.workspaceId],
  headerParameters: [Parameters.accept],
  serializer
};
const executeOperationSpec: coreClient.OperationSpec = {
  path: "/workspaces/{workspaceId}/query",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.QueryResults
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host, Parameters.workspaceId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.prefer
  ],
  mediaType: "json",
  serializer
};
const batchOperationSpec: coreClient.OperationSpec = {
  path: "/$batch",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BatchResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
