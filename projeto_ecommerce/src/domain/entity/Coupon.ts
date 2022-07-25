export default class Coupon {
  constructor(
    readonly code: string,
    readonly percentage: number,
    readonly expiredDate = new Date()
  ) {}

  isExpired(date: Date) {
    return date.getTime() > this.expiredDate.getTime();
  }
}
