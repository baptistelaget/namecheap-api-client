import { DomainCheckResultType, DomainCreateResultType, UserGetPricingResultType } from '../model/namecheap.api';

interface NcAPI {

    _client: NcClient;

    checkDomains(...domains: string[]): Promise<{ response: DomainCheckResultType }>

    getDomainRegistrationPrice(tld: string): Promise<{ response: UserGetPricingResultType }>

    createDomain(domainParams: object): Promise<{ response: DomainCreateResultType }>

    setClient(client: NcClient): void;
}

declare const ncApi: NcAPI;

export = ncApi;
