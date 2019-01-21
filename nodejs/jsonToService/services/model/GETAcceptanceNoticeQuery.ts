
interface Resbody {
  result: Result;
  code: number;
  message: string;
}
interface List {
  acceptance_notice_number: string;
  buyer_name: string;
  city: string;
  supplier_name: string;
  company_name: string;
  contract_number: string;
  order_number: string;
  supplier_order_number?: any;
  asset_name: string;
  specification: string;
  asset_type: string;
  asset_class: string;
  expected_date: string;
  remained_amount: string;
  arrival_amount: string;
  invoice_type: string;
  tax_rate: string;
  currency: string;
  exchange_rate: string;
  user_name: string;
  user_depart: string;
  location: string;
  remarks?: any;
}
interface Result {
  total: number;
  list: List[];
  pageNum: number;
  pageSize: number;
  pages: number;
  nextPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
interface Reqquery {
  desc: string;
  example: string;
  name: string;
  required: string;
}