import { useState } from "react";

export const MiniRecord = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancelClick = () => {
    setIsModalVisible(false);
  };

  const handleOpenRecord = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      {isModalVisible && (
        <div
          id="displayNone"
          className="bg-black opacity-35 w-screen h-screen flex justify-center items-center"
        >
          <div className="w-[792px] rounded-xl bg-[#1d232a]">
            <div className="flex p-4 border-b-2 border-black justify-between">
              <p>Add Records</p>
              <button onClick={handleCancelClick}>X</button>
            </div>
            <div className="flex">
              <div className="w-1/2 flex flex-col gap-[20px] px-[24px] py-[20px]">
                <div className="flex justify-between">
                  <button className="btn rounded-full btn-primary w-1/2">
                    Expense
                  </button>
                  <button className="btn rounded-full btn-ghost w-1/2">
                    Income
                  </button>
                </div>
                <div className="w-full flex flex-col gap-[20px]">
                  <div className="w-full ">
                    <input
                      type="text"
                      placeholder="000.0"
                      className="input input-bordered input-success w-full h-[70px] max-w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <p>Category</p>
                    <select className="select select-success w-full max-w-full">
                      <option disabled selected>
                        Choose
                      </option>
                      <option>One Piece</option>
                      <option>Naruto</option>
                      <option>Death Note</option>
                      <option>Attack on Titan</option>
                      <option>Bleach</option>
                      <option>Fullmetal Alchemist</option>
                      <option>Jojo's Bizarre Adventure</option>
                    </select>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-2">
                      <p>Date</p>
                      <input
                        type="text"
                        placeholder=" October"
                        className="input input-bordered input-success w-full max-w-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Date</p>
                      <input
                        type="text"
                        placeholder="12/02"
                        className="input input-bordered input-success w-full max-w-xs"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary w-full  rounded-full">
                    Primary
                  </button>
                </div>
              </div>
              <div className="w-1/2  px-[24px] py-[20px] flex flex-col justify-between gap-7">
                <div className="w-full flex flex-col gap-3">
                  <h1>Payee</h1>
                  <textarea
                    className="textarea textarea-bordered w-full h-10"
                    placeholder="Write here"
                  ></textarea>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <h1>Note</h1>
                  <textarea
                    className="textarea textarea-bordered w-full h-[250px]"
                    placeholder="Write here"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
