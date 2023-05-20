"use client";

import { useState } from "react";
import LinkForm from "./LinkForm";
import SummaryCard from "./SummaryCard";

function ClientProvider() {
  const [review, setReview] = useState("");
  const [cache, setCache] = useState("");
  return (
    <div>
      <LinkForm setCache={setCache} setReview={setReview} />
      <SummaryCard cache={cache} review={review} />
    </div>
  );
}

export default ClientProvider;
