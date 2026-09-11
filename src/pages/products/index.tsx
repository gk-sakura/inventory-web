import {getProducts} from "@/services/products.ts";
import {useEffect, useState} from "react";
import {Table, type TableProps} from "antd";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  createdAt: Date;
}

const columns: TableProps<Product>['columns'] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: text => <a>{text}</a>
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: '价格',
    dataIndex: "price",
    key: "price",
  },
  {
    title: '库存',
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: '创建时间',
    dataIndex: "createdAt",
    key: "createdAt",
  }
]

export default function Products() {
  const [dataList, setDataList] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await getProducts()
      setDataList(res.data)
    }
    loadProducts().then()
  }, [])

  return (
    <div>
      <Table columns={columns} dataSource={dataList} />
    </div>
  )
}
