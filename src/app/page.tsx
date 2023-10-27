"use client";
import Image from "next/image";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Chart } from "react-google-charts";

export default function Home() {
  const data = [
    [
      {
        type: "date",
        id: "Date",
      },
      {
        type: "number",
        id: "Won/Loss",
      },
    ],

    [new Date(2023, 9, 4), 38177],
    [new Date(2023, 9, 5), 38705],
    [new Date(2023, 9, 12), 38210],
    [new Date(2023, 9, 13), 38029],
    [new Date(2023, 9, 19), 38823],
    [new Date(2023, 9, 23), 38345],
    [new Date(2023, 9, 24), 38436],
    [new Date(2023, 9, 30), 38447],
  ];

  const options = {
    title: "Expense",
    height: 500,
    calendar: {
      monthLabel: {
        fontName: "Times-Roman",
        fontSize: 12,
        color: "#981b48",
        bold: true,
        italic: true,
      },
      monthOutlineColor: {
        stroke: "#981b48",
        strokeOpacity: 0.8,
        strokeWidth: 2,
      },
      unusedMonthOutlineColor: {
        stroke: "#bc5679",
        strokeOpacity: 0.8,
        strokeWidth: 1,
      },
      underMonthSpace: 16,
    },
  };
  return (
    <main className="relative py-16 flex flex-col ">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <form className="flex flex-col justify-center w-full  px-8 pt-6 pb-8 ml-2 rounded-xl bg-white shadow-xl bg-amber-300 border-2 border-black ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  ">
              <option>Surabaya</option>
              <option>Jakarta</option>
              <option>Tangerang</option>
              <option>Bandung</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rupees
            </label>
            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg ">
                  <CurrencyRupeeIcon />
                </span>
              </div>
              <input
                type="number"
                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                placeholder="100"
              />
            </div>
          </div>
          <button
            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
          >
            Track it
          </button>
        </form>
      </div>
      <br />
      <br />

      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="flex flex-col justify-center w-full  px-2 pt-2 pb-2 ml-2 rounded-xl bg-white shadow-xl bg-indigo-400 border-2 border-black ">
          <Chart
            chartType="Calendar"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </main>
  );
}
