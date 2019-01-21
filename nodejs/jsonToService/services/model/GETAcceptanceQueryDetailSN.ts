
interface Resbody {
  result: Result;
  code: number;
  message: string;
}
interface Result {
  total: number;
  list: List[];
  pageNum: number;
  pageSize: number;
  pages: number;
  nextPage?: any;
  isFirstPage: boolean;
  isLastPage: boolean;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
interface List {
  sn_line_number: string;
  sn_number: string;
  asset_number: string;
}
interface Reqquery {
  desc: string;
  example: string;
  name: string;
  required: string;
}