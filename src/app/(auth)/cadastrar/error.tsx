"use client";

import ErrorView from "@/components/general/errorView";

interface ErrorViewProps {
  error?: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorViewProps) {

  return (
    <ErrorView error={error} reset={reset}/>
  );
}
