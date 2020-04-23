const formatDate = (date: number): string =>
  Intl.DateTimeFormat('pt-BR').format(date);

export default formatDate;
