import React from "react";
import dynamic from "next/dynamic";
import TopNavBar from "@/components/TopNavBar";
import ChatArea from "@/components/ChatArea";
import config from "@/config";

const LeftSidebar = dynamic(() => import("@/components/LeftSidebar"), {
  ssr: false,
});
const RightSidebar = dynamic(() => import("@/components/RightSidebar"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <TopNavBar />
      <div className="flex flex-1 h-full overflow-hidden w-full">
        {/* Left sidebar, hidden on smaller screens */}
        {config.includeLeftSidebar && (
          <div className="hidden md:flex">
            <LeftSidebar />
          </div>
        )}

        {/* Main content area with ChatArea at the bottom */}
        <div className="flex flex-col flex-1 overflow-auto justify-end">
          <ChatArea />
        </div>

        {/* Right sidebar, hidden on smaller screens */}
        {config.includeRightSidebar && (
          <div className="hidden md:flex">
            <RightSidebar />
          </div>
        )}
      </div>
    </div>
  );
}
