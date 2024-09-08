import { theme } from "antd";
import { useEffect, useRef } from "react";
import HotClothesRankingStatistics from "../components/HotClothesRankingStatistics";
import WebsiteVisitAndOrdersCountStatistics from "../components/WebsiteVisitAndOrdersCountStatistics";

export default function StatisticsPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  let containerElemParent: HTMLElement | undefined | null;
  const containerElemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerElemRef!.current!.parentElement!.style.background = "transparent";
    containerElemParent = containerElemRef.current?.parentElement;
    return () => {
      if (containerElemParent)
        containerElemParent.style.background = colorBgContainer;
    };
  }, []);

  return (
    <div ref={containerElemRef}>
      <div
        className="mb-3"
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          transform: "translate(-24px,-24px)",
          padding: 10,
        }}
      >
        <WebsiteVisitAndOrdersCountStatistics />
      </div>
      <div
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          transform: "translate(-24px,-24px)",
          padding: 10,
          width: "60%",
        }}
      >
        <HotClothesRankingStatistics />
      </div>
    </div>
  );
}
