import BillingApi from "./billingApi"; // inversify를 이용해 주입했기 때문에 필요없음
import container from "./inversify.config";
import {IBillingService, IBillingApi, TYPES} from "./types";

class BillingService implements IBillingService {
    // private _billingApi: IBillingApi = new BillingApi(); // coupling, BillingApi 내부가 바뀌면 BillingService 내부도 변경되어야 함.
    private _billingApi = container.get<IBillingApi>(TYPES.BillingApi); // inversify를 이용해 주입
    
    async getHasSubscription() {
        console.log('uncoupling, _billingApi', this._billingApi);

        const plan = await this._billingApi.getPlan();

        return plan.state === 'active';
    }
}

const coupling = async () => {
    return await new BillingService().getHasSubscription();
}

export default coupling;


