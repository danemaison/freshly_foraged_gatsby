
export const formatPrice = unformattedPrice => {
  return Intl.NumberFormat(undefined, {
    currency: "USD",
    minimumFractionDigits: 2,
    style: "currency",
  }).format(unformattedPrice);
}
