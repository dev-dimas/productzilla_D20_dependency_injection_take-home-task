/**
 * Calculate the area of ​​a square.
 * @param {number} side - The square's side length.
 * @returns {number} The area of a square.
 */
const areaSquare = (side) => side * side;

/**
 * Calculate the perimeter of ​​a square.
 * @param {number} side - The square's side length.
 * @returns {number} The perimeter of a square.
 */
const perimeterSquare = (side) => 4 * side;

/**
 * Calculate the area of ​​a triangle.
 * @param {number} base - The triangle's base length.
 * @param {number} height - The triangle's height.
 * @returns {number} The area of a triangle.
 */
const areaTriangle = (base, height) => (1 / 2) * base * height;

/**
 * Calculate the perimeter of ​​a triangle.
 * @param {number} firstSide - The length of a triangle's first side.
 * @param {number} secondSide - The length of a triangle's second side.
 * @param {number} thirdSide - The length of a triangle's third side.
 * @returns {number} The perimeter of a triangle.
 */
const perimeterTriangle = (firstSide, secondSide, thirdSide) => firstSide + secondSide + thirdSide;

/**
 * Calculate the area of ​​a circle.
 * @param {number} radius - The circle's radius.
 * @returns {number} The area of a circle.
 */
const areaCircle = (radius) => Math.PI * radius * radius;

/**
 * Calculate the circumference of ​​a circle.
 * @param {number} radius - The circle's radius.
 * @returns {number} The circumference of a circle.
 */
const circumferenceCircle = (radius) => 2 * Math.PI * radius;

module.exports = {
  areaSquare,
  perimeterSquare,
  areaTriangle,
  perimeterTriangle,
  areaCircle,
  circumferenceCircle,
};
