export const formatNumber = (number) => {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' })
    .format(number)
    .substring(1)
}
