export const formatNumber = number => {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'CAD' }).format(number);
}