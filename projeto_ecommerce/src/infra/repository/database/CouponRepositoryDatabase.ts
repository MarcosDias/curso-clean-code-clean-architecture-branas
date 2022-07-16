import Coupon from "../../../domain/entity/Coupon";
import CouponRepository from "../../../domain/repository/CouponRepository";

export default class CouponRepositoryDatabase implements CouponRepository {
  save(coupon: Coupon): Promise<void> {
    throw new Error("Method not implemented.");
  }
  get(code: string): Promise<Coupon> {
    throw new Error("Method not implemented.");
  }
}
