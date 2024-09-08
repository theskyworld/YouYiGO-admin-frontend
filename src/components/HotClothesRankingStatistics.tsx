import { Dropdown, Space, Typography } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import { Chart } from "chart.js/auto";
import { useEffect, useMemo, useRef, useState } from "react";
import { generateRandomNums } from "../../mocks/data";

export default function HotClothesRankingStatistics() {
  const canvasElemRef = useRef(null);
  const items: MenuItemType[] = [
    { key: "1", label: "按浏览量" },
    { key: "2", label: "按订单量" },
  ];
  const viewsData = generateRandomNums(10).sort((a, b) => b - a);
  const ordersData = generateRandomNums(10).sort((a, b) => b - a);
  const [data, setData] = useState(viewsData);
  const [currentItem, setCurrentItem] = useState(items[0]);
  const barLabel = useMemo(
    () => (currentItem.label as string).slice(1),
    [currentItem],
  );
  const onClick = ({ key }: { key: string }) => {
    const currentItem = items.find((item) => item.key === key)!;
    setCurrentItem(currentItem);
    setData(currentItem.label === "按浏览量" ? viewsData : ordersData);
  };
  useEffect(() => {
    const labels = [
      "服装名称1",
      "服装名称2",
      "服装名称3",
      "服装名称4",
      "服装名称5",
      "服装名称6",
      "服装名称7",
      "服装名称8",
      "服装名称9",
      "服装名称10",
    ];
    const myChart = new Chart(canvasElemRef.current!, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: barLabel,
            data,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "热门服装排行",
            font: {
              size: 20,
            },
            fullSize: true,
            align: "start",
          },
        },
        aspectRatio: 2,
      },
    });

    return () => {
      if (myChart instanceof Chart) {
        myChart.destroy();
      }
    };
  }, [currentItem, data, barLabel]);
  return (
    <div className="relative">
      <div>
        <canvas ref={canvasElemRef}></canvas>
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
