import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Welcome from "./Welcome";

export function DashboardHeader() {
 

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-8">
      <div>
        <Welcome></Welcome>
      </div>
    </header>
  );
}
