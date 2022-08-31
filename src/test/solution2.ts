import BillingApi from "./billingApi"

export interface Plan {
    state: "active" | "none";
}

export interface IBillingApi {
    getPlan(): Promise<Plan>;
}

class BillingService {
    private _billingApi!: IBillingApi;

    public setBillingApi(billingApi: IBillingApi) { // solution2 프로퍼티를 외부에서 주입하는 방법
        this._billingApi = billingApi;
    }

    async getHasSubscription() {
        console.log('solution2, _billingApi', this._billingApi);

        const plan = await this._billingApi.getPlan();

        return plan.state === 'active';
    }
}

const solution2 = async () => {
    const billingApi = new BillingApi();
    const billingService = new BillingService();
    billingService.setBillingApi(billingApi);
    return await billingService.getHasSubscription();
}

export default solution2;