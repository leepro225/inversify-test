import BillingApi from "./billingApi";

export interface Plan {
    state: "active" | "none";
}

export interface IBillingApi {
    getPlan(): Promise<Plan>;
}

export interface IBillingService {
    getHasSubscription(): Promise<boolean>;
}

class BillingService implements IBillingService {
    private _billingApi: IBillingApi = new BillingApi(); // coupling, BillingApi 내부가 바뀌면 BillingService 내부도 변경되어야 함.
    
    async getHasSubscription() {
        console.log('coupling, _billingApi', this._billingApi);

        const plan = await this._billingApi.getPlan();

        return plan.state === 'active';
    }
}

const coupling = async () => {
    return await new BillingService().getHasSubscription();
}

export default coupling;


