export const format = ({ currency, amount }) => {
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);

  return formattedPrice;
};
