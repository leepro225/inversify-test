import BillingApi from "./billingApi"

export interface Plan {
    state: "active" | "none";
}

export interface IBillingApi {
    getPlan(): Promise<Plan>;
}


class BillingService {
    constructor(private _billingApi: IBillingApi) {} // solution1 파라메터로 주입

    async getHasSubscription() {
        console.log('solution1, _billingApi', this._billingApi);
        const plan = await this._billingApi.getPlan();

        return plan.state === 'active';
    }
}

const solution1 = async () => {
    return await new BillingService(new BillingApi()).getHasSubscription();
}

export default solution1;