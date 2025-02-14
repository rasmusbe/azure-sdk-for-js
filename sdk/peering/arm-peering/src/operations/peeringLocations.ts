/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PeeringLocations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PeeringManagementClient } from "../peeringManagementClient";
import {
  PeeringLocation,
  PeeringLocationsKind,
  PeeringLocationsListNextOptionalParams,
  PeeringLocationsListOptionalParams,
  PeeringLocationsListResponse,
  PeeringLocationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PeeringLocations operations. */
export class PeeringLocationsImpl implements PeeringLocations {
  private readonly client: PeeringManagementClient;

  /**
   * Initialize a new instance of the class PeeringLocations class.
   * @param client Reference to the service client
   */
  constructor(client: PeeringManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the available peering locations for the specified kind of peering.
   * @param kind The kind of the peering.
   * @param options The options parameters.
   */
  public list(
    kind: PeeringLocationsKind,
    options?: PeeringLocationsListOptionalParams
  ): PagedAsyncIterableIterator<PeeringLocation> {
    const iter = this.listPagingAll(kind, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(kind, options);
      }
    };
  }

  private async *listPagingPage(
    kind: PeeringLocationsKind,
    options?: PeeringLocationsListOptionalParams
  ): AsyncIterableIterator<PeeringLocation[]> {
    let result = await this._list(kind, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(kind, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    kind: PeeringLocationsKind,
    options?: PeeringLocationsListOptionalParams
  ): AsyncIterableIterator<PeeringLocation> {
    for await (const page of this.listPagingPage(kind, options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the available peering locations for the specified kind of peering.
   * @param kind The kind of the peering.
   * @param options The options parameters.
   */
  private _list(
    kind: PeeringLocationsKind,
    options?: PeeringLocationsListOptionalParams
  ): Promise<PeeringLocationsListResponse> {
    return this.client.sendOperationRequest(
      { kind, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param kind The kind of the peering.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    kind: PeeringLocationsKind,
    nextLink: string,
    options?: PeeringLocationsListNextOptionalParams
  ): Promise<PeeringLocationsListNextResponse> {
    return this.client.sendOperationRequest(
      { kind, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringLocations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PeeringLocationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.kind1,
    Parameters.directPeeringType
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PeeringLocationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.kind1,
    Parameters.directPeeringType
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
