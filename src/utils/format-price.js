
export const formatPrice = (amount, currencyCode) => {
  return Intl.NumberFormat(undefined, {
    currency: currencyCode,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(amount);
}
