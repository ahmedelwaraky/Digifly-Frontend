"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import Editor from "../src/components/editor/editor";
import ContactForm from "../src/components/form/ContactForm";
import Table from "../src/components/table/Table";
import Map from "../src/components/map/MyMap";

// MAP
// const Map = dynamic(() => import("../src/components/map/MyMap"), {
//   ssr: false,
// });
// MAP

export default function Home({ store }) {

  return (
    <>
      {/* part-one */}
      <section className="part-one w-full px-4 py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="inline-block w-10 h-1 bg-[#6d5cbc] mr-3 mt-1"></span>
            <h2 className="text-2xl font-semibold text-gray-800">Part 1</h2>
          </div>
          <p className="text-gray-600">
            Utilize the provided Strapi API from the assessment to post user
            data into your Redux store. You are required to add one user into
            the users collection and display this data in a table using a GET
            request. Ensure the implementation of Redux for state management,
            including both POST requests for adding a user and GET requests for
            displaying data in the table.
          </p>
        </div>
      </section>

      {/* **********************************************************************88  */}
      <section className="sec-one w-full px-4 py-8 bg-emerald-900">
        <div className="max-w-6xl mx-auto">
          <div className="helloo flex-wrap  mx-2">
            {/* Form Column  */}
            <ContactForm />

            {/* Table Column  */}
            <Table></Table>
          </div>
        </div>
      </section>
      {/* ******************************** */}

      {/* Part Two //  Map */}
      <section className="part-two w-full px-4 py-8 bg-white-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="inline-block w-10 h-1 bg-[#6d5cbc] mr-3 mt-1"></span>
            <h2 className="text-2xl font-semibold text-gray-800">Part 2</h2>
          </div>
          <p className="text-gray-600">
            Implement a map using any library of your choice (Leaflet is
            recommended).
            <br /> Search for the coordinates of Digifly Company on Google Maps,
            then place a tooltip at these coordinates.
            <br /> Ensure that the tooltip styling matches the provided design
            below.
          </p>
        </div>
        <div className="mt-3 relative z-0">
          <Map />
        </div>
      </section>

      {/* part Three /   Word  */}
      <section className="part-two w-full px-4 py-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="inline-block w-10 h-1 bg-[#6d5cbc] mr-3 mt-1"></span>
            <h2 className="text-2xl font-semibold text-gray-800">Part 3</h2>
          </div>
          <p className="text-gray-600">
            Implement a text editor that precisely replicates the UI styles
            provided. It's essential to create <br /> the undo and redo
            functionalities from scratch, along with two additional features of
            your choice.
            <br /> You may use any package, but creating these functionalities
            from scratch will be advantageous.
            <br /> Ensure that all text editor functionalities are operational.
          </p>
        </div>
        <div className="mt-3">
          <div>
            <Head>
              <title>My Text Editor</title>
              <meta
                name="description"
                content="A text editor with React Quill"
              />
            </Head>
            <main>
              <Editor />
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
