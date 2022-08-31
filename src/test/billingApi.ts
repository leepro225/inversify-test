import { injectable } from "inversify";
import "reflect-metadata";

interface Plan {
    state: 'active' | 'none';
}

interface IBillingApi {
    getPlan(): Promise<Plan>;
}

@injectable()
class BillingApi implements IBillingApi {
    async getPlan(): Promise<Plan> {
        return {
            state: 'active'
        };
    }
}

export default BillingApi;