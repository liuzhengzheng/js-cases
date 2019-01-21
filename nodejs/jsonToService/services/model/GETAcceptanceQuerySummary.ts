
interface Resbody {
  result: Result;
  code: number;
  message: string;
}
interface List {
  acceptance_number: string;
  acceptance_person_name: string;
  acceptance_date: string;
  description: string;
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