import { Dropdown, MenuProps, Space, Typography } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import { Chart } from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { generateRandomNums } from "../../mocks/data";
import { getPreviousDays } from "../utils/functions";

export default function WebsiteVisitAndOrdersCountStatistics() {
  const [labels, setLabels] = useState(() => getPreviousDays(7));
  const [WebsiteVisitData, setWebsiteVisitData] = useState(() =>
    generateRandomNums(7),
  );
  const [OrdersCountData, setOrdersCountData] = useState(() =>
    generateRandomNums(7),
  );
  const containerElemRef = useRef(null);
  const items: MenuProps["items"] = [
    // 这里变量的名称必须为items
    { key: "1", label: "过去一周" },
    { key: "2", label: "过去一月" },
    { key: "3", label: "过去三个月" },
    { key: "4", label: "过去一年" },
  ];
  function handleLabelItemChange(key: string) {
    const currentItem: MenuItemType = items!.find(
      (item) => item!.key === key,
    )! as MenuItemType;
    switch (currentItem!.label) {
      case "过去一周":
        setLabels(() => getPreviousDays(7));
        setWebsiteVisitData(() => generateRandomNums(7));
        setOrdersCountData(() => generateRandomNums(7));
        break;

      case "过去一月":
        setLabels(() => getPreviousDays(31));
        setWebsiteVisitData(() => generateRandomNums(31));
        setOrdersCountData(() => generateRandomNums(31));
        break;
      case "过去三个月":
        setLabels(() => getPreviousDays(93));
        setWebsiteVisitData(() => generateRandomNums(93));
        setOrdersCountData(() => generateRandomNums(93));
        break;

      case "过去一年":
        setLabels(() => getPreviousDays(365));
        setWebsiteVisitData(() => generateRandomNums(365));
        setOrdersCountData(() => generateRandomNums(365));
        break;
    }
  }
  const [currentItem, setCurrentItem] = useState(items[0]);
  const onClick: MenuProps["onClick"] = ({ key }) => {
    setCurrentItem(items.find((item) => item!.key === key)!);
    handleLabelItemChange(key);
  };
  useEffect(() => {
    const data = {
      labels,
      datasets: [
        {
          label: "网站访问量",
          data: WebsiteVisitData,
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: "订单量",
          data: OrdersCountData,
          borderColor: "blue",
          backgroundColor: "blue",
        },
      ],
    };

    const myChart = new Chart(containerElemRef.current!, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "网站访问量和订单量",
            font: {
              size: 20,
            },
            fullSize: true,
            align: "start",
          },
        },
        aspectRatio: 4,
      },
    });
    return () => {
      if (myChart instanceof Chart) {
        myChart.destroy();
      }
    };
  }, [labels, WebsiteVisitData, OrdersCountData]);
  return (
    <div className="relative">
      <div style={{ width: "100%" }}>
        <canvas ref={containerElemRef}></canvas>
      </div>
      <div className="absolute top-2 left-[200px]">
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["1"],
            onClick,
          }}
          arrow={false}
        >
          <Typography.Link>
            <Space>
              <div>{(currentItem as MenuItemType).label}</div>
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
    </div>
  );
}
