import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table, Tag, Tooltip } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { orders } from "../../mocks/data";
import { TABLE_COLUMNS } from "../utils/constants";
import { formatDate, getOrderStatusColor } from "../utils/functions";
import { DataIndex, DataType, Operation, OrderStatus } from "../utils/types";

const data: DataType[] = orders;
const operations: Operation[] = [
  {
    id: "1",
    label: "详情",
    handler: () => {},
  },
  {
    id: "2",
    label: "收藏",
    handler: () => {},
  },
];

const {
  ORDER_ID,
  CUSTOMER_NAME,
  CUSTOMER_TEL,
  CUSTOMER_ADDRESS,
  ORDER_TIME,
  ORDER_STATUS: ORDER_STA,
  COMMENT,
  OPERATIONS,
} = TABLE_COLUMNS;

export default function OrderTable() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex,
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: ORDER_ID,
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProps("id"),
      showSorterTooltip: false,
    },
    {
      title: CUSTOMER_NAME,
      dataIndex: "name",
      key: "name",
      width: "13%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.length - b.name.length,
      showSorterTooltip: false,
    },
    {
      title: CUSTOMER_ADDRESS,
      dataIndex: "address",
      key: "address",
      width: "20%",
      ...getColumnSearchProps("address"),
      ellipsis: {
        showTitle: true,
      },
      render: (address: string) => {
        return (
          <Tooltip placement="top" title={address}>
            {address}
          </Tooltip>
        );
      },
    },
    {
      title: CUSTOMER_TEL,
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps("phone"),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: ORDER_TIME,
      dataIndex: "orderTime",
      key: "orderTime",
      ...getColumnSearchProps("orderTime"),
      sorter: (a, b) => a.orderTime.getTime() - b.orderTime.getTime(),
      render: (orderTime: Date) => {
        return formatDate(orderTime);
      },
      showSorterTooltip: false,
    },
    {
      title: ORDER_STA,
      dataIndex: "orderStatus",
      key: "orderStatus",
      width: "10%",
      ...getColumnSearchProps("orderStatus"),
      render: (orderStatus: OrderStatus) => {
        return (
          <Tag
            className="translate-x-4"
            color={getOrderStatusColor(orderStatus)}
          >
            {orderStatus}
          </Tag>
        );
      },
    },
    {
      title: COMMENT,
      dataIndex: "comment",
      key: "comment",
      ...getColumnSearchProps("comment"),
      ellipsis: {
        showTitle: true,
      },
      render: (address: string) => {
        return (
          <Tooltip placement="top" title={address}>
            {address}
          </Tooltip>
        );
      },
    },
    {
      title: OPERATIONS,
      dataIndex: "operation",
      key: "operation",
      fixed: "right",
      render: () => {
        return (
          <span>
            {operations.map((operation) => {
              return (
                <Button
                  className="mr-2"
                  type="primary"
                  size="small"
                  key={operation.id}
                  onClick={operation.handler}
                >
                  {operation.label}
                </Button>
              );
            })}
          </span>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      bordered
      scroll={{ y: "60vh" }}
    />
  );
}
