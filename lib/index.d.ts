import { DomainCheckResultType, DomainCreateResultType, UserGetPricingResultType } from '../model/namecheap.api';
import { NcClient } from './NcClient';
import { NcConfig } from './NcConfig';

declare interface NcAPI {

    config: NcConfig;

    _client: NcClient;

    checkDomains(...domains: string[]): Promise<{ response: DomainCheckResultType }>

    getDomainRegistrationPrice(tld: string): Promise<{ response: UserGetPricingResultType }>

    createDomain(domainParams: object): Promise<{ response: DomainCreateResultType }>

    setClient(client: NcClient): void;
}

declare const ncApi: NcAPI;

export = ncApi;
