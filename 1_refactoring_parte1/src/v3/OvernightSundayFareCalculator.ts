import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class OvernightSundayFareCalculator implements FareCalculator {
  OVERNIGHT_SUNDAY_FARE = 5;

  constructor(readonly next?: FareCalculator) {}

  calculate(segment: Segment): number {
    if (segment.isOvernight() && segment.isSunday()) {
      return segment.distance * this.OVERNIGHT_SUNDAY_FARE;
    }
    if (!this.next) throw new Error("");
    return this.next?.calculate(segment);
  }
}
