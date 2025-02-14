/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PolicyEvent,
  PolicyEventsListQueryResultsForManagementGroupOptionalParams,
  PolicyEventsListQueryResultsForSubscriptionOptionalParams,
  PolicyEventsListQueryResultsForResourceGroupOptionalParams,
  PolicyEventsListQueryResultsForResourceOptionalParams,
  PolicyEventsListQueryResultsForPolicySetDefinitionOptionalParams,
  PolicyEventsListQueryResultsForPolicyDefinitionOptionalParams,
  PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOptionalParams,
  PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PolicyEvents. */
export interface PolicyEvents {
  /**
   * Queries policy events for the resources under the management group.
   * @param managementGroupName Management group name.
   * @param options The options parameters.
   */
  listQueryResultsForManagementGroup(
    managementGroupName: string,
    options?: PolicyEventsListQueryResultsForManagementGroupOptionalParams
  ): PagedAsyncIterableIterator<PolicyEvent>;
  /**
   * Queries policy events for the resources under the subscription.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param options The options parameters.
   */
  listQueryResultsForSubscription(
    subscriptionId: string,
    options?: PolicyEventsListQueryResultsForSubscriptionOptionalParams
  ): PagedAsyncIterableIterator<PolicyEvent>;
  /**
   * Queries policy events for the resources under the resource group.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param resourceGroupName Resource group name.
   * @param options The options parameters.
   */
  listQueryResultsForResourceGroup(
    subscriptionId: string,
    resourceGroupName: string,
    options?: PolicyEventsListQueryResultsForResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PolicyEvent>;
  /**
   * Queries policy events for the resource.
   * @param resourceId Resource ID.
   * @param options The options parameters.
   */
  listQueryResultsForResource(
    resourceId: string,
    options?: PolicyEventsListQueryResultsForResourceOptionalParams
  ): PagedAsyncIterableIterator<PolicyEvent>;
  /**
   * Queries policy events for the subscription level policy set definition.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param policySetDefinitionName Policy set definition name.
   * @param options The options parameters.
   */
  listQueryResultsForPolicySetDefinition(
    subscriptionId: string,
    policySetDefinitionName: string,
    options?: PolicyEventsListQueryResultsForPolicySetDefinitionOptionalParams
  ): PagedAsyncIterableIterator<PolicyEvent>;
  /**
   * Queries policy events for the subscription level policy definition.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param policyDefinitionName Policy definition name.
   * @param options The options parameters.
   */
  listQueryResultsForPolicyDefinition(
    subscriptionId: string,
    policyDefinitionName: string,
    options?: PolicyEventsListQueryResultsForPolicyDefinitionOptionalParams
  ): PagedAsyncIterableIterator<PolicyEvent>;
  /**
   * Queries policy events for the subscription level policy assignment.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param policyAssignmentName Policy assignment name.
   * @param options The options parameters.
   */
  listQueryResultsForSubscriptionLevelPolicyAssignment(
    subscriptionId: string,
    policyAssignmentName: string,
    options?: PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOptionalParams
  ): PagedAsyncIterableIterator<PolicyEvent>;
  /**
   * Queries policy events for the resource group level policy assignment.
   * @param subscriptionId Microsoft Azure subscription ID.
   * @param resourceGroupName Resource group name.
   * @param policyAssignmentName Policy assignment name.
   * @param options The options parameters.
   */
  listQueryResultsForResourceGroupLevelPolicyAssignment(
    subscriptionId: string,
    resourceGroupName: string,
    policyAssignmentName: string,
    options?: PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOptionalParams
  ): PagedAsyncIterableIterator<PolicyEvent>;
}
