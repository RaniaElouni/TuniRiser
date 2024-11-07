import React from "react";
import Servicess from "../home/Services";
import media from "../../../public/media/media.json"

export default function Services() {
  return (
    <div className="  overflow-hidden">
      <Servicess isMedia={true} fromMedia={true} />
      
     
    </div>
  );
}
