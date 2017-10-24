import { RequestPromiseOptions } from 'request-promise';
import { NcCommand } from './commands/NcCommand';

export type NcGlobalParam = 'ApiUser' | 'ApiKey' | 'UserName' | 'ClientIp';

export interface NcConfig {
    set(key: string, value: string): void;

    setAll(config: {[k in NcGlobalParam]: string}): void;

    isSandbox(): boolean;

    setSandbox(sb: boolean): boolean;

    setProxy(proxy: string): void

    buildRequestOptions(command: NcCommand): RequestPromiseOptions
}

export = const config: NcConfig;
