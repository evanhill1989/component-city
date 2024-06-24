"use client";

import { useState } from "react";
import Banner from "./Banner";
export default function BannerCreator() {
  const [bannerTypes, setBannerTypes] = useState({
    status: "success",
    isCondensed: true,
  });

  function handleStatusChange(event) {
    setBannerTypes((prevTypes) => ({
      ...prevTypes,
      status: event.target.value,
    }));
  }

  function handleMultiLineChange() {
    setBannerTypes((prevTypes) => ({
      ...prevTypes,
      isCondensed: !prevTypes.isCondensed,
    }));
  }

  return (
    <div>
      <select onChange={handleStatusChange} name="colors" id="color-select">
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
        <option value="neutral">Neutral</option>
      </select>
      <select onChange={handleMultiLineChange} name="shapes" id="shape-select">
        <option value="true">Condensed</option>
        <option value="false">Expanded</option>
      </select>
      <Banner bannerTypes={bannerTypes} />
    </div>
  );
}
