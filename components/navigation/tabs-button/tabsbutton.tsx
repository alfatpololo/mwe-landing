import { useState } from "react";
import Ecommerce from "@/components/tabs/ecommerce";
import Companyprofile from "@/components/tabs/companyprofile";
import Customwebsite from "@/components/tabs/custom-website";
import Webdesign from "@/components/tabs/webdesign";
import Copywriting from "@/components/tabs/copywriting";

type TabName = "Ecommerce" | "Company Profile" | "Custom Website" | "Web Design" | "Copywriting";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabName>("Ecommerce");

  const renderComponent = () => {
    switch (activeTab) {
      case "Ecommerce":
        return <Ecommerce />;
      case "Company Profile":
        return <Companyprofile />;
      case "Custom Website":
        return <Customwebsite />;
      case "Web Design":
        return <Webdesign />;
      case "Copywriting":
        return <Copywriting />;
      default:
        return <Ecommerce />;
    }
  };

  const getTabClass = (tabName: TabName) =>
    activeTab === tabName
      ? "bg-tabs-001 text-white"
      : "bg-white text-secondary-grey-500";

  const getBackgroundClass = () => {
    switch (activeTab) {
      case "Ecommerce":
        return "bg-tabs-001";
      case "Company Profile":
        return "bg-tabs-002";
      case "Custom Website":
        return "bg-tabs-003";
      case "Web Design":
        return "bg-tabs-004";
      case "Copywriting":
        return "bg-tabs-005";
      default:
        return "bg-tabs-001";
    }
  };

  return (
    <div className="relative">
      <div className={`p-4 ${getBackgroundClass()}`}>{renderComponent()}</div>
      <div className="flex space-x-0 justify-center bottom-0 w-full">
        <button
          className={`py-[24px] px-[16px] ${getTabClass("Ecommerce")}`}
          onClick={() => setActiveTab("Ecommerce")}
        >
          Ecommerce
        </button>
        <button
          className={`py-2 px-4 ${getTabClass("Company Profile")}`}
          onClick={() => setActiveTab("Company Profile")}
        >
          Company Profile
        </button>
        <button
          className={`py-2 px-4 ${getTabClass("Custom Website")}`}
          onClick={() => setActiveTab("Custom Website")}
        >
          Custom Website
        </button>
        <button
          className={`py-2 px-4 ${getTabClass("Web Design")}`}
          onClick={() => setActiveTab("Web Design")}
        >
          Web Design
        </button>
        <button
          className={`py-2 px-4 ${getTabClass("Copywriting")}`}
          onClick={() => setActiveTab("Copywriting")}
        >
          Copywriting
        </button>
      </div>
    </div>
  );
}
