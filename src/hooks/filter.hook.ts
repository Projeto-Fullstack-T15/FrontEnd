interface FilterOptions {
  remove?: Array<string>;
  exact?: boolean;
}

export class FilterValue {
  private filter: Array<string>;
  private value: string;
  private remove: Array<string>;
  private exact: boolean;

  constructor(
    filter: Array<string | number>,
    value: string | number,
    options: FilterOptions
  ) {
    this.filter = filter.map((f) => String(f).toLowerCase());
    this.value = String(value).toLowerCase();
    this.remove = options.remove || [];
    this.exact = options.exact || false;
  }

  public validate(): boolean {
    this.remove.forEach((str) => {
      this.value = this.value.replace(str, '');
      this.filter = this.filter.map((f) => f.replace(str, ''));
    });

    this.value = this.value.toUpperCase();
    this.filter = this.filter.map((f) => f.toUpperCase());

    if (this.exact) {
      return this.filter.some((str) => str === this.value);
    } else {
      return this.filter.some((str) => str.includes(this.value));
    }
  }
}
