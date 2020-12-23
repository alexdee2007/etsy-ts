import * as api from '../index';
import { Method } from 'axios';
export declare class HttpError extends Error {
    message: string;
    statusCode: number;
    headers: [];
    constructor(message: string, statusCode: number, headers: []);
}
export interface IAuthOptions {
    token: string;
    tokenSecret: string;
}
export interface IOptions {
    baseUrl?: string;
    requestUrl?: string;
    accessUrl?: string;
    consumerKey: string;
    consumerSecret: string;
    version?: string;
    authorizeCallback?: string | null;
    signatureMethod?: string;
}
export declare class ClientOauth {
    private readonly etsyOAuth;
    private baseUrl;
    private requestUrl;
    private accessUrl;
    private consumerKey;
    private consumerSecret;
    private version;
    private authorizeCallback;
    private signatureMethod;
    ApiMethod: api.ApiMethod;
    Avatar: api.Avatar;
    BillCharge: api.BillCharge;
    BillingOverview: api.BillingOverview;
    BillPayment: api.BillPayment;
    Cart: api.Cart;
    Country: api.Country;
    Coupon: api.Coupon;
    DataType: api.DataType;
    FavoriteListing: api.FavoriteListing;
    FavoriteUser: api.FavoriteUser;
    FeaturedTreasury: api.FeaturedTreasury;
    Feedback: api.Feedback;
    ForumPost: api.ForumPost;
    Guest: api.Guest;
    GuestCart: api.GuestCart;
    ImageType: api.ImageType;
    Ledger: api.Ledger;
    LedgerEntry: api.LedgerEntry;
    Listing: api.Listing;
    ListingFile: api.ListingFile;
    ListingImage: api.ListingImage;
    ListingInventory: api.ListingInventory;
    ListingOffering: api.ListingOffering;
    ListingProduct: api.ListingProduct;
    ListingTranslation: api.ListingTranslation;
    ListingVariationImage: api.ListingVariationImage;
    Payment: api.Payment;
    PaymentAccountLedgerEntry: api.PaymentAccountLedgerEntry;
    PaymentAdjustment: api.PaymentAdjustment;
    PaymentAdjustmentItem: api.PaymentAdjustmentItem;
    PaymentTemplate: api.PaymentTemplate;
    PropertyValue: api.PropertyValue;
    Receipt: api.Receipt;
    Region: api.Region;
    ShippingInfo: api.ShippingInfo;
    ShippingTemplate: api.ShippingTemplate;
    ShippingTemplateEntry: api.ShippingTemplateEntry;
    ShippingUpgrade: api.ShippingUpgrade;
    Shop: api.Shop;
    ShopAbout: api.ShopAbout;
    ShopSection: api.ShopSection;
    ShopSectionTranslation: api.ShopSectionTranslation;
    ShopTranslation: api.ShopTranslation;
    Style: api.Style;
    Taxonomy: api.Taxonomy;
    TaxonomyNodeProperty: api.TaxonomyNodeProperty;
    Team: api.Team;
    Transaction: api.Transaction;
    Treasury: api.Treasury;
    TreasuryListing: api.TreasuryListing;
    User: api.User;
    UserAddress: api.UserAddress;
    UserProfile: api.UserProfile;
    constructor(options: IOptions);
    request<TParameters>(uri: string, parameters: TParameters, method: Method, options?: IAuthOptions): Promise<any>;
    fillUriPlaceholders(uri: string, parameters: any): string;
    encodePrameters(parameters: any): string;
}