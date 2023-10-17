export const numberToCoin = (number) => {
  if (number === "") {
    return "";
  }
  if (number === "-") {
    return "-";
  }

  let coin = number;
  coin = Number(coin).toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  coin = `${coin}`;
  return coin;
};

export const coinToNumber = (coin = "0") => {
  if (coin === "" || coin === " " || coin === "0,0" || coin === "-0,0") {
    return "";
  }
  if (coin === "-") {
    return "-";
  }

  let number = coin;
  number = number.replace("R$ ", "");
  number = number.replace(/[.]/g, "");
  number = number.replace(/[,]/g, "");
  number = number.replace(/[a-zA-Z]|[$]|[ç]+/g, "");
  if (number.match("-")) {
    number = number.replace(/[-]+/g, "");
    number = `-${number}`;
  }
  number = (Number(number) / 100).toFixed(2);

  return number;
};

export function formatValue(value) {
  if (String(value).includes(".")) {
    const formatedValue = String(value).replace(".", ",");

    const index = formatedValue.indexOf(",");
    const checkDecimals = formatedValue.slice(index + 1, 10);
    if (checkDecimals.length === 1) {
      return formatedValue.concat("0");
    }

    return formatedValue;
  }
  const formatedValue = String(value).concat(",00");
  return formatedValue;
}
