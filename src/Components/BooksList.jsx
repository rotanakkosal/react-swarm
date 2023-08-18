import React, { Component } from "react";

export default class BooksList extends Component {
  render() {
    return (
      <div className="flex justify-center items-center flex-col mt-10">
          <h1 className="text-4xl font-bold mb-10 ">Book Lists</h1>
        <table className="border-4 border-black w-1/2">
          {/* Table Heading */}
          <tr className="border-4 border-black">
            <th className="px-12 py-5">#</th>
            <th className="px-12">Title</th>
            <th className="px-12">Published Year</th>
            <th className="px-12">Atrction</th>
          </tr>
          {/* Table Row */}
          {this.props.data.map((data) => (
            <tr className={`border-2 border-black font-medium ${data.isHiding ? "bg-blue-300 text-white":""}`} key={data.id}>
              <td className="px-12 py-5">{data.id}</td>
              <td className="px-12 text-center">{data.title}</td>
              <td className="px-12 text-center">{data.publishedYear}</td>
              <td className="px-12">
                <button className= {`${data.isHiding ===  false ? "bg-yellow-500" : "bg-red-500"} text-white font-semibold w-20 py-1 rounded-lg`} onClick={() => this.props.func(data.id)}>
                  {data.isHiding ? "UnHide" : "Hide"}
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
