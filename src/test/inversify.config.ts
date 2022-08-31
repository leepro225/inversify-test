import { Container } from "inversify";
import BillingApi from "./billingApi";
import { TYPES, IBillingApi } from "./types";

const container = new Container();

container.bind<IBillingApi>(TYPES.BillingApi).to(BillingApi);
// 바인딩을 한는 여러 방식이 있음.

export default container;