import clsx from "clsx";
import Banner from "./Banner";

export default function BannerExamples() {
  const condensedBannerTypes = [
    { status: "success", isCondensed: true },
    { status: "warning", isCondensed: true },
    { status: "error", isCondensed: true },
    { status: "neutral", isCondensed: true },
  ];

  const expandedBannerTypes = [
    { status: "success", isCondensed: false },
    { status: "warning", isCondensed: false },
    { status: "error", isCondensed: false },
    { status: "neutral", isCondensed: false },
  ];

  const testArray = ["pink", "purple", "green"];

  return (
    <div className="flex gap-6">
      <div className="flex gap-2 flex-col">
        <h4>Expanded Banners</h4>
        {expandedBannerTypes.map((bannerTypes) => (
          <Banner key={bannerTypes.status} bannerTypes={bannerTypes} />
        ))}
      </div>
      <div className="flex gap-2 flex-col">
        <h4>Condensed Banners</h4>
        {condensedBannerTypes.map((bannerTypes) => (
          <Banner key={bannerTypes.status} bannerTypes={bannerTypes} />
        ))}
      </div>
    </div>
  );
}
