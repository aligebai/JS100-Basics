function calculateBMI(weightInKilograms, heightInCentimeters) {
  let heightInMeters = heightInCentimeters / 100;
  let exactBMI = weightInKilograms / heightInMeters ** 2;
  console.log(exactBMI.toFixed(2));
}

calculateBMI(80, 175);