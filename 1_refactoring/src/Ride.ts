import Segment from "./Segment";

export default class Ride {
  segments: Segment[];

  OVERNIGHT_FARE = 3.9;
  SUNDAY_FARE = 2.9;
  OVERNIGHT_SUNDAY_FARE = 5;
  NORMAL_FARE = 2.1;
  OVERNIGHT_START = 22;
  OVERNIGHT_END = 6;
  MIN_FARE = 10;

  constructor() {
    this.segments = [];
  }

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date));
  }

  isOvernight(date: Date) {
    return (
      date.getHours() >= this.OVERNIGHT_START ||
      date.getHours() <= this.OVERNIGHT_END
    );
  }

  isSunday(date: Date) {
    return date.getDay() === 0;
  }

  isValidDistance(distance: number) {
    return (
      distance != null &&
      distance != undefined &&
      typeof distance === "number" &&
      distance > 0
    );
  }

  isValidDate(date: Date) {
    return (
      date != null &&
      date != undefined &&
      date instanceof Date &&
      date.toString() !== "Invalid Date"
    );
  }

  finish() {
    let fare = 0;
    for (const segment of this.segments) {
      if (segment.isOvernight() && !segment.isSunday()) {
        fare += segment.distance * this.OVERNIGHT_FARE;
        continue;
      }
      if (segment.isOvernight() && segment.isSunday()) {
        fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
        continue;
      }
      if (segment.isSunday()) {
        fare += segment.distance * this.SUNDAY_FARE;
        continue;
      }
      fare += segment.distance * this.NORMAL_FARE;
    }
    return fare > this.MIN_FARE ? fare : this.MIN_FARE;
  }
}
