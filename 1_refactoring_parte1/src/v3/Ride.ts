import FareCalculator from "../v3/FareCalculator";
import Segment from "./Segment";

export default class Ride {
  segments: Segment[];
  MIN_FARE = 10;

  constructor(readonly fareCalculator: FareCalculator) {
    this.segments = [];
  }

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date));
  }

  finish() {
    let fare = 0;
    for (const segment of this.segments) {
      // Usando com factory
      // const fareCalculator = FareCalculatorFactory.create(segment);
      // fare += fareCalculator.calculate(segment);
      fare += this.fareCalculator.calculate(segment);
    }
    return fare > this.MIN_FARE ? fare : this.MIN_FARE;
  }
}
