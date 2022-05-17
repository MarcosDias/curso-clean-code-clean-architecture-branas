import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class SundayFareCalculator implements FareCalculator {
  SUNDAY_FARE = 2.9;

  constructor(readonly next?: FareCalculator) {}

  calculate(segment: Segment): number {
    if (segment.isSunday() && !segment.isOvernight()) {
      return segment.distance * this.SUNDAY_FARE;
    }
    if (!this.next) throw new Error("");
    return this.next?.calculate(segment);
  }
}
