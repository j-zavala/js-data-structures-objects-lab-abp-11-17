// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = {...driver};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = {...driver};
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromdriverByKey(driver, key) {
  console.log(driver);
  // delete driver[key];
  // return driver;
  // const newdriver = {...driver};
  // delete newdriver[key];
  // delete driver[key];
  // return newdriver;
}
