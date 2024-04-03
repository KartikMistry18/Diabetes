"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [formData, setFormData] = useState({});
    const [prediction, setPrediction] = useState("");
    const handleSubmit = () => {
        console.log(formData);

        async function predict(data: any) {
            await fetch(
                "http://localhost:8000/predict",
                // `${process.env.MODEL_END_POINT_API}/predict`,
                {
                    method: "POST",
                    mode: "cors", // no-cors, *cors, same-origin
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    redirect: "follow",
                    referrerPolicy: "no-referrer",
                    body: JSON.stringify(data),
                }
            )
                .then((response) => response.json())
                .then((result) => setPrediction(result.prediction))
                .catch((error) => console.log("error", error));
        }
        predict(formData);
        // setPrediction(predict(formData));
    };

    return (
        <>
            <main className="">
                <div className="flex justify-center items-center flex-wrap gap-10 p-10">
                    <div className="max-w-[300px] w-full">
                        <label
                            htmlFor="website-admin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                           Pregnancies
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                             
                            </span>
                            <input
                                type="number"
                                name="Pregnancies"
                                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                placeholder="0"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <div className="max-w-[300px] w-full">
                        <label
                            htmlFor="website-admin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            Glucose
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                              
                            </span>
                            <input
                                type="number"
                                name="Glucose"
                                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                placeholder="0"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <div className="max-w-[300px] w-full">
                        <label
                            htmlFor="website-admin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            BloodPressure
                        </label>

                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        
                            </span>
                            {/* <div className="flex flex-row justify-start items-center gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                    (num, id) => {
                                        return (
                                            <button
                                                key={num}
                                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                                                onClick={(e) => {
                                                    // setFormData({
                                                    //     ...formData,
                                                    //     avg_area_house_age:
                                                    //         e.key,
                                                    // });
                                                    console.log(e);
                                                }}
                                            >
                                                {num}
                                            </button>
                                        );
                                    }
                                )} 
                            </div>*/}

                            <input
                                type="number"
                                name="BloodPressure"
                                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                placeholder="0"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <div className="max-w-[300px] w-full">
                        <label
                            htmlFor="website-admin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            SkinThickness
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                             
                            </span>
                            <input
                                type="number"
                                name="SkinThickness"
                                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                placeholder="0"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <div className="max-w-[300px] w-full">
                        <label
                            htmlFor="website-admin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            Insulin
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                              
                            </span>
                            <input
                                type="number"
                                name="Insulin"
                                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                placeholder="0"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="max-w-[300px] w-full">
                        <label
                            htmlFor="website-admin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            BMI
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                              
                            </span>
                            <input
                                type="number"
                                name="BMI"
                                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                placeholder="0"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="max-w-[300px] w-full">
                        <label
                            htmlFor="website-admin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            DiabetesPedigreeFunction
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                              
                            </span>
                            <input
                                type="number"
                                name="DiabetesPedigreeFunction"
                                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                placeholder="0"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="max-w-[300px] w-full">
                        <label
                            htmlFor="website-admin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            Age
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                              
                            </span>
                            <input
                                type="number"
                                name="Age"
                                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                placeholder="0"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <a
                        href="#"
                        className="hvr-underline-from-center font-bold text-xl p-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out flex items-center gap-2"
                        onClick={handleSubmit}
                    >
                        Predict
                    </a>
                    {prediction && (
                        <div className="bg-gray-700 shadow-md rounded-md p-5 mt-3">
                            <h1 className="text-2xl font-bold text-white">
                                Prediction: {prediction}
                            </h1>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
