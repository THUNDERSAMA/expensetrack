"use client";
import Image from "next/image";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Chart } from "react-google-charts";
import { ResponsiveCalendar } from "@nivo/calendar";
import { calendarData } from "./calender";
import { Span } from "next/dist/trace";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("grocery");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("2");
  const submithandle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(name);
    console.log(Category);

    console.log(budget);

    console.log(status);
  };
  return (
    <main className="relative py-8 px-6 flex flex-col ">
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
        <form
          className="flex flex-col justify-center w-full  px-8 pt-6 pb-8 ml-2 rounded-xl  shadow-xl bg-amber-300 border-2 border-black "
          onSubmit={submithandle}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <select
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md "
              onChange={(e) => setCategory(e.target.value)}
            >
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
          <div className="flex flex-row-reverse flex-wrap-reverse columns-2">
            <div className=" flex-none h-16">
              <select
                className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md "
                onChange={(e) => setStatus(e.target.value)}
              >
                <option defaultValue="2">Invest</option>

                <option defaultValue="1">Spend</option>

                <option defaultValue="3">Lend</option>
              </select>
            </div>
            <div className="grow">
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
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
            </div>
          </div>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name it
            </label>
            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                placeholder="100"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <button
            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Track it
          </button>
        </form>
      </div>
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
          <div style={{ overflowX: "auto" }}>
            <div style={{ height: 400 }} className="scrollh">
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
      </div>
      <br />
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="flex flex-col justify-center w-full  px-2 pt-2 pb-2 ml-2 rounded-xl  shadow-xl bg-red-100 border-2 border-black ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Choose month
            </label>
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  ">
              <option defaultValue="January">January</option>
              <option defaultValue="February">February</option>
              <option defaultValue="March">March</option>
              <option defaultValue="April">April</option>
              <option defaultValue="May">May</option>
              <option defaultValue="June">June</option>
              <option defaultValue="July">July</option>
              <option defaultValue="August">August</option>
              <option defaultValue="September">September</option>
              <option defaultValue="October">October</option>
              <option defaultValue="November">November</option>
              <option defaultValue="December">December</option>
            </select>
          </div>
          <button
            className="uppercase text-sm font-bold tracking-wide bg-orange-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
          >
            Load
          </button>
        </div>
      </div>
      <br />
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="flex flex-col justify-center w-full  px-2 pt-2 pb-2 ml-2 rounded-xl  shadow-xl bg-orange-200 border-2 border-black ">
          <div className="flex justify-center pt-6">
            <div className="text-5xl font-extrabold leading-none tracking-tight mfont">
              <span className="box-decoration-slice text-white bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2 rounded-xl">
                Stock
                <br />
                News
              </span>
            </div>
          </div>
          <br />
          <div className=" box-border max-w-7xl mx-4 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
            <article className="mb-4 break-inside p-6 rounded-xl  bg-lime-700 flex flex-col bg-clip-border">
              <div className="flex pb-6 items-center justify-between">
                <div className="flex">
                  <div className="flex flex-col">
                    <div>
                      <a
                        className="inline-block text-lg font-bold dark:text-white"
                        href="#"
                      >
                        Wade Warren
                      </a>
                    </div>
                    <div className="text-slate-500 dark:text-slate-300 dark:text-slate-400">
                      July 17, 2018
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-extrabold dark:text-white">
                Web Design templates Selection
              </h2>
              <div className="py-4">
                <div className="flex justify-between gap-1 mb-1">
                  <a className="flex" href="#">
                    <img
                      className="max-w-full rounded-tl-lg"
                      src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    />
                  </a>
                </div>
              </div>
              <p className="dark:text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
            <article className="mb-4 break-inside p-6 rounded-xl bg-cyan-800 flex flex-col bg-clip-border">
              <div className="flex pb-6 items-center justify-between">
                <div className="flex">
                  <div className="flex flex-col">
                    <div>
                      <a
                        className="inline-block text-lg font-bold dark:text-white"
                        href="#"
                      >
                        Wade Warren
                      </a>
                    </div>
                    <div className="text-slate-500 dark:text-slate-300 dark:text-slate-400">
                      July 17, 2018
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-extrabold dark:text-white">
                Web Design templates Selection
              </h2>
              <div className="py-4">
                <div className="flex justify-between gap-1 mb-1">
                  <a className="flex" href="#">
                    <img
                      className="max-w-full rounded-tl-lg"
                      src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    />
                  </a>
                </div>
              </div>
              <p className="dark:text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
            <article className="mb-4 break-inside p-6 rounded-xl bg-rose-900	flex flex-col bg-clip-border">
              <div className="flex pb-6 items-center justify-between">
                <div className="flex">
                  <div className="flex flex-col">
                    <div>
                      <a
                        className="inline-block text-lg font-bold dark:text-white"
                        href="#"
                      >
                        Wade Warren
                      </a>
                    </div>
                    <div className="text-slate-500 dark:text-slate-300 dark:text-slate-400">
                      July 17, 2018
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-extrabold dark:text-white">
                Web Design templates Selection
              </h2>
              <div className="py-4">
                <div className="flex justify-between gap-1 mb-1">
                  <a className="flex" href="#">
                    <img
                      className="max-w-full rounded-tl-lg"
                      src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    />
                  </a>
                </div>
              </div>
              <p className="dark:text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
            <article className="mb-4 break-inside p-6 rounded-xl bg-violet-900 flex flex-col bg-clip-border">
              <div className="flex pb-6 items-center justify-between">
                <div className="flex">
                  <div className="flex flex-col">
                    <div>
                      <a
                        className="inline-block text-lg font-bold dark:text-white"
                        href="#"
                      >
                        Wade Warren
                      </a>
                    </div>
                    <div className="text-slate-500 dark:text-slate-300 dark:text-slate-400">
                      July 17, 2018
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-extrabold dark:text-white">
                Web Design templates Selection
              </h2>
              <div className="py-4">
                <div className="flex justify-between gap-1 mb-1">
                  <a className="flex" href="#">
                    <img
                      className="max-w-full rounded-tl-lg"
                      src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    />
                  </a>
                </div>
              </div>
              <p className="dark:text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          </div>
        </div>
      </div>
      <br />
      <div className="relative container m-auto px-6 text-stone-950 md:px-12 xl:px-40 flex  justify-center">
        <p className="antialiased stl">Samadrit das</p>
      </div>
    </main>
  );
}
