export default class Coupon {
  constructor(
    readonly code: string,
    readonly percentage: number,
    readonly expiredDate = new Date()
  ) {}

  calculateDiscount(total: number) {
    return (total * this.percentage) / 100;
  }

  isExpired(date: Date) {
    return date.getTime() > this.expiredDate.getTime();
  }
}
