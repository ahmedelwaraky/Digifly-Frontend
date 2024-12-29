'use client';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../api/data.js";

export default function Table() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);


  useEffect(() => {
    dispatch(fetchData());
  }, [data]);



  return (
    <>

      <div className="table-sec overflow-x-auto     w-full md:w-1/2 ">
        <h3 className="text-left text-xl font-medium text-[#6d5cbc] ">
          Result:
        </h3>
        <div className="overflow-x-auto bg-white  shadow rounded ">
          <table className="table-auto w-full shadow-lg border-separate border-spacing-1">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-300 border-opacity-50">
                  #
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-300 border-opacity-50">
                  First Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-300 border-opacity-50">
                  Last Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-300 border-opacity-50">
                  Phone
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-300 border-opacity-50">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {data && data.map(({ FirstName, LastName, Email, Phone }, index) => <React.Fragment key={index}>



                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    {FirstName}

                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    {LastName}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    {Phone}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    {Email}                  </td>
                </tr>
              </React.Fragment>)}


              {/* {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    {item.firstName}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    {item.lastName}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    {item.lastName}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-300 border-opacity-50">
                    example{" "}
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
