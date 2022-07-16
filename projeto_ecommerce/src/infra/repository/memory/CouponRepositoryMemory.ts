import Coupon from "../../../domain/entity/Coupon";
import Order from "../../../domain/entity/Order";
import CouponRepository from "../../../domain/repository/CouponRepository";

export default class CouponRepositoryMemory implements CouponRepository {
  coupons: Coupon[];

  constructor() {
    this.coupons = [];
  }

  async save(coupon: Coupon): Promise<void> {
    this.coupons.push(coupon);
  }

  async get(code: string): Promise<Coupon> {
    const coupon = this.coupons.find((coupon) => coupon.code === code);
    if (!coupon) throw new Error("Coupon not found");
    return coupon;
  }
}
