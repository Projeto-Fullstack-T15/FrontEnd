/**
 * Para utilizar, insira um array com as opções válidas do filtro,
 * e o valor a ser validado como segundo parametro;
 * O método validate retorna um booleano,
 * vaso o array esteja vazio, sempre retornara true.
 */
export class FilterValue {
  private filter: Array<string>;
  private value: string;

  constructor(
    filter: Array<string | number>,
    value: string | number,
  ) {
    this.filter = filter.map((f) => String(f).toLowerCase());
    this.value = String(value).toLowerCase();
  }

  public validate(): boolean {
    this.value = this.value.toUpperCase();
    this.filter = this.filter.map((f) => f.toUpperCase());

    return this.filter.some((str) => str === this.value) || !this.filter.length;
  }
}
