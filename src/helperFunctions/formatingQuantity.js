export const formating = (value) => value > 1000 ? Math.round(value / 100) / 10 + "k" : value;
