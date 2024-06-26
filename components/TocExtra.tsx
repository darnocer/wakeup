import React from "react";
import TocCallout from "./TocCallout";
import NewsletterSubscription from "./NewsletterSubscription";

const TocExtra = () => (
  <div>
    <TocCallout />
    <div className="mt-4">
      <NewsletterSubscription />
    </div>
  </div>
);

export default TocExtra;
