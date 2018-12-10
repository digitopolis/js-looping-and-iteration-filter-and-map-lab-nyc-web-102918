// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const list = driversWithRevenueOver(drivers, revenue);
  return list.map(function(driver) {
    return driver.name;
  })
}

function exactMatch(drivers, attr) {
  return drivers.filter(function(driver) {
    let matches = [];
    for (const key in attr) {
      matches = driver[key] === attr[key]
    }
    return matches;
  })
}

function exactMatchToList(drivers, attr) {
  const matches = exactMatch(drivers, attr);
  return matches.map(function(driver) {
    return driver.name;
  })
}
