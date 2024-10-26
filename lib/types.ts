export interface DropdownLink {
  label: string;
  path: string;
}

export interface LinkItem {
  label: string;
  path: string;
  dropdown?: boolean;
  dropdownLinks?: DropdownLink[];
}
