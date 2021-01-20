import * as oauth from 'oauth';
import * as api from '../index';
import axios, { Method } from 'axios';
import * as FormData from 'form-data';

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

export class Client {
    private readonly etsyOAuth: oauth.OAuth;

    // options
    private baseUrl: string;
    private requestUrl: string;
    private accessUrl: string;
    private consumerKey: string;
    private consumerSecret: string;
    private version: string;
    private authorizeCallback: string | null;
    private signatureMethod: string;

    // api
    public ApiMethod: api.ApiMethod;
    public Avatar: api.Avatar;
    public BillCharge: api.BillCharge;
    public BillingOverview: api.BillingOverview;
    public BillPayment: api.BillPayment;
    public Cart: api.Cart;
    public Country: api.Country;
    public Coupon: api.Coupon;
    public DataType: api.DataType;
    public FavoriteListing: api.FavoriteListing;
    public FavoriteUser: api.FavoriteUser;
    public FeaturedTreasury: api.FeaturedTreasury;
    public Feedback: api.Feedback;
    public ForumPost: api.ForumPost;
    public Guest: api.Guest;
    public GuestCart: api.GuestCart;
    public ImageType: api.ImageType;
    public Ledger: api.Ledger;
    public LedgerEntry: api.LedgerEntry;
    public Listing: api.Listing;
    public ListingFile: api.ListingFile;
    public ListingImage: api.ListingImage;
    public ListingInventory: api.ListingInventory;
    public ListingOffering: api.ListingOffering;
    public ListingProduct: api.ListingProduct;
    public ListingTranslation: api.ListingTranslation;
    public ListingVariationImage: api.ListingVariationImage;
    public Payment: api.Payment;
    public PaymentAccountLedgerEntry: api.PaymentAccountLedgerEntry;
    public PaymentAdjustment: api.PaymentAdjustment;
    public PaymentAdjustmentItem: api.PaymentAdjustmentItem;
    public PaymentTemplate: api.PaymentTemplate;
    public PropertyValue: api.PropertyValue;
    public Receipt: api.Receipt;
    public Region: api.Region;
    public ShippingInfo: api.ShippingInfo;
    public ShippingTemplate: api.ShippingTemplate;
    public ShippingTemplateEntry: api.ShippingTemplateEntry;
    public ShippingUpgrade: api.ShippingUpgrade;
    public Shop: api.Shop;
    public ShopAbout: api.ShopAbout;
    public ShopSection: api.ShopSection;
    public ShopSectionTranslation: api.ShopSectionTranslation;
    public ShopTranslation: api.ShopTranslation;
    public Style: api.Style;
    public Taxonomy: api.Taxonomy;
    public TaxonomyNodeProperty: api.TaxonomyNodeProperty;
    public Team: api.Team;
    public Transaction: api.Transaction;
    public Treasury: api.Treasury;
    public TreasuryListing: api.TreasuryListing;
    public User: api.User;
    public UserAddress: api.UserAddress;
    public UserProfile: api.UserProfile;

    constructor(options: IOptions) {
        this.baseUrl = options.baseUrl || 'https://openapi.etsy.com/v2';
        this.requestUrl = options.requestUrl || 'https://openapi.etsy.com/v2/oauth/request_token';
        this.accessUrl = options.accessUrl || 'https://openapi.etsy.com/v2/oauth/access_token';
        this.consumerKey = options.consumerKey;
        this.consumerSecret = options.consumerSecret;
        this.version = options.version || '1.0';
        this.authorizeCallback = options.authorizeCallback || null;
        this.signatureMethod = options.signatureMethod || 'PLAINTEXT';

        this.etsyOAuth = new oauth.OAuth(
            this.requestUrl,
            this.accessUrl,
            this.consumerKey,
            this.consumerSecret,
            this.version,
            this.authorizeCallback,
            this.signatureMethod,
        );

        this.ApiMethod = new api.ApiMethod(this);
        this.Avatar = new api.Avatar(this);
        this.BillCharge = new api.BillCharge(this);
        this.BillingOverview = new api.BillingOverview(this);
        this.BillPayment = new api.BillPayment(this);
        this.Cart = new api.Cart(this);
        this.Country = new api.Country(this);
        this.Coupon = new api.Coupon(this);
        this.DataType = new api.DataType(this);
        this.FavoriteListing = new api.FavoriteListing(this);
        this.FavoriteUser = new api.FavoriteUser(this);
        this.FeaturedTreasury = new api.FeaturedTreasury(this);
        this.Feedback = new api.Feedback(this);
        this.ForumPost = new api.ForumPost(this);
        this.Guest = new api.Guest(this);
        this.GuestCart = new api.GuestCart(this);
        this.ImageType = new api.ImageType(this);
        this.Ledger = new api.Ledger(this);
        this.LedgerEntry = new api.LedgerEntry(this);
        this.Listing = new api.Listing(this);
        this.ListingFile = new api.ListingFile(this);
        this.ListingImage = new api.ListingImage(this);
        this.ListingInventory = new api.ListingInventory(this);
        this.ListingOffering = new api.ListingOffering(this);
        this.ListingProduct = new api.ListingProduct(this);
        this.ListingTranslation = new api.ListingTranslation(this);
        this.ListingVariationImage = new api.ListingVariationImage(this);
        this.Payment = new api.Payment(this);
        this.PaymentAccountLedgerEntry = new api.PaymentAccountLedgerEntry(this);
        this.PaymentAdjustment = new api.PaymentAdjustment(this);
        this.PaymentAdjustmentItem = new api.PaymentAdjustmentItem(this);
        this.PaymentTemplate = new api.PaymentTemplate(this);
        this.PropertyValue = new api.PropertyValue(this);
        this.Receipt = new api.Receipt(this);
        this.Region = new api.Region(this);
        this.ShippingInfo = new api.ShippingInfo(this);
        this.ShippingTemplate = new api.ShippingTemplate(this);
        this.ShippingTemplateEntry = new api.ShippingTemplateEntry(this);
        this.ShippingUpgrade = new api.ShippingUpgrade(this);
        this.Shop = new api.Shop(this);
        this.ShopAbout = new api.ShopAbout(this);
        this.ShopSection = new api.ShopSection(this);
        this.ShopSectionTranslation = new api.ShopSectionTranslation(this);
        this.ShopTranslation = new api.ShopTranslation(this);
        this.Style = new api.Style(this);
        this.Taxonomy = new api.Taxonomy(this);
        this.TaxonomyNodeProperty = new api.TaxonomyNodeProperty(this);
        this.Team = new api.Team(this);
        this.Transaction = new api.Transaction(this);
        this.Treasury = new api.Treasury(this);
        this.TreasuryListing = new api.TreasuryListing(this);
        this.User = new api.User(this);
        this.UserAddress = new api.UserAddress(this);
        this.UserProfile = new api.UserProfile(this);
    }

    async request(uri: string, parameters: Record<string, any>, method: Method, options?: IAuthOptions) {
        let url = this.baseUrl + this.fillUriPlaceholders(uri, parameters);
        let body: string | undefined;
        let headers = {};

        switch (method.toUpperCase()) {
            case 'GET':
            case 'DELETE':
                if (Object.keys(parameters).length > 0) {
                    let encodedParameters = this.encodePrameters(parameters);
                    url += '?' + encodedParameters;
                }
                break;

            default:
                if (parameters.FormData && parameters.FormData instanceof <any>FormData) {
                    headers = parameters.FormData.getHeaders();
                    body = parameters.FormData;
                } else {
                    headers['Content-Type'] = 'application/json';
                    body = JSON.stringify(parameters);
                }
        }

        if (options && options.token && options.tokenSecret) {
            headers['Authorization'] = this.etsyOAuth.authHeader(url, options.token, options.tokenSecret, method);
        }

        const { data } = await axios({ method, url, data: body, headers });
        return data;
    }

    fillUriPlaceholders(uri: string, parameters: any) {
        let keys = Object.keys(parameters).filter((key) => uri.indexOf(`/:${key}`) > -1);
        keys.forEach((key) => {
            uri = uri.replace(`/:${key}`, `/${parameters[key]}`);
            delete parameters[key];
        });
        return uri;
    }

    encodePrameters(parameters: any) {
        if (Object.keys(parameters).length > 0) {
            return Object.keys(parameters)
                .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
                .join('&');
        }

        return '';
    }
}
