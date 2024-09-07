import {
  Button,
  Image,
  Input,
  InputRef,
  Space,
  Table,
  TableColumnsType,
  TableColumnType,
} from "antd";
import { CLOTHING_TABLE_COLUMNS } from "../utils/constants";
import { Clothing, ClothingIndex, Operation } from "../utils/types";
import { useRef, useState } from "react";
import { FilterDropdownProps } from "antd/es/table/interface";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { clothes } from "../../mocks/data";

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
  CLOTHING_ID,
  CLOTHING_NAME,
  CLOTHING_CATEGORY,
  CLOTHING_PRICE,
  CLOTHING_COLOR,
  CLOTHING_PIC,
  CLOTHING_BRAND,
  VIEWS,
  IS_ON_SALE,
  DESCRIPTION,
  CLOTHING_STOCK,
  OPERATIONS,
} = CLOTHING_TABLE_COLUMNS;
export default function ClothingTable() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: ClothingIndex,
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
    dataIndex: ClothingIndex,
  ): TableColumnType<Clothing> => ({
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

  const data: Clothing[] = clothes;
  const columns: TableColumnsType<Clothing> = [
    {
      title: CLOTHING_ID,
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProps("id"),
      showSorterTooltip: false,
    },
    {
      title: CLOTHING_NAME,
      dataIndex: "name",
      key: "name",
      width: "13%",
      ...getColumnSearchProps("name"),
      showSorterTooltip: false,
    },
    {
      title: CLOTHING_CATEGORY,
      dataIndex: "category",
      key: "category",
      width: "20%",
      ...getColumnSearchProps("category"),
    },
    {
      title: CLOTHING_PRICE,
      dataIndex: "price",
      key: "price",
      ...getColumnSearchProps("price"),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: CLOTHING_COLOR,
      dataIndex: "color",
      key: "color",
      ...getColumnSearchProps("color"),
      showSorterTooltip: false,
    },
    {
      title: CLOTHING_PIC,
      dataIndex: "pic",
      key: "pic",
      width: "10%",
      ...getColumnSearchProps("pic"),
      render: (pic: string) => {
        return <Image src={pic} preview={false} style={{ width: "100%" }} />;
      },
    },
    {
      title: CLOTHING_BRAND,
      dataIndex: "brand",
      key: "brand",
      ...getColumnSearchProps("brand"),
    },
    {
      title: VIEWS,
      dataIndex: "views",
      key: "views",
      ...getColumnSearchProps("views"),
    },
    {
      title: IS_ON_SALE,
      dataIndex: "isOnSale",
      key: "isOnSale",
      ...getColumnSearchProps("isOnSale"),
    },
    {
      title: DESCRIPTION,
      dataIndex: "description",
      key: "description",
      ...getColumnSearchProps("description"),
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: CLOTHING_STOCK,
      dataIndex: "stock",
      key: "stock",
      ...getColumnSearchProps("stock"),
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
  return <Table columns={columns} dataSource={data} size="small" bordered />;
}
