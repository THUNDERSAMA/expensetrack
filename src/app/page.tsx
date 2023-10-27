"use client";
import Image from "next/image";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Chart } from "react-google-charts";
import { ResponsiveCalendar } from "@nivo/calendar";
import { calendarData } from "./calender";
import { Span } from "next/dist/trace";

export default function Home() {
  return (
    <main className="relative py-8 flex flex-col ">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 flex flex-row justify-center">
        <p className="text-2xl font-semibold mfont ">
          <span className="cvb">Expenso</span>
        </p>
        <Image
          src={"/calculator.png"}
          alt={"image"}
          width={40}
          height={40}
        ></Image>
      </div>
      <br />
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <form className="flex flex-col justify-center w-full  px-8 pt-6 pb-8 ml-2 rounded-xl  shadow-xl bg-amber-300 border-2 border-black ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  ">
              <option defaultValue="grocery">grocery</option>

              <option defaultValue="transportation">transportation</option>

              <option defaultValue="food">food</option>

              <option defaultValue="utilities">utilities</option>

              <option defaultValue="clothing">clothing</option>

              <option defaultValue="personal care">personal care</option>

              <option defaultValue="health and fitness">
                health and fitness
              </option>

              <option defaultValue="fun and entertainment">
                fun and entertainment
              </option>

              <option defaultValue="miscellaneous">miscellaneous</option>

              <option defaultValue="housing">housing</option>

              <option defaultValue="insurance">insurance</option>

              <option defaultValue="debt payments">debt payments</option>

              <option defaultValue="savings">savings</option>

              <option defaultValue="investments">investments</option>
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
        <div className="flex flex-col justify-center w-full  px-2 pt-2 pb-2 ml-2 rounded-xl  shadow-xl bg-indigo-400 border-2 border-black ">
          <div className="flex flex-row-reverse ...">
            <div className="shadow-lg border-2 border-black rounded-lg px-6 py-3 bg-slate-100 flex flex-row">
              <span>
                <CurrencyRupeeIcon />
              </span>
              <p className="text-xl text-black font-semibold">500</p>
            </div>
            <div className="px-6 py-4">
              <p className="leading-normal text-black  font-mono font-medium">
                Expense this month
              </p>
            </div>
          </div>
          <div style={{ height: 400 }}>
            <ResponsiveCalendar
              data={calendarData}
              from="2021-01-08"
              to="2021-08-09"
              emptyColor="#eeeeee"
              colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
              margin={{
                top: 40,
                right: 40,
                bottom: 40,
                left: 40,
              }}
              yearSpacing={40}
              monthBorderColor="#ffffff"
              dayBorderWidth={2}
              dayBorderColor="#ffffff"
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "row",
                  translateY: 36,
                  itemCount: 4,
                  itemWidth: 42,
                  itemHeight: 36,
                  itemsSpacing: 14,
                  itemDirection: "right-to-left",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
