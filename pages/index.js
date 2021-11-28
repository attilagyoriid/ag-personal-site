/** @format */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/intro");
  }, []);
  return <></>;
}
