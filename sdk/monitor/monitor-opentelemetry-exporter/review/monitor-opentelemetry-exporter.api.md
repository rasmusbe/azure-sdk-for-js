## API Report File for "@azure/monitor-opentelemetry-exporter"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ExportResult } from '@opentelemetry/core';
import { ReadableSpan } from '@opentelemetry/tracing';
import { SpanExporter } from '@opentelemetry/tracing';
import { TokenCredential } from '@azure/core-http';

// @public
export interface AzureExporterConfig {
    aadTokenCredential?: TokenCredential;
    apiVersion?: ServiceApiVersion;
    connectionString?: string;
}

// @public
export class AzureMonitorTraceExporter implements SpanExporter {
    constructor(options?: AzureExporterConfig);
    export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): Promise<void>;
    shutdown(): Promise<void>;
}

// @public
export enum ServiceApiVersion {
    V2 = "2020-09-15_Preview"
}

// (No @packageDocumentation comment for this package)

```
