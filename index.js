// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  for (const key in driver) {
    driver[key] = value;
    console.log(driver);
  }
}
