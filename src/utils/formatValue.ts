export const formatValue = (value: number): string =>
  Intl.NumberFormat().format(value);

export const formatDate = (date: number): string =>
  Intl.DateTimeFormat('pt-BR').format(date);
