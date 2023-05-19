"use client";

import { useState } from "react";
import LinkForm from "./LinkForm";
import SummaryCard from "./SummaryCard";

function ClientProvider() {
  const [review, setReview] = useState("");
  return (
    <div>
      <LinkForm setReview={setReview} />
      <SummaryCard review={review} />
    </div>
  );
}

export default ClientProvider;
