interface Plan {
    state: 'active' | 'none';
}

interface IBillingApi {
    getPlan(): Promise<Plan>;
}

class BillingApi implements IBillingApi {
    async getPlan(): Promise<Plan> {
        return {
            state: 'active'
        };
    }
}

export default BillingApi;