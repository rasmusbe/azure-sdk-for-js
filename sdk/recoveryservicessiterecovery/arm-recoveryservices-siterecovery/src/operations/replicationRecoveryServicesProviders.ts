/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationRecoveryServicesProviders } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  RecoveryServicesProvider,
  ReplicationRecoveryServicesProvidersListByReplicationFabricsNextOptionalParams,
  ReplicationRecoveryServicesProvidersListByReplicationFabricsOptionalParams,
  ReplicationRecoveryServicesProvidersListNextOptionalParams,
  ReplicationRecoveryServicesProvidersListOptionalParams,
  ReplicationRecoveryServicesProvidersListByReplicationFabricsResponse,
  ReplicationRecoveryServicesProvidersGetOptionalParams,
  ReplicationRecoveryServicesProvidersGetResponse,
  AddRecoveryServicesProviderInput,
  ReplicationRecoveryServicesProvidersCreateOptionalParams,
  ReplicationRecoveryServicesProvidersCreateResponse,
  ReplicationRecoveryServicesProvidersPurgeOptionalParams,
  ReplicationRecoveryServicesProvidersRefreshProviderOptionalParams,
  ReplicationRecoveryServicesProvidersRefreshProviderResponse,
  ReplicationRecoveryServicesProvidersDeleteOptionalParams,
  ReplicationRecoveryServicesProvidersListResponse,
  ReplicationRecoveryServicesProvidersListByReplicationFabricsNextResponse,
  ReplicationRecoveryServicesProvidersListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationRecoveryServicesProviders operations. */
export class ReplicationRecoveryServicesProvidersImpl
  implements ReplicationRecoveryServicesProviders {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationRecoveryServicesProviders class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists the registered recovery services providers for the specified fabric.
   * @param fabricName Fabric name.
   * @param options The options parameters.
   */
  public listByReplicationFabrics(
    fabricName: string,
    options?: ReplicationRecoveryServicesProvidersListByReplicationFabricsOptionalParams
  ): PagedAsyncIterableIterator<RecoveryServicesProvider> {
    const iter = this.listByReplicationFabricsPagingAll(fabricName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByReplicationFabricsPagingPage(fabricName, options);
      }
    };
  }

  private async *listByReplicationFabricsPagingPage(
    fabricName: string,
    options?: ReplicationRecoveryServicesProvidersListByReplicationFabricsOptionalParams
  ): AsyncIterableIterator<RecoveryServicesProvider[]> {
    let result = await this._listByReplicationFabrics(fabricName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByReplicationFabricsNext(
        fabricName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByReplicationFabricsPagingAll(
    fabricName: string,
    options?: ReplicationRecoveryServicesProvidersListByReplicationFabricsOptionalParams
  ): AsyncIterableIterator<RecoveryServicesProvider> {
    for await (const page of this.listByReplicationFabricsPagingPage(
      fabricName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the registered recovery services providers in the vault.
   * @param options The options parameters.
   */
  public list(
    options?: ReplicationRecoveryServicesProvidersListOptionalParams
  ): PagedAsyncIterableIterator<RecoveryServicesProvider> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ReplicationRecoveryServicesProvidersListOptionalParams
  ): AsyncIterableIterator<RecoveryServicesProvider[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ReplicationRecoveryServicesProvidersListOptionalParams
  ): AsyncIterableIterator<RecoveryServicesProvider> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the registered recovery services providers for the specified fabric.
   * @param fabricName Fabric name.
   * @param options The options parameters.
   */
  private _listByReplicationFabrics(
    fabricName: string,
    options?: ReplicationRecoveryServicesProvidersListByReplicationFabricsOptionalParams
  ): Promise<
    ReplicationRecoveryServicesProvidersListByReplicationFabricsResponse
  > {
    return this.client.sendOperationRequest(
      { fabricName, options },
      listByReplicationFabricsOperationSpec
    );
  }

  /**
   * Gets the details of registered recovery services provider.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  get(
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersGetOptionalParams
  ): Promise<ReplicationRecoveryServicesProvidersGetResponse> {
    return this.client.sendOperationRequest(
      { fabricName, providerName, options },
      getOperationSpec
    );
  }

  /**
   * The operation to add a recovery services provider.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param addProviderInput Add provider input.
   * @param options The options parameters.
   */
  async beginCreate(
    fabricName: string,
    providerName: string,
    addProviderInput: AddRecoveryServicesProviderInput,
    options?: ReplicationRecoveryServicesProvidersCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationRecoveryServicesProvidersCreateResponse>,
      ReplicationRecoveryServicesProvidersCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationRecoveryServicesProvidersCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, providerName, addProviderInput, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to add a recovery services provider.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param addProviderInput Add provider input.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    fabricName: string,
    providerName: string,
    addProviderInput: AddRecoveryServicesProviderInput,
    options?: ReplicationRecoveryServicesProvidersCreateOptionalParams
  ): Promise<ReplicationRecoveryServicesProvidersCreateResponse> {
    const poller = await this.beginCreate(
      fabricName,
      providerName,
      addProviderInput,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to purge(force delete) a recovery services provider from the vault.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  async beginPurge(
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersPurgeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, providerName, options },
      purgeOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to purge(force delete) a recovery services provider from the vault.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  async beginPurgeAndWait(
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersPurgeOptionalParams
  ): Promise<void> {
    const poller = await this.beginPurge(fabricName, providerName, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to refresh the information from the recovery services provider.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  async beginRefreshProvider(
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersRefreshProviderOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        ReplicationRecoveryServicesProvidersRefreshProviderResponse
      >,
      ReplicationRecoveryServicesProvidersRefreshProviderResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationRecoveryServicesProvidersRefreshProviderResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, providerName, options },
      refreshProviderOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to refresh the information from the recovery services provider.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  async beginRefreshProviderAndWait(
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersRefreshProviderOptionalParams
  ): Promise<ReplicationRecoveryServicesProvidersRefreshProviderResponse> {
    const poller = await this.beginRefreshProvider(
      fabricName,
      providerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to removes/delete(unregister) a recovery services provider from the vault.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  async beginDelete(
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, providerName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to removes/delete(unregister) a recovery services provider from the vault.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    fabricName: string,
    providerName: string,
    options?: ReplicationRecoveryServicesProvidersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(fabricName, providerName, options);
    return poller.pollUntilDone();
  }

  /**
   * Lists the registered recovery services providers in the vault.
   * @param options The options parameters.
   */
  private _list(
    options?: ReplicationRecoveryServicesProvidersListOptionalParams
  ): Promise<ReplicationRecoveryServicesProvidersListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListByReplicationFabricsNext
   * @param fabricName Fabric name.
   * @param nextLink The nextLink from the previous successful call to the ListByReplicationFabrics
   *                 method.
   * @param options The options parameters.
   */
  private _listByReplicationFabricsNext(
    fabricName: string,
    nextLink: string,
    options?: ReplicationRecoveryServicesProvidersListByReplicationFabricsNextOptionalParams
  ): Promise<
    ReplicationRecoveryServicesProvidersListByReplicationFabricsNextResponse
  > {
    return this.client.sendOperationRequest(
      { fabricName, nextLink, options },
      listByReplicationFabricsNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ReplicationRecoveryServicesProvidersListNextOptionalParams
  ): Promise<ReplicationRecoveryServicesProvidersListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationFabricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProviderCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProvider
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.providerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProvider
    },
    201: {
      bodyMapper: Mappers.RecoveryServicesProvider
    },
    202: {
      bodyMapper: Mappers.RecoveryServicesProvider
    },
    204: {
      bodyMapper: Mappers.RecoveryServicesProvider
    }
  },
  requestBody: Parameters.addProviderInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.providerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const purgeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.providerName
  ],
  serializer
};
const refreshProviderOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}/refreshProvider",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProvider
    },
    201: {
      bodyMapper: Mappers.RecoveryServicesProvider
    },
    202: {
      bodyMapper: Mappers.RecoveryServicesProvider
    },
    204: {
      bodyMapper: Mappers.RecoveryServicesProvider
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.providerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}/remove",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.providerName
  ],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryServicesProviders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProviderCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReplicationFabricsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProviderCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProviderCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
