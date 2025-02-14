/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/computeNodeExtensionMappers";
import * as Parameters from "../models/parameters";
import { BatchServiceClientContext } from "../batchServiceClientContext";

/** Class representing a ComputeNodeExtension. */
export class ComputeNodeExtension {
  private readonly client: BatchServiceClientContext;

  /**
   * Create a ComputeNodeExtension.
   * @param {BatchServiceClientContext} client Reference to the service client.
   */
  constructor(client: BatchServiceClientContext) {
    this.client = client;
  }

  /**
   * @summary Gets information about the specified Compute Node Extension.
   * @param poolId The ID of the Pool that contains the Compute Node.
   * @param nodeId The ID of the Compute Node that contains the extensions.
   * @param extensionName The name of the of the Compute Node Extension that you want to get
   * information about.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeExtensionGetResponse>
   */
  get(poolId: string, nodeId: string, extensionName: string, options?: Models.ComputeNodeExtensionGetOptionalParams): Promise<Models.ComputeNodeExtensionGetResponse>;
  /**
   * @param poolId The ID of the Pool that contains the Compute Node.
   * @param nodeId The ID of the Compute Node that contains the extensions.
   * @param extensionName The name of the of the Compute Node Extension that you want to get
   * information about.
   * @param callback The callback
   */
  get(poolId: string, nodeId: string, extensionName: string, callback: msRest.ServiceCallback<Models.NodeVMExtension>): void;
  /**
   * @param poolId The ID of the Pool that contains the Compute Node.
   * @param nodeId The ID of the Compute Node that contains the extensions.
   * @param extensionName The name of the of the Compute Node Extension that you want to get
   * information about.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(poolId: string, nodeId: string, extensionName: string, options: Models.ComputeNodeExtensionGetOptionalParams, callback: msRest.ServiceCallback<Models.NodeVMExtension>): void;
  get(poolId: string, nodeId: string, extensionName: string, options?: Models.ComputeNodeExtensionGetOptionalParams | msRest.ServiceCallback<Models.NodeVMExtension>, callback?: msRest.ServiceCallback<Models.NodeVMExtension>): Promise<Models.ComputeNodeExtensionGetResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        extensionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ComputeNodeExtensionGetResponse>;
  }

  /**
   * @summary Lists the Compute Nodes Extensions in the specified Pool.
   * @param poolId The ID of the Pool that contains Compute Node.
   * @param nodeId The ID of the Compute Node that you want to list extensions.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeExtensionListResponse>
   */
  list(poolId: string, nodeId: string, options?: Models.ComputeNodeExtensionListOptionalParams): Promise<Models.ComputeNodeExtensionListResponse>;
  /**
   * @param poolId The ID of the Pool that contains Compute Node.
   * @param nodeId The ID of the Compute Node that you want to list extensions.
   * @param callback The callback
   */
  list(poolId: string, nodeId: string, callback: msRest.ServiceCallback<Models.NodeVMExtensionList>): void;
  /**
   * @param poolId The ID of the Pool that contains Compute Node.
   * @param nodeId The ID of the Compute Node that you want to list extensions.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(poolId: string, nodeId: string, options: Models.ComputeNodeExtensionListOptionalParams, callback: msRest.ServiceCallback<Models.NodeVMExtensionList>): void;
  list(poolId: string, nodeId: string, options?: Models.ComputeNodeExtensionListOptionalParams | msRest.ServiceCallback<Models.NodeVMExtensionList>, callback?: msRest.ServiceCallback<Models.NodeVMExtensionList>): Promise<Models.ComputeNodeExtensionListResponse> {
    return this.client.sendOperationRequest(
      {
        poolId,
        nodeId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ComputeNodeExtensionListResponse>;
  }

  /**
   * @summary Lists the Compute Nodes Extensions in the specified Pool.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComputeNodeExtensionListResponse>
   */
  listNext(nextPageLink: string, options?: Models.ComputeNodeExtensionListNextOptionalParams): Promise<Models.ComputeNodeExtensionListResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NodeVMExtensionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.ComputeNodeExtensionListNextOptionalParams, callback: msRest.ServiceCallback<Models.NodeVMExtensionList>): void;
  listNext(nextPageLink: string, options?: Models.ComputeNodeExtensionListNextOptionalParams | msRest.ServiceCallback<Models.NodeVMExtensionList>, callback?: msRest.ServiceCallback<Models.NodeVMExtensionList>): Promise<Models.ComputeNodeExtensionListResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ComputeNodeExtensionListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId,
    Parameters.extensionName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.select15,
    Parameters.timeout76
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId90,
    Parameters.returnClientRequestId90,
    Parameters.ocpDate90
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NodeVMExtension,
      headersMapper: Mappers.ComputeNodeExtensionGetHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.ComputeNodeExtensionGetHeaders
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pools/{poolId}/nodes/{nodeId}/extensions",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.poolId,
    Parameters.nodeId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.select16,
    Parameters.maxResults14,
    Parameters.timeout77
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId91,
    Parameters.returnClientRequestId91,
    Parameters.ocpDate91
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NodeVMExtensionList,
      headersMapper: Mappers.ComputeNodeExtensionListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.ComputeNodeExtensionListHeaders
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "{batchUrl}",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId92,
    Parameters.returnClientRequestId92,
    Parameters.ocpDate92
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NodeVMExtensionList,
      headersMapper: Mappers.ComputeNodeExtensionListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.ComputeNodeExtensionListHeaders
    }
  },
  serializer
};
