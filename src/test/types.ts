export interface Plan {
    state: "active" | "none";
}

export interface IBillingApi {
    getPlan(): Promise<Plan>;
}

export interface IBillingService {
    getHasSubscription(): Promise<boolean>;
}

export const TYPES = {
    BillingApi: Symbol.for("BillingApi"),
}