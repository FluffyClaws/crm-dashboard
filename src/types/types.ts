export type Customer = {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: "Active" | "Inactive";
};

export type CustomerListProps = {
  customers: Customer[];
};
export interface PaginationProps {
  count: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
}
