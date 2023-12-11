export type Customer = {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: "Active" | "Inactive";
};

export type SidebarItemType = {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  showArrow?: boolean;
};

export type SidebarHeaderProps = {
  isSidebarOpen: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
};

export type CustomerListProps = {
  customers: Customer[];
};

export interface PaginationProps {
  count: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  rowsPerPage: number;
}
