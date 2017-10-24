import { DomainCheckResultType, DomainCreateResultType, UserGetPricingResultType } from '../model/namecheap.api';
import { NcClient } from './NcClient';
import { NcConfig } from './NcConfig';

declare interface NcAPI {

    config: NcConfig;

    _client: NcClient;

    checkDomains(...domains: string[]): Promise<{ DomainCheckResult: DomainCheckResultType[] }>

    getDomainRegistrationPrice(tld: string): Promise<{ UserGetPricingResult: UserGetPricingResultType }>

    createDomain(domainParams: object): Promise<{ DomainCreateResult: DomainCreateResultType }>

    setClient(client: NcClient): void;
}

declare const ncApi: NcAPI;

export = ncApi;
