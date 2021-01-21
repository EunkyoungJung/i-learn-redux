import React from "react";

// Test 밖에!
const outsideTestFunction = () => {
  console.log("> I call outsideTestFuction!");
};
console.log("Outside of Test----------");
outsideTestFunction();
console.log("----------outside TesT");

const Test = () => {
  // Test 안에!
  const insideTestFunction = () => {
    console.log("> I call insideTestFuction");
  };
  console.log("Inside Test----------");
  insideTestFunction();
  outsideTestFunction();
  console.log("----------inside TesT");
  return <div>Test Component</div>;
};

export default Test;
