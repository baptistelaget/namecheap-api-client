import * as Primitive from './xml-primitives';

// Source files:
// file://model-gen/schema/namecheap.api.xsd


interface BaseType {
    _exists: boolean;
    _namespace: string;
}

interface _AddressCreateResultType extends BaseType {
    AddressId: number;
    AddressName: string;
    Success: boolean;
}

interface AddressCreateResultType extends _AddressCreateResultType {
    constructor: { new(): AddressCreateResultType };
}

interface _AddressDeleteResultType extends BaseType {
    ProfileId: number;
    Success: boolean;
    UserName: string;
}

interface AddressDeleteResultType extends _AddressDeleteResultType {
    constructor: { new(): AddressDeleteResultType };
}

interface _AddressGetListResultType extends BaseType {
    List: ListType;
}

interface AddressGetListResultType extends _AddressGetListResultType {
    constructor: { new(): AddressGetListResultType };
}

interface _AddressSetDefaultResultType extends BaseType {
    AddressId: number;
    Success: boolean;
}

interface AddressSetDefaultResultType extends _AddressSetDefaultResultType {
    constructor: { new(): AddressSetDefaultResultType };
}

interface _AddressUpdateResultType extends BaseType {
    AddressId: number;
    AddressName: string;
    Success: boolean;
}

interface AddressUpdateResultType extends _AddressUpdateResultType {
    constructor: { new(): AddressUpdateResultType };
}

interface _AdminType extends BaseType {
    ReadOnly: boolean;
    Address1: string;
    Address2: string;
    City: string;
    Country: string;
    EmailAddress: string;
    Fax: number;
    FirstName: string;
    JobTitle: string;
    LastName: string;
    OrganizationName: string;
    Phone: number;
    PhoneExt: string;
    PostalCode: number;
    StateProvince: string;
    StateProvinceChoice: string;
}

interface AdminType extends _AdminType {
    constructor: { new(): AdminType };
}

interface _ApiResponseType extends BaseType {
    Status: string;
    CommandResponse?: CommandResponseType;
    Errors: ErrorsType;
    ExecutionTime?: number;
    GMTTimeDifference?: string;
    RequestedCommand?: string;
    Server?: string;
    Warnings?: WarningsType;
}

interface ApiResponseType extends _ApiResponseType {
    constructor: { new(): ApiResponseType };
}

interface _AuxBillingType extends BaseType {
    ReadOnly: boolean;
    Address1: string;
    Address2: string;
    City: string;
    Country: string;
    EmailAddress: string;
    Fax: number;
    FirstName: string;
    JobTitle: string;
    LastName: string;
    OrganizationName: string;
    Phone: number;
    PhoneExt: string;
    PostalCode: number;
    StateProvince: string;
    StateProvinceChoice: string;
}

interface AuxBillingType extends _AuxBillingType {
    constructor: { new(): AuxBillingType };
}

interface _CaCertificatesType extends BaseType {
    Certificate: CertificateType[];
}

interface CaCertificatesType extends _CaCertificatesType {
    constructor: { new(): CaCertificatesType };
}

interface _CertificateDetailsType extends BaseType {
    AdministratorEmail: string;
    AdministratorName: string;
    ApproverEmail: string;
    Certificates: CertificatesType;
    CommonName: string;
    CSR: string;
}

interface CertificateDetailsType extends _CertificateDetailsType {
    constructor: { new(): CertificateDetailsType };
}

interface _CertificatesType extends BaseType {
    CertificateReturned: boolean;
    ReturnType: string;
    CaCertificates: CaCertificatesType;
    Certificate: CertificateType;
}

interface CertificatesType extends _CertificatesType {
    constructor: { new(): CertificatesType };
}

interface _CertificateType extends BaseType {
    Type: string;
    Certificate?: CertificateType[];
}

interface CertificateType extends _CertificateType {
    constructor: { new(): CertificateType };
}

interface _CommandResponseType extends BaseType {
    Type: string;
    AddressCreateResult?: AddressCreateResultType[];
    AddressDeleteResult?: AddressDeleteResultType[];
    AddressGetListResult?: AddressGetListResultType[];
    AddressSetDefaultResult?: AddressSetDefaultResultType[];
    AddressUpdateResult?: AddressUpdateResultType[];
    CreateAddFundsRequestResult?: CreateAddFundsRequestResultType[];
    DomainCheckResult?: DomainCheckResultType[];
    DomainContactsResult?: DomainContactsResultType[];
    DomainCreateResult?: DomainCreateResultType[];
    DomainDNSGetEmailForwardingResult?: DomainDNSGetEmailForwardingResultType[];
    DomainDNSGetHostsResult?: DomainDNSGetHostsResultType[];
    DomainDNSGetListResult?: DomainDNSGetListResultType[];
    DomainDNSSetCustomResult?: DomainDNSSetCustomResultType[];
    DomainDNSSetDefaultResult?: DomainDNSSetDefaultResultType[];
    DomainDNSSetEmailForwardingResult?: DomainDNSSetEmailForwardingResultType[];
    DomainDNSSetHostsResult?: DomainDNSSetHostsResultType[];
    DomainGetInfoResult?: DomainGetInfoResultType[];
    DomainGetListResult?: DomainGetListResultType[];
    DomainGetRegistrarLockResult?: DomainGetRegistrarLockResultType[];
    DomainNSCreateResult?: DomainNSCreateResultType[];
    DomainNSDeleteResult?: DomainNSDeleteResultType[];
    DomainNSInfoResult?: DomainNSInfoResultType[];
    DomainNSUpdateResult?: DomainNSUpdateResultType[];
    DomainReactivateResult?: DomainReactivateResultType[];
    DomainRenewResult?: DomainRenewResultType[];
    DomainSetContactResult?: DomainSetContactResultType[];
    DomainSetRegistrarLockResult?: DomainSetRegistrarLockResultType[];
    DomainTransferCreateResult?: DomainTransferCreateResultType[];
    DomainTransferGetStatusResult?: DomainTransferGetStatusResultType[];
    DomainTransferUpdateStatusResult?: DomainTransferUpdateStatusResultType[];
    GetAddFundsStatusResult?: GetAddFundsStatusResultType[];
    GetAddressInfoResult?: GetAddressInfoResultType[];
    GetApproverEmailListResult?: GetApproverEmailListResultType[];
    Paging?: PagingType[];
    RevokeCertificateResult?: RevokeCertificateResultType[];
    SSLActivateResult?: SSLActivateResultType[];
    SSLCreateResult?: SSLCreateResultType[];
    SSLEditDCVMethodResult?: SSLEditDCVMethodResultType[];
    SSLGetInfoResult?: SSLGetInfoResultType[];
    SSLListResult?: SSLListResultType[];
    SSLParseCSRResult?: SSLParseCSRResultType[];
    SSLPurchaseMoreSANSResult?: SSLPurchaseMoreSANSResultType[];
    SSLReissueResult?: SSLReissueResultType[];
    SSLRenewResult?: SSLRenewResultType[];
    SSLResendApproverEmailResult?: SSLResendApproverEmailResultType[];
    SSLResendFulfillmentEmailResult?: SSLResendFulfillmentEmailResultType[];
    Tlds?: TldsType[];
    TransferGetListResult?: TransferGetListResultType[];
    UserChangePasswordResult?: UserChangePasswordResultType[];
    UserCreateResult?: UserCreateResultType[];
    UserGetBalancesResult?: UserGetBalancesResultType[];
    UserGetPricingResult?: UserGetPricingResultType[];
    UserLoginResult?: UserLoginResultType[];
    UserResetPasswordResult?: UserResetPasswordResultType[];
    UserUpdateResult?: UserUpdateResultType[];
    WhoisguardAllotResult?: WhoisguardAllotResultType[];
    WhoisguardChangeEmailAddressResult?: WhoisguardChangeEmailAddressResultType[];
    WhoisguardDisableResult?: WhoisguardDisableResultType[];
    WhoisguardDiscardResult?: WhoisguardDiscardResultType[];
    WhoisguardEnableResult?: WhoisguardEnableResultType[];
    WhoisguardGetListResult?: WhoisguardGetListResultType[];
    WhoisguardRenewResult?: WhoisguardRenewResultType[];
    WhoisguardUnallotResult?: WhoisguardUnallotResultType[];
}

interface CommandResponseType extends _CommandResponseType {
    constructor: { new(): CommandResponseType };
}

interface _CreateAddFundsRequestResultType extends BaseType {
    RedirectURL: string;
    ReturnURL: string;
}

interface CreateAddFundsRequestResultType extends _CreateAddFundsRequestResultType {
    constructor: { new(): CreateAddFundsRequestResultType };
}

interface _CSRDetailsType extends BaseType {
    CommonName: string;
    Country: string;
    DomainName: string;
    Email: string;
    Locality: string;
    Organisation: string;
    OrganisationUnit: string;
    State: string;
    ValidTrueDomain: boolean;
}

interface CSRDetailsType extends _CSRDetailsType {
    constructor: { new(): CSRDetailsType };
}

interface _CurrentAttributesType extends BaseType {
    RegistrantNexus?: string;
    RegistrantNexusCountry?: RegistrantNexusCountryType;
    RegistrantPurpose?: string;
}

interface CurrentAttributesType extends _CurrentAttributesType {
    constructor: { new(): CurrentAttributesType };
}

interface _DNSDCValidationType extends BaseType {
    ValueAvailable: boolean;
    HostName: HostNameType;
    Target: TargetType;
}

interface DNSDCValidationType extends _DNSDCValidationType {
    constructor: { new(): DNSDCValidationType };
}

interface _DnsDetailsType extends BaseType {
    ProviderType: string;
}

interface DnsDetailsType extends _DnsDetailsType {
    constructor: { new(): DnsDetailsType };
}

interface _DomainCheckResultType extends BaseType {
    Available: boolean;
    Domain: string;
    EapFee: number;
    ErrorNo: number;
    IcannFee: number;
    IsPremiumName: boolean;
    PremiumRegistrationPrice: number;
    PremiumRenewalPrice: number;
    PremiumRestorePrice: number;
    PremiumTransferPrice: number;
}

interface DomainCheckResultType extends _DomainCheckResultType {
    constructor: { new(): DomainCheckResultType };
}

interface _DomainContactsResultType extends BaseType {
    Domain: string;
    domainnameid: number;
    Admin: AdminType;
    AuxBilling: AuxBillingType;
    CurrentAttributes: CurrentAttributesType;
    Registrant: RegistrantType;
    Tech: TechType;
    WhoisGuardContact: WhoisGuardContactType;
}

interface DomainContactsResultType extends _DomainContactsResultType {
    constructor: { new(): DomainContactsResultType };
}

interface _DomainCreateResultType extends BaseType {
    ChargedAmount: number;
    Domain: string;
    DomainID: number;
    NonRealTimeDomain: boolean;
    OrderID: number;
    Registered: boolean;
    TransactionID: number;
    WhoisguardEnable: boolean;
}

interface DomainCreateResultType extends _DomainCreateResultType {
    constructor: { new(): DomainCreateResultType };
}

interface _DomainDetails extends BaseType {
    DomainDetails: DomainDetailsType;
}

export interface DomainDetails extends _DomainDetails {
    constructor: { new(): DomainDetails };
}

export let DomainDetails: { new(): DomainDetails };

interface _DomainDetailsType extends BaseType {
    CreatedDate?: string;
    ExpiredDate: string;
    NumYears?: number;
}

interface DomainDetailsType extends _DomainDetailsType {
    constructor: { new(): DomainDetailsType };
}

interface _DomainDNSGetEmailForwardingResultType extends BaseType {
    Domain: string;
    Forward: ForwardType[];
}

interface DomainDNSGetEmailForwardingResultType extends _DomainDNSGetEmailForwardingResultType {
    constructor: { new(): DomainDNSGetEmailForwardingResultType };
}

interface _DomainDNSGetHostsResultType extends BaseType {
    Domain: string;
    IsUsingOurDNS: boolean;
    Host: HostType[];
}

interface DomainDNSGetHostsResultType extends _DomainDNSGetHostsResultType {
    constructor: { new(): DomainDNSGetHostsResultType };
}

interface _DomainDNSGetListResultType extends BaseType {
    Domain: string;
    IsUsingOurDNS: boolean;
    Nameserver: string[];
}

interface DomainDNSGetListResultType extends _DomainDNSGetListResultType {
    constructor: { new(): DomainDNSGetListResultType };
}

interface _DomainDNSSetCustomResultType extends BaseType {
    Domain: string;
    Updated: boolean;
}

interface DomainDNSSetCustomResultType extends _DomainDNSSetCustomResultType {
    constructor: { new(): DomainDNSSetCustomResultType };
}

interface _DomainDNSSetDefaultResultType extends BaseType {
    Domain: string;
    Updated: boolean;
}

interface DomainDNSSetDefaultResultType extends _DomainDNSSetDefaultResultType {
    constructor: { new(): DomainDNSSetDefaultResultType };
}

interface _DomainDNSSetEmailForwardingResultType extends BaseType {
    Domain: string;
    IsSuccess: boolean;
}

interface DomainDNSSetEmailForwardingResultType extends _DomainDNSSetEmailForwardingResultType {
    constructor: { new(): DomainDNSSetEmailForwardingResultType };
}

interface _DomainDNSSetHostsResultType extends BaseType {
    Domain: string;
    IsSuccess: boolean;
}

interface DomainDNSSetHostsResultType extends _DomainDNSSetHostsResultType {
    constructor: { new(): DomainDNSSetHostsResultType };
}

interface _DomainemailsType extends BaseType {
    Email: string;
}

interface DomainemailsType extends _DomainemailsType {
    constructor: { new(): DomainemailsType };
}

interface _DomainGetInfoResultType extends _DomainDetails {
    DomainName: string;
    ID: number;
    IsOwner: boolean;
    IsPremium: boolean;
    OwnerName: string;
    Status: string;
    DnsDetails: DnsDetailsType;
    LockDetails: LockDetailsType;
    Modificationrights: ModificationrightsType;
    Whoisguard: WhoisguardType;
}

interface DomainGetInfoResultType extends _DomainGetInfoResultType {
    constructor: { new(): DomainGetInfoResultType };
}

interface _DomainGetListResultType extends BaseType {
    Domain: DomainType[];
}

interface DomainGetListResultType extends _DomainGetListResultType {
    constructor: { new(): DomainGetListResultType };
}

interface _DomainGetRegistrarLockResultType extends BaseType {
    Domain: string;
    RegistrarLockStatus: boolean;
}

interface DomainGetRegistrarLockResultType extends _DomainGetRegistrarLockResultType {
    constructor: { new(): DomainGetRegistrarLockResultType };
}

interface _DomainNSCreateResultType extends BaseType {
    Domain: string;
    IP: string;
    IsSuccess: boolean;
    Nameserver: string;
}

interface DomainNSCreateResultType extends _DomainNSCreateResultType {
    constructor: { new(): DomainNSCreateResultType };
}

interface _DomainNSDeleteResultType extends BaseType {
    Domain: string;
    IsSuccess: boolean;
    Nameserver: string;
}

interface DomainNSDeleteResultType extends _DomainNSDeleteResultType {
    constructor: { new(): DomainNSDeleteResultType };
}

interface _DomainNSInfoResultType extends BaseType {
    Domain: string;
    IP: string;
    Nameserver: string;
    NameserverStatuses: NameserverStatusesType;
}

interface DomainNSInfoResultType extends _DomainNSInfoResultType {
    constructor: { new(): DomainNSInfoResultType };
}

interface _DomainNSUpdateResultType extends BaseType {
    Domain: string;
    IsSuccess: boolean;
    Nameserver: string;
}

interface DomainNSUpdateResultType extends _DomainNSUpdateResultType {
    constructor: { new(): DomainNSUpdateResultType };
}

interface _DomainReactivateResultType extends BaseType {
    ChargedAmount: number;
    Domain: string;
    IsSuccess: boolean;
    OrderID: number;
    TransactionID: number;
}

interface DomainReactivateResultType extends _DomainReactivateResultType {
    constructor: { new(): DomainReactivateResultType };
}

interface _DomainRenewResultType extends _DomainDetails {
    ChargedAmount: number;
    DomainID: number;
    DomainName: string;
    OrderID: number;
    Renew: boolean;
    TransactionID: number;
}

interface DomainRenewResultType extends _DomainRenewResultType {
    constructor: { new(): DomainRenewResultType };
}

interface _DomainSetContactResultType extends BaseType {
    Domain: string;
    IsSuccess: boolean;
}

interface DomainSetContactResultType extends _DomainSetContactResultType {
    constructor: { new(): DomainSetContactResultType };
}

interface _DomainSetRegistrarLockResultType extends BaseType {
    Domain: string;
    IsSuccess: boolean;
}

interface DomainSetRegistrarLockResultType extends _DomainSetRegistrarLockResultType {
    constructor: { new(): DomainSetRegistrarLockResultType };
}

interface _DomainsType extends BaseType {
}

interface DomainsType extends _DomainsType {
    constructor: { new(): DomainsType };
}

interface _DomainTransferCreateResultType extends BaseType {
    ChargedAmount: number;
    Domainname: string;
    OrderID: number;
    StatusCode: number;
    StatusID: number;
    TransactionID: number;
    Transfer: boolean;
    TransferID: number;
}

interface DomainTransferCreateResultType extends _DomainTransferCreateResultType {
    constructor: { new(): DomainTransferCreateResultType };
}

interface _DomainTransferGetStatusResultType extends BaseType {
    StatusID: number;
    TransferID: number;
}

interface DomainTransferGetStatusResultType extends _DomainTransferGetStatusResultType {
    constructor: { new(): DomainTransferGetStatusResultType };
}

interface _DomainTransferUpdateStatusResultType extends BaseType {
    Resubmit: boolean;
    TransferID: number;
}

interface DomainTransferUpdateStatusResultType extends _DomainTransferUpdateStatusResultType {
    constructor: { new(): DomainTransferUpdateStatusResultType };
}

interface _DomainType extends BaseType {
    AutoRenew: boolean;
    ID: number;
    IsExpired: boolean;
    IsLocked: boolean;
    IsOurDNS: boolean;
    IsPremium: boolean;
    Name: string;
    User: string;
    WhoisGuard: string;
}

interface DomainType extends _DomainType {
    constructor: { new(): DomainType };
}

interface _ErrorsType extends BaseType {
    Error?: ErrorType[];
}

interface ErrorsType extends _ErrorsType {
    constructor: { new(): ErrorsType };
}

interface _ErrorType extends Primitive._string {
    Number: number;
}

interface ErrorType extends _ErrorType {
    constructor: { new(): ErrorType };
}

interface _ForwardType extends Primitive._string {
    mailbox: string;
}

interface ForwardType extends _ForwardType {
    constructor: { new(): ForwardType };
}

interface _GenericemailsType extends BaseType {
    Email: string[];
}

interface GenericemailsType extends _GenericemailsType {
    constructor: { new(): GenericemailsType };
}

interface _GetAddFundsStatusResultType extends BaseType {
    Amount: number;
    Status: string;
    TransactionID: number;
}

interface GetAddFundsStatusResultType extends _GetAddFundsStatusResultType {
    constructor: { new(): GetAddFundsStatusResultType };
}

interface _GetAddressInfoResultType extends BaseType {
    Address1: string;
    Address2: string;
    AddressId: number;
    AddressName: string;
    City: string;
    Country: string;
    Default_YN: boolean;
    EmailAddress: string;
    Fax: number;
    FirstName: string;
    JobTitle: string;
    LastName: string;
    Organization: string;
    Phone: number;
    PhoneExt: string;
    StateProvince: string;
    StateProvinceChoice: string;
    UserName: string;
    Zip: number;
}

interface GetAddressInfoResultType extends _GetAddressInfoResultType {
    constructor: { new(): GetAddressInfoResultType };
}

interface _GetApproverEmailListResultType extends BaseType {
    Domain: string;
    Domainemails: DomainemailsType;
    Genericemails: GenericemailsType;
}

interface GetApproverEmailListResultType extends _GetApproverEmailListResultType {
    constructor: { new(): GetApproverEmailListResultType };
}

interface _HostNameType extends BaseType {
}

interface HostNameType extends _HostNameType {
    constructor: { new(): HostNameType };
}

interface _HostType extends BaseType {
    Address: string;
    HostId: number;
    MXPref: number;
    TTL: number;
    Type: string;
}

interface HostType extends _HostType {
    constructor: { new(): HostType };
}

interface _HttpDCValidationType extends BaseType {
    ValueAvailable: boolean;
    FileContent: string;
    FileName: string;
}

interface HttpDCValidationType extends _HttpDCValidationType {
    constructor: { new(): HttpDCValidationType };
}

interface _ListType extends BaseType {
    AddressId: number;
    AddressName: string;
}

interface ListType extends _ListType {
    constructor: { new(): ListType };
}

interface _LockDetailsType extends BaseType {
}

interface LockDetailsType extends _LockDetailsType {
    constructor: { new(): LockDetailsType };
}

interface _ModificationrightsType extends BaseType {
    All: boolean;
}

interface ModificationrightsType extends _ModificationrightsType {
    constructor: { new(): ModificationrightsType };
}

interface _NameserverStatusesType extends BaseType {
    Status: string[];
}

interface NameserverStatusesType extends _NameserverStatusesType {
    constructor: { new(): NameserverStatusesType };
}

interface _PagingType extends BaseType {
    CurrentPage: number;
    PageSize: number;
    TotalItems: number;
}

interface PagingType extends _PagingType {
    constructor: { new(): PagingType };
}

interface _PriceType extends BaseType {
    Currency: string;
    Duration: number;
    DurationType: string;
    Price: number;
    RegularPrice: number;
    YourPrice: number;
}

interface PriceType extends _PriceType {
    constructor: { new(): PriceType };
}

interface _ProductCategoryType extends BaseType {
    Name: string;
    Product: ProductType[];
}

interface ProductCategoryType extends _ProductCategoryType {
    constructor: { new(): ProductCategoryType };
}

interface _ProductType extends BaseType {
    Name: string;
    Price: PriceType[];
}

interface ProductType extends _ProductType {
    constructor: { new(): ProductType };
}

interface _ProductTypeType extends BaseType {
    Name: string;
    ProductCategory: ProductCategoryType[];
}

interface ProductTypeType extends _ProductTypeType {
    constructor: { new(): ProductTypeType };
}

interface _ProviderType extends BaseType {
    Name: string;
    OrderID: number;
}

interface ProviderType extends _ProviderType {
    constructor: { new(): ProviderType };
}

interface _RegistrantNexusCountryType extends BaseType {
}

interface RegistrantNexusCountryType extends _RegistrantNexusCountryType {
    constructor: { new(): RegistrantNexusCountryType };
}

interface _RegistrantType extends BaseType {
    ReadOnly: boolean;
    Address1: string;
    Address2: string;
    City: string;
    Country: string;
    EmailAddress: string;
    Fax: number;
    FirstName: string;
    JobTitle: string;
    LastName: string;
    OrganizationName: string;
    Phone: number;
    PhoneExt: string;
    PostalCode: number;
    StateProvince: string;
    StateProvinceChoice: string;
}

interface RegistrantType extends _RegistrantType {
    constructor: { new(): RegistrantType };
}

interface _RevokeCertificateResultType extends BaseType {
    ID: number;
    IsSuccess: boolean;
}

interface RevokeCertificateResultType extends _RevokeCertificateResultType {
    constructor: { new(): RevokeCertificateResultType };
}

interface _SSLActivateResultType extends BaseType {
    ID: number;
    IsSuccess: boolean;
}

interface SSLActivateResultType extends _SSLActivateResultType {
    constructor: { new(): SSLActivateResultType };
}

interface _SSLCertificate extends BaseType {
    SSLCertificate: SSLCertificateType;
}

export interface SSLCertificate extends _SSLCertificate {
    constructor: { new(): SSLCertificate };
}

export let SSLCertificate: { new(): SSLCertificate };

interface _SSLCertificateType extends BaseType {
    CertificateID: number;
    SANSCount: number;
    Status: string;
    Years: number;
}

interface SSLCertificateType extends _SSLCertificateType {
    constructor: { new(): SSLCertificateType };
}

interface _SSLCreateResultType extends _SSLCertificate {
    ChargedAmount: number;
    IsSuccess: boolean;
    OrderId: number;
    TransactionId: number;
}

interface SSLCreateResultType extends _SSLCreateResultType {
    constructor: { new(): SSLCreateResultType };
}

interface _SSLEditDCVMethodResultType extends BaseType {
    ID: number;
    IsSuccess: boolean;
    DNSDCValidation: DNSDCValidationType;
    Domains: DomainsType;
    HttpDCValidation: HttpDCValidationType;
}

interface SSLEditDCVMethodResultType extends _SSLEditDCVMethodResultType {
    constructor: { new(): SSLEditDCVMethodResultType };
}

interface _SSLGetInfoResultType extends BaseType {
    OrderId: number;
    ReplacedBy: number;
    SANSCount: number;
    Status: string;
    Type: string;
    CertificateDetails: CertificateDetailsType;
    Provider: ProviderType;
}

interface SSLGetInfoResultType extends _SSLGetInfoResultType {
    constructor: { new(): SSLGetInfoResultType };
}

interface _SSLListResultType extends BaseType {
    SSL: SSLType[];
}

interface SSLListResultType extends _SSLListResultType {
    constructor: { new(): SSLListResultType };
}

interface _SSLParseCSRResultType extends BaseType {
    CSRDetails: CSRDetailsType;
    HttpDCValidation: HttpDCValidationType;
}

interface SSLParseCSRResultType extends _SSLParseCSRResultType {
    constructor: { new(): SSLParseCSRResultType };
}

interface _SSLPurchaseMoreSANSResultType extends _SSLCertificate {
    ChargedAmount: number;
    IsSuccess: boolean;
    OrderId: number;
    TransactionId: number;
}

interface SSLPurchaseMoreSANSResultType extends _SSLPurchaseMoreSANSResultType {
    constructor: { new(): SSLPurchaseMoreSANSResultType };
}

interface _SSLReissueResultType extends BaseType {
    ID: number;
    IsSuccess: boolean;
    HttpDCValidation: HttpDCValidationType;
}

interface SSLReissueResultType extends _SSLReissueResultType {
    constructor: { new(): SSLReissueResultType };
}

interface _SSLRenewResultType extends BaseType {
    CertificateID: number;
    ChargedAmount: number;
    OrderId: number;
    TransactionId: number;
    Years: number;
}

interface SSLRenewResultType extends _SSLRenewResultType {
    constructor: { new(): SSLRenewResultType };
}

interface _SSLResendApproverEmailResultType extends BaseType {
    ID: number;
    IsSuccess: boolean;
}

interface SSLResendApproverEmailResultType extends _SSLResendApproverEmailResultType {
    constructor: { new(): SSLResendApproverEmailResultType };
}

interface _SSLResendFulfillmentEmailResultType extends BaseType {
    ID: number;
    IsSuccess: boolean;
}

interface SSLResendFulfillmentEmailResultType extends _SSLResendFulfillmentEmailResultType {
    constructor: { new(): SSLResendFulfillmentEmailResultType };
}

interface _SSLType extends BaseType {
    CertificateID: number;
    HostName: string;
    IsExpiredYN: boolean;
    SSLType: string;
    Status: string;
}

interface SSLType extends _SSLType {
    constructor: { new(): SSLType };
}

interface _TargetType extends BaseType {
}

interface TargetType extends _TargetType {
    constructor: { new(): TargetType };
}

interface _TechType extends BaseType {
    ReadOnly: boolean;
    Address1: string;
    Address2: string;
    City: string;
    Country: string;
    EmailAddress: string;
    Fax: number;
    FirstName: string;
    JobTitle: string;
    LastName: string;
    OrganizationName: string;
    Phone: number;
    PhoneExt: string;
    PostalCode: number;
    StateProvince: string;
    StateProvinceChoice: string;
}

interface TechType extends _TechType {
    constructor: { new(): TechType };
}

interface _TldsType extends BaseType {
    Tld: TldType[];
}

interface TldsType extends _TldsType {
    constructor: { new(): TldsType };
}

interface _TldType extends Primitive._string {
    Category: string;
    IsApiRegisterable: boolean;
    IsApiRenewable: boolean;
    IsApiTransferable: boolean;
    IsDisableModContact: boolean;
    IsDisableWGAllot: boolean;
    IsEppRequired: boolean;
    IsIncludeInExtendedSearchOnly: boolean;
    IsSupportsIDN: boolean;
    MaxRegisterYears: number;
    MaxRenewYears: number;
    MaxTransferYears: number;
    MinRegisterYears: number;
    MinRenewYears: number;
    MinTransferYears: number;
    Name: string;
    NonRealTime: boolean;
    SequenceNumber: number;
    Type: string;
}

interface TldType extends _TldType {
    constructor: { new(): TldType };
}

interface _TransferGetListResultType extends BaseType {
    Transfer: TransferType[];
}

interface TransferGetListResultType extends _TransferGetListResultType {
    constructor: { new(): TransferGetListResultType };
}

interface _TransferType extends BaseType {
    Domainname: string;
    ID: number;
    OrderID: number;
    Status: string;
    StatusID: number;
    User: string;
}

interface TransferType extends _TransferType {
    constructor: { new(): TransferType };
}

interface _UserChangePasswordResultType extends BaseType {
    Success: boolean;
    UserId: number;
}

interface UserChangePasswordResultType extends _UserChangePasswordResultType {
    constructor: { new(): UserChangePasswordResultType };
}

interface _UserCreateResultType extends BaseType {
    Success: boolean;
    UserId: number;
}

interface UserCreateResultType extends _UserCreateResultType {
    constructor: { new(): UserCreateResultType };
}

interface _UserGetBalancesResultType extends BaseType {
    AccountBalance: number;
    AvailableBalance: number;
    Currency: string;
    EarnedAmount: number;
    FundsRequiredForAutoRenew: number;
    WithdrawableAmount: number;
}

interface UserGetBalancesResultType extends _UserGetBalancesResultType {
    constructor: { new(): UserGetBalancesResultType };
}

interface _UserGetPricingResultType extends BaseType {
    ProductType: ProductTypeType;
}

interface UserGetPricingResultType extends _UserGetPricingResultType {
    constructor: { new(): UserGetPricingResultType };
}

interface _UserLoginResultType extends BaseType {
    LoginSuccess: boolean;
    UserName: string;
}

interface UserLoginResultType extends _UserLoginResultType {
    constructor: { new(): UserLoginResultType };
}

interface _UserResetPasswordResultType extends BaseType {
    Success: boolean;
    Email: string;
}

interface UserResetPasswordResultType extends _UserResetPasswordResultType {
    constructor: { new(): UserResetPasswordResultType };
}

interface _UserUpdateResultType extends BaseType {
    Success: boolean;
    UserId: number;
}

interface UserUpdateResultType extends _UserUpdateResultType {
    constructor: { new(): UserUpdateResultType };
}

interface _WarningsType extends BaseType {
}

interface WarningsType extends _WarningsType {
    constructor: { new(): WarningsType };
}

interface _WhoisguardAllotResultType extends BaseType {
    DomainName: string;
    ID: number;
    IsSuccess: boolean;
}

interface WhoisguardAllotResultType extends _WhoisguardAllotResultType {
    constructor: { new(): WhoisguardAllotResultType };
}

interface _WhoisguardChangeEmailAddressResultType extends BaseType {
    ID: number;
    IsSuccess: boolean;
}

interface WhoisguardChangeEmailAddressResultType extends _WhoisguardChangeEmailAddressResultType {
    constructor: { new(): WhoisguardChangeEmailAddressResultType };
}

interface _WhoisGuardContactType extends BaseType {
    Admin: AdminType;
    AuxBilling: AuxBillingType;
    CurrentAttributes: CurrentAttributesType;
    Registrant: RegistrantType;
    Tech: TechType;
}

interface WhoisGuardContactType extends _WhoisGuardContactType {
    constructor: { new(): WhoisGuardContactType };
}

interface _WhoisguardDisableResultType extends BaseType {
    DomainName: string;
    IsSuccess: boolean;
}

interface WhoisguardDisableResultType extends _WhoisguardDisableResultType {
    constructor: { new(): WhoisguardDisableResultType };
}

interface _WhoisguardDiscardResultType extends BaseType {
    ID: number;
    IsSuccess: boolean;
}

interface WhoisguardDiscardResultType extends _WhoisguardDiscardResultType {
    constructor: { new(): WhoisguardDiscardResultType };
}

interface _WhoisguardEnableResultType extends BaseType {
    DomainName: string;
    IsSuccess: boolean;
}

interface WhoisguardEnableResultType extends _WhoisguardEnableResultType {
    constructor: { new(): WhoisguardEnableResultType };
}

interface _WhoisguardGetListResultType extends BaseType {
    Whoisguard: WhoisguardType[];
}

interface WhoisguardGetListResultType extends _WhoisguardGetListResultType {
    constructor: { new(): WhoisguardGetListResultType };
}

interface _WhoisguardRenewResultType extends BaseType {
    ChargedAmount: number;
    OrderId: number;
    Renew: boolean;
    TransactionId: number;
    WhoisguardId: number;
    Years: number;
}

interface WhoisguardRenewResultType extends _WhoisguardRenewResultType {
    constructor: { new(): WhoisguardRenewResultType };
}

interface _WhoisguardType extends BaseType {
    Enabled: string;
    $ID: number;
    Status: string;
    ExpiredDate?: string;
    ID?: number;
}

interface WhoisguardType extends _WhoisguardType {
    constructor: { new(): WhoisguardType };
}

interface _WhoisguardUnallotResultType extends BaseType {
    DomainName: string;
    IsSuccess: boolean;
}

interface WhoisguardUnallotResultType extends _WhoisguardUnallotResultType {
    constructor: { new(): WhoisguardUnallotResultType };
}

export interface document extends BaseType {
    Address1: string;
    Address2: string;
    AddressCreateResult: AddressCreateResultType;
    AddressDeleteResult: AddressDeleteResultType;
    AddressGetListResult: AddressGetListResultType;
    AddressId: number;
    AddressName: string;
    AddressSetDefaultResult: AddressSetDefaultResultType;
    AddressUpdateResult: AddressUpdateResultType;
    Admin: AdminType;
    AdministratorEmail: string;
    AdministratorName: string;
    ApiResponse: ApiResponseType;
    ApproverEmail: string;
    AuxBilling: AuxBillingType;
    CaCertificates: CaCertificatesType;
    Certificate: CertificateType;
    CertificateDetails: CertificateDetailsType;
    Certificates: CertificatesType;
    City: string;
    CommandResponse: CommandResponseType;
    CommonName: string;
    Country: string;
    CreateAddFundsRequestResult: CreateAddFundsRequestResultType;
    CreatedDate: string;
    CSR: string;
    CSRDetails: CSRDetailsType;
    CurrentAttributes: CurrentAttributesType;
    CurrentPage: number;
    Default_YN: boolean;
    DNSDCValidation: DNSDCValidationType;
    DnsDetails: DnsDetailsType;
    Domain: DomainType;
    DomainCheckResult: DomainCheckResultType;
    DomainContactsResult: DomainContactsResultType;
    DomainCreateResult: DomainCreateResultType;
    DomainDetails: DomainDetailsType;
    DomainDNSGetEmailForwardingResult: DomainDNSGetEmailForwardingResultType;
    DomainDNSGetHostsResult: DomainDNSGetHostsResultType;
    DomainDNSGetListResult: DomainDNSGetListResultType;
    DomainDNSSetCustomResult: DomainDNSSetCustomResultType;
    DomainDNSSetDefaultResult: DomainDNSSetDefaultResultType;
    DomainDNSSetEmailForwardingResult: DomainDNSSetEmailForwardingResultType;
    DomainDNSSetHostsResult: DomainDNSSetHostsResultType;
    Domainemails: DomainemailsType;
    DomainGetInfoResult: DomainGetInfoResultType;
    DomainGetListResult: DomainGetListResultType;
    DomainGetRegistrarLockResult: DomainGetRegistrarLockResultType;
    DomainName: string;
    DomainNSCreateResult: DomainNSCreateResultType;
    DomainNSDeleteResult: DomainNSDeleteResultType;
    DomainNSInfoResult: DomainNSInfoResultType;
    DomainNSUpdateResult: DomainNSUpdateResultType;
    DomainReactivateResult: DomainReactivateResultType;
    DomainRenewResult: DomainRenewResultType;
    Domains: DomainsType;
    DomainSetContactResult: DomainSetContactResultType;
    DomainSetRegistrarLockResult: DomainSetRegistrarLockResultType;
    DomainTransferCreateResult: DomainTransferCreateResultType;
    DomainTransferGetStatusResult: DomainTransferGetStatusResultType;
    DomainTransferUpdateStatusResult: DomainTransferUpdateStatusResultType;
    Email: string;
    EmailAddress: string;
    Error: ErrorType;
    Errors: ErrorsType;
    ExecutionTime: number;
    ExpiredDate: string;
    Fax: number;
    FileContent: string;
    FileName: string;
    FirstName: string;
    Forward: ForwardType;
    Genericemails: GenericemailsType;
    GetAddFundsStatusResult: GetAddFundsStatusResultType;
    GetAddressInfoResult: GetAddressInfoResultType;
    GetApproverEmailListResult: GetApproverEmailListResultType;
    GMTTimeDifference: string;
    Host: HostType;
    HostName: HostNameType;
    HttpDCValidation: HttpDCValidationType;
    ID: number;
    JobTitle: string;
    LastName: string;
    List: ListType;
    Locality: string;
    LockDetails: LockDetailsType;
    Modificationrights: ModificationrightsType;
    Name: string;
    Nameserver: string;
    NameserverStatuses: NameserverStatusesType;
    NumYears: number;
    OrderID: number;
    Organisation: string;
    OrganisationUnit: string;
    Organization: string;
    OrganizationName: string;
    PageSize: number;
    Paging: PagingType;
    Phone: number;
    PhoneExt: string;
    PostalCode: number;
    Price: PriceType;
    Product: ProductType;
    ProductCategory: ProductCategoryType;
    ProductType: ProductTypeType;
    Provider: ProviderType;
    Registrant: RegistrantType;
    RegistrantNexus: string;
    RegistrantNexusCountry: RegistrantNexusCountryType;
    RegistrantPurpose: string;
    RequestedCommand: string;
    RevokeCertificateResult: RevokeCertificateResultType;
    Server: string;
    SSL: SSLType;
    SSLActivateResult: SSLActivateResultType;
    SSLCertificate: SSLCertificateType;
    SSLCreateResult: SSLCreateResultType;
    SSLEditDCVMethodResult: SSLEditDCVMethodResultType;
    SSLGetInfoResult: SSLGetInfoResultType;
    SSLListResult: SSLListResultType;
    SSLParseCSRResult: SSLParseCSRResultType;
    SSLPurchaseMoreSANSResult: SSLPurchaseMoreSANSResultType;
    SSLReissueResult: SSLReissueResultType;
    SSLRenewResult: SSLRenewResultType;
    SSLResendApproverEmailResult: SSLResendApproverEmailResultType;
    SSLResendFulfillmentEmailResult: SSLResendFulfillmentEmailResultType;
    State: string;
    StateProvince: string;
    StateProvinceChoice: string;
    Status: string;
    Target: TargetType;
    Tech: TechType;
    Tld: TldType;
    Tlds: TldsType;
    TotalItems: number;
    Transfer: TransferType;
    TransferGetListResult: TransferGetListResultType;
    UserChangePasswordResult: UserChangePasswordResultType;
    UserCreateResult: UserCreateResultType;
    UserGetBalancesResult: UserGetBalancesResultType;
    UserGetPricingResult: UserGetPricingResultType;
    UserLoginResult: UserLoginResultType;
    UserName: string;
    UserResetPasswordResult: UserResetPasswordResultType;
    UserUpdateResult: UserUpdateResultType;
    ValidTrueDomain: boolean;
    Warnings: WarningsType;
    Whoisguard: WhoisguardType;
    WhoisguardAllotResult: WhoisguardAllotResultType;
    WhoisguardChangeEmailAddressResult: WhoisguardChangeEmailAddressResultType;
    WhoisGuardContact: WhoisGuardContactType;
    WhoisguardDisableResult: WhoisguardDisableResultType;
    WhoisguardDiscardResult: WhoisguardDiscardResultType;
    WhoisguardEnableResult: WhoisguardEnableResultType;
    WhoisguardGetListResult: WhoisguardGetListResultType;
    WhoisguardRenewResult: WhoisguardRenewResultType;
    WhoisguardUnallotResult: WhoisguardUnallotResultType;
    Zip: number;
}

export let document: document;
