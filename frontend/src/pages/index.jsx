import {
  Card,
  Header,
  IncomeCard,
  TotalExpenses,
  GraphicBox01,
  GraphicBox02,
  LastRecords,
} from "@/Components/Layouts/index";
import { useState } from "react";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancelClick = () => {
    setIsModalVisible(false);
  };

  const handleOpenRecord = () => {
    setIsModalVisible(true);
  };

  return (
    <div className=" ">
      <div className="flex justify-center w-screen">
        <div className="w-[1440px] flex ">
          <Header handleOpenRecord={handleOpenRecord} />
        </div>
      </div>
      <div className="bg-[#191b1d] h-screen flex justify-center">
        <div className="w-[1440px] mt-10 flex flex-col gap-7">
          <div className="flex justify-between">
            <Card></Card>
            <IncomeCard />
            <TotalExpenses />
          </div>
          <div className="flex gap-4">
            <GraphicBox01 />
            <GraphicBox02 />
          </div>
          <div>
            <LastRecords />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
