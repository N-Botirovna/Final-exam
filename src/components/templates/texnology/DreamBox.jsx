import React from "react";

const DreamBox = () => {
  return (
    <div className="mb-20">
      <div className="flex justify-between flex-grow h-[450px]">
        <div className="w-[45%] h-full">
          <h1 className="text-[50px] font-[700] text-[#01384D] w-[90%] mb-6">
            Dream Cloud kompaniyasi haqida
          </h1>
          <p className="text-[#01384D] font-[600] mb-8">
            Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a
            est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum:
          </p>
          <div className="bg-[#EABF9F] px-16 py-8 mb-6 border-[3px] border-slate-900 rounded-lg">
            <ul className="list-disc text-slate-700 text-opacity-80">
              <li>Penatibus viverra gravida rhoncus in.</li>
              <li>Dolor integer in interdum viverra risus dolor enim.</li>
              <li>
                Turpis senectus eu, eget aenean nulla pellentesque sed ut
                tempor.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[45%] h-full">
          <iframe
            
            className="h-full w-full"
            src="https://www.youtube.com/embed/Ake-7BYw6no?si=sVrFciNx9KuTIRKK"
            title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
          ></iframe>
        </div>
      </div>
      <div className="flex justify-between h-[450px] mt-16">
        <div className="w-[45%]">
          <iframe
            
            className="h-full w-full"
            src="https://www.youtube.com/embed/WkbtvG4DKto?si=zplfoi5dupFvIG6j"
            title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
          ></iframe>
        </div>
        <div className="w-[45%] ">
          <p className="text-[#01384D] font-[600] mb-8">
            Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a
            est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum:
          </p>
          <div className="bg-[#EABF9F] px-10 py-4 mb-6 border-[3px] border-slate-900 rounded-lg">
            <ul className="list-disc text-slate-700 text-opacity-80">
              <li>Penatibus viverra gravida rhoncus in.</li>
              <li>Dolor integer in interdum viverra risus dolor enim.</li>
              <li>
                Turpis senectus eu, eget aenean nulla pellentesque sed ut
                tempor.
              </li>
            </ul>
          </div>
          <p className="text-lg font-semibold mt-6">
            Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus
            accumsan est elementum feugiat arcu mauris tincidunt. Eget faucibus
            pharetra et luctus eget ut fames. A cursus elementum egestas eu
            scelerisque id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DreamBox;
