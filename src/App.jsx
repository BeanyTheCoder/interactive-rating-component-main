import { useState } from "react";
import RatingFormPage from "./components/rating-form-page/RatingFormPage";
import ThankYouPage from "./components/thank-you-page/ThankYouPage";

import "./stylesheets/App.scss";

export default function App() {
  const [rating, setRating] = useState(null);
  let [page, setPage] = useState("page1");

  return page === "page1" ? (
    <div id="app">
      <RatingFormPage
        {...{ rating, setRating, page, setPage }}
      />
    </div>
  ) : page === "page2" ? (
    <div id="app">
      <ThankYouPage {...{ rating }} />
    </div>
  ) : null;
}
