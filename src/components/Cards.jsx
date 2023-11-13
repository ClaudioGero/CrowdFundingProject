import React from "react";
import { Link } from "react-router-dom";
import Identicons from "react-identicons";
const Cards = () => {
  return (
    <div className="flex px-6 flex-col">
      <div className="flex justify-center items-center flex-wrap">
        {" "}
        {Array(6)
          .fill()
          .map((card, i) => (
            <ProjectCard key={i} id={i} project={card} />
          ))}
      </div>
    </div>
  );
};
const ProjectCard = ({ card, id }) => (
  <div id="projects" className="rounded-lg shadow-lg bg-slate-300 w-96 m-4">
    <Link to={"/projects/" + id}>
      <img
        src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1303387/regular_1708x683_Untitled-e7fde53f1e5631a8728cc9aefc1538e8.png"
        alt="project title"
        className="rounded-xl h-64 w-full objects-cover"
      />
      <div className="p-4">
        <h5>Liquid Staking Protocol</h5>
        <div className="flex flex-coll">
          <div className="flex justify-between items-center mb-3">
            <Identicons
              className="roundeded-full"
              string="0x12...3e22"
              size={15}
            />
            <small className="text-grey-700">0x12...3e22</small>
          </div>
          <small className="text-grey-500">2 days left</small>
        </div>
        <div className="w-full bg-grey-300">
          <div
            className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leadiing-none rounded-l-full h-1"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-4 mb-2">
          <small className="font-bold text-grey-500">{14} Backers</small>
          <div>
            <small className="text-green-500 font-bold">Open</small>
          </div>
        </div>
      </div>
    </Link>
  </div>
);
export default Cards;
