// @ts-nocheck

const OVERNIGHT_FARE = 3.9;
const SUNDAY_FARE = 2.9;
const OVERNIGHT_SUNDAY_FARE = 5;
const NORMAL_FARE = 2.1;
const OVERNIGHT_START = 22;
const OVERNIGHT_END = 6;
const MIN_FARE = 10;

// calculate ride
export function calculateRide(segments) {
  let fare = 0;
  for (const segment of segments) {
    if (
      segment.distance != null &&
      segment.distance != undefined &&
      typeof segment.distance === "number" &&
      segment.distance > 0
    ) {
      if (
        segment.date != null &&
        segment.date != undefined &&
        segment.date instanceof Date &&
        segment.date.toString() !== "Invalid Date"
      ) {
        // overnight

        if (segment.date.getHours() >= OVERNIGHT_START || segment.date.getHours() <= OVERNIGHT_END) {
          // not sunday
          if (segment.date.getDay() !== 0) {
            fare += segment.distance * OVERNIGHT_FARE;
            // sunday
          } else {
            fare += segment.distance * OVERNIGHT_SUNDAY_FARE;
          }
        } else {
          // sunday
          if (segment.date.getDay() === 0) {
            fare += segment.distance * SUNDAY_FARE;
          } else {
            fare += segment.distance * NORMAL_FARE;
          }
        }
      } else {
        // console.log(d);
        return -2;
      }
    } else {
      // console.log(dist);

      return -1;
    }
  }
  if (fare < MIN_FARE) {
    return MIN_FARE;
  } else {
    return fare;
  }
}
