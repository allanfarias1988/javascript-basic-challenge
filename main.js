alert("Hello World!");

function sum() {
  const number1 = 15;
  const number2 = 18;
  const result = number1 + number2;
  alert(`O resultado de ${number1} + ${number2} é: ${result}`);
}

sum();

function isNumber() {
  const value = 10;
  const isNumber =
    typeof value == "number"
      ? `${value}: é um número.`
      : `${value}: Não é um número.`;
  alert(isNumber);
}

isNumber();

function isString() {
  const value = "Allan Farias";
  const isString =
    typeof value == "string"
      ? `${value}: é uma string.`
      : `${value}: Não é uma string.`;
  alert(isString);
}

isString();

function isBoolean() {
  const value = true;
  const isBoolean =
    typeof value == "boolean"
      ? `${value}: é um boolean.`
      : `${value}: Não é um boolean.`;
  alert(isBoolean);
}

isBoolean();

function sub() {
  const number1 = 15;
  const number2 = 5;
  const result = number1 - number2;
  alert(`O resultado de ${number1} - ${number2} é: ${result}`);
}

sub();

function mult() {
  const number1 = 15;
  const number2 = 18;
  const result = number1 * number2;
  alert(`O resultado de ${number1} * ${number2} é: ${result}`);
}

mult();

function div() {
  const number1 = 20;
  const number2 = 4;
  const result = number1 / number2;
  alert(`O resultado de ${number1} / ${number2} é: ${result}`);
}

div();

function isEvenNumber() {
  const value = 10;
  const isEvenNumber =
    value % 2 == 0
      ? `${value}: é um número Par.`
      : `${value}: Não é um número Par.`;
  alert(isEvenNumber);
}

isEvenNumber();

function isOddNumber() {
  const value = 10;
  const isOddNumber =
    value % 2 !== 0
      ? `${value}: é um número Ímpar.`
      : `${value}: Não é um número Ímpar.`;
  alert(isOddNumber);
}

isOddNumber();
