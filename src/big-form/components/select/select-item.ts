export interface SelectItem {
  label: string;

  /**
   * The value of the select item. Is kept as string to simplify the usage and validation
   * Tou can transform almost everything to string.
   * If you need a more specific type, create a dictionary with the string as key and the specific type as value.
   */
  value: string;
}
