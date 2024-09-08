import HotClothesRankingStatistics from "../components/HotClothesRankingStatistics";
import WebsiteVisitAndOrdersCountStatistics from "../components/WebsiteVisitAndOrdersCountStatistics";

export default function StatisticsPage() {
  return (
    <div>
      <div className="mb-9">
        <WebsiteVisitAndOrdersCountStatistics />
      </div>
      <HotClothesRankingStatistics />
    </div>
  );
}
