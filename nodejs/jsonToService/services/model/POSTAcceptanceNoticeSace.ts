
interface Resbody {
  code: number;
  message: string;
}
interface Reqbodyother {
  type: string;
  title: string;
  properties: Properties;
  required: any[];
}
interface Properties {
  buyer_id: Buyerid;
  city: Buyerid;
  supplier_id: Buyerid;
  company_id: Buyerid;
  contract_number: Buyerid;
  order_number: Buyerid;
  supplier_order_number: Buyerid;
  asset_name: Buyerid;
  specification: Buyerid;
  asset_type: Buyerid;
  asset_class: Buyerid;
  expected_date: Buyerid;
  remained_amount: Buyerid;
  arrival_amount: Buyerid;
  invoice_type: Buyerid;
  tax_rate: Buyerid;
  unit_price: Buyerid;
  currency: Buyerid;
  exchange_rate: Buyerid;
  user_id: Buyerid;
  location: Buyerid;
  remarks: Buyerid;
}
interface Buyerid {
  type: string;
  description: string;
}