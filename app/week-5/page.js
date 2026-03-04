"use client";
import Link from "next/link";
import { useState } from "react";

import PageHeader from "../components/PageHeader";

export default function Page() {
    const [age, setAge] = useState(28);

    function alertMsg() {
        alert("Hello World! Simple Alert");
    }

    const greet = "Hello user";
    function alertDynamic(msg){
        alert(msg);
    }

    let counter = 0;

    function addToCounter() {
        counter = counter + 1;
        console.log("counter change: ", counter);
        alert("Counter change: ", counter);
    }

    function ageMinusOne() {
        if (age> 20) {
            setAge((a) => a-1);
        }
    }

    return (
        <main>
            <PageHeader title="Week-5" decription="Event Handlers and State" />
            <section>
                <header>
                    <h2>Event Handlers</h2>
                    <p> these example trugger alerts from function declarations. The second one uses an anonymous funciton with the funciton parameter.</p>
                </header>
                <button
                    className="bg-blue-500 px-4 py-2 my-2 cursor-pointer"
                    onClick={alertMsg}
                >
                 Trigger an Alert   
                </button>
                <button
                    className="bg-amber-600 px-4 py-2 my-2 cursor-pointer"
                    onClick={() => alertDynamic(greet)}
                >
                Trigger an Alert
            </button>
        </section>
        <section className="mx-8">
        <header className="mb-4">
          <h2 className="text-2xl">Events with page data</h2>
          <p>
            Try rendering data from js to the DOM. Then try to manipulate it.
          </p>
          <p>
            Changing information in the DOM needs something other than just
            declaring a variable as a let. we need{" "}
            <strong className="font-bold text-red-600">
              <Link
                href="https://react.dev/reference/react/useState"
                target="_blank"
              >
                useState
              </Link>
            </strong>
          </p>
        </header>
        <div>
          <h3 className="text-xl mb-4">Counter Value: {counter}</h3>
          <p className="text-xl mb-4 font-bold">Age Value: {age}</p>
          <div className="flex gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 active:bg-amber-600 transition ease-linear duration-100 px-4 py-2 my-2 cursor-pointer"
              onClick={addToCounter}
            >
              Counter + 1
            </button>
            <button
              className="bg-amber-600 hover:bg-amber-800 active:bg-blue-600 transition ease-linear duration-100 px-4 py-2 my-2 cursor-pointer"
              onClick={() => setAge((a) => a + 1)}
            >
              age + 1
            </button>
            <button
              className="bg-green-600 hover:bg-green-800 active:bg-purple-600 transition ease-linear duration-100 px-4 py-2 my-2 cursor-pointer"
              onClick={ageMinusOne}
            >
              age - 1
            </button>
          </div>
        </div>
      </section>
        </main>
    )
}