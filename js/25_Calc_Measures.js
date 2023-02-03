const objListMeasurements = JSON.parse(
  '[{"name": "Міліметр", "unit": "mm", "toCentimeters": "10", "toMeters": "1000", "toFeet": "0.00328084", "toInches": "0.0393701", "toYards": "0.001094", "toKilometers": "1000000"}, {"name": "Ярд", "unit":"yd", "toCentimeters": "0.01094", "toMeters": "1.094", "toFeet": "3", "toInches": "36", "toKilometers": "1094", "toMillimeters": "914.4"}, { "name": "Кілометр", "unit": "km", "toCentimeters": "0.00001", "toMeters": "0.001", "toFeet": "3280.84","toInches": "39370.08", "toYards":  "1093.61", "toMillimeters": "1000000"}]'
);

const objConvertTo = JSON.parse(
  '{"distance": {"unit": "m", "value": 0.5}, "convert_to": "ft"}'
);

let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");
let firstSelect = document.getElementById("firstSelect");
let secondSelect = document.getElementById("secondSelect");

//Initial items
let items = [
  {
    name: "Метр",
    unit: "m",
    toCentimeters: 0.01,
    toFeet: 3.2808,
    toInches: 39.37,
    toYards: 1.0936,
    toKilometers: 1000,
    toMillimeters: 1000,
  },
  {
    name: "Сантиметр",
    unit: "cm",
    toMeters: 100,
    toFeet: 0.032808,
    toInches: 0.3937,
    toYards: 0.010936,
    toKilometers: 100000,
    toMillimeters: 10,
  },
  {
    name: "Дюйм",
    unit: "inch",
    toCentimeters: 0.3937,
    toMeters: 39.37,
    toFeet: 0.083333,
    toInches: 0.3937,
    toYards: 0.027778,
    toKilometers: 39370,
    toMillimeters: 25.4,
  },
  {
    name: "Фут",
    unit: "ft",
    toCentimeters: 0.032808,
    toMeters: 3.2808,
    toFeet: 0.083333,
    toInches: 12,
    toYards: 0.33333,
    toKilometers: 3280.8,
    toMillimeters: 304.8,
  },
];

if (objListMeasurements.length !== 0) {
  objListMeasurements.map((el) => items.push(el));
}

// Render items for FirstSelect
function addElementsFirstSelect(items) {
  return items.map(({ name, unit }) => {
    let option = document.createElement("option");
    option.innerHTML = name;
    option.setAttribute("value", unit);
    firstSelect.appendChild(option);
  });
}

// Render items for SecondSelect
function addElementsSecondSelect(items) {
  return items.map(({ name, unit }) => {
    let option = document.createElement("option");
    option.innerHTML = name;
    option.setAttribute("value", unit);
    secondSelect.appendChild(option);
  });
}

//Result from obj JSON
function resultobjConvertTo(objConvertTo) {
  const { distance, convert_to } = objConvertTo;
  firstInput.value = distance.value;
  firstSelect.value = distance.unit;
  secondSelect.value = convert_to;
}

function resultConvetTo() {
  let firstSelectValue = firstSelect.value;
  let secondSelectValue = secondSelect.value;

  items.map(
    ({
      unit,
      toMeters,
      toCentimeters,
      toFeet,
      toInches,
      toYards,
      toKilometers,
      toMillimeters,
    }) => {
      if (firstSelectValue === secondSelectValue) {
        return (secondInput.value = firstInput.value);
      }
      if (firstSelectValue === unit && secondSelectValue === "m") {
        return (secondInput.value = (firstInput.value / toMeters).toFixed(2));
      }
      if (firstSelectValue === unit && secondSelectValue === "cm") {
        return (secondInput.value = (firstInput.value / toCentimeters).toFixed(
          2
        ));
      }
      if (firstSelectValue === unit && secondSelectValue === "mm") {
        return (secondInput.value = (firstInput.value / toMillimeters).toFixed(
          2
        ));
      }
      if (firstSelectValue === unit && secondSelectValue === "km") {
        return (secondInput.value = (firstInput.value / toKilometers).toFixed(
          2
        ));
      }
      if (firstSelectValue === unit && secondSelectValue === "ft") {
        return (secondInput.value = (firstInput.value * toFeet).toFixed(2));
      }
      if (firstSelectValue === unit && secondSelectValue === "inch") {
        return (secondInput.value = (firstInput.value * toInches).toFixed(2));
      }
      if (firstSelectValue === unit && secondSelectValue === "yd") {
        return (secondInput.value = (firstInput.value * toYards).toFixed(2));
      }
    }
  );

  const result = { unit: secondSelect.value, value: secondInput.value };
  console.log(JSON.stringify(result));
}

addElementsFirstSelect(items);
addElementsSecondSelect(items);

resultConvetTo(resultobjConvertTo(objConvertTo));

firstInput.addEventListener("keyup", resultConvetTo);
secondInput.addEventListener("keyup", resultConvetTo);
firstSelect.addEventListener("change", resultConvetTo);
secondSelect.addEventListener("change", resultConvetTo);
