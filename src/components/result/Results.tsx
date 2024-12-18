import React from "react";
import TeamsList from "./TeamsList";
import ProgramsList from "./ProgramsList";

interface Props {
  topTeams: any;
  programs: any;
  topSenior: any;
  topJunior:any
  topSuperSenior: any;
  topSubJunior: any;
  topGeneral: any;
}

const Results = (props: Props) => {

  console.log(props);
  

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full md:h-screen items-center p-5">
        <div className="flex flex-col h-[90vh] min-w-[300px] rounded-3xl gap-4 p-3 ">

        <TeamsList topTeams={props.topTeams} />

        </div>

        <ProgramsList programs={props.programs} />
      </div>
      <div>

      <div className="flex flex-col lg:flex-row mt-60 lg:mt-8 w-screen ">
        <div className="w-full lg:w-[50%]">
          <p className="font-bold text-xl text-center">General Toppers</p>
          <div className="flex flex-wrap p-3  gap-2">
            {props.topGeneral?.length > 0 ? (
              props.topGeneral.slice(0, 3).map((topper: any) => (
                <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                  <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                    {topper.chest}
                  </p>
                  <p className="font-bold">{topper.name}</p>
                  <p className="text-3xl font-bold">{topper.totalPoints} pts</p>
                  <p className="text-sm uppercase">General | {topper.college}</p>
                </div>
              ))
            ) : (
              <>
               <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                  No Toppers to show
                </div>
                </>
            )}
          </div>
        </div>

        <div className="w-full lg:w-[50%]">
          <p className="font-bold text-xl text-center">Senior Toppers</p>
          <div className="flex flex-wrap p-3  gap-2">
            {props.topSenior?.length > 0 ? (
              props.topSenior.slice(0, 3).map((topper: any) => (
                <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                  <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                    {topper.chest}
                  </p>
                  <p className="font-bold">{topper.name}</p>
                  <p className="text-3xl font-bold">{topper.totalPoints} pts</p>
                  <p className="text-sm uppercase">Senior | {topper.college}</p>
                </div>
              ))
            ) : (
              <>
               <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                  No Toppers to show
                </div>
                </>
            )}
          </div>
        </div>
{/* 
        <div className="w-full lg:w-[30%]">
          <p className="font-bold text-xl text-center">Junior Toppers</p>
          <div className="flex flex-wrap p-3  gap-2">
            {props.topJunior?.length > 0 ? (
              props.topJunior.slice(0, 3).map((topper: any) => (
                <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                  <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                    {topper.chest}
                  </p>
                  <p className="font-bold">{topper.name}</p>
                  <p className="text-3xl font-bold">{topper.totalPoints} pts</p>
                  <p className="text-sm uppercase">Junior | {topper.college}</p>
                </div>
              ))
            ) : (
              <>
               <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                  No Toppers to show
                </div>
                </>
            )}
          </div>
        </div> */}

      </div>





      <div className="flex flex-col lg:flex-row mt-60 lg:mt-8">

        <div className="w-full lg:w-[50%]">
          <p className="font-bold text-xl text-center">Super Senior Toppers</p>
          <div className="flex flex-wrap p-3  gap-2">
            {props.topSuperSenior?.length > 0 ? (
              props.topSuperSenior.slice(0, 3).map((topper: any) => (
                <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                  <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                    {topper.chest}
                  </p>
                  <p className="font-bold">{topper.name}</p>
                  <p className="text-3xl font-bold">{topper.totalPoints} pts</p>
                  <p className="text-sm uppercase">Super Senior | {topper.college}</p>
                </div>
              ))
            ) : (
              <>
               <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                  No Toppers to show
                </div>
                </>
            )}
          </div>
        </div>

        <div className="w-full lg:w-[50%]">
          <p className="font-bold text-xl text-center">Sub Junior Toppers</p>
          <div className="flex flex-wrap p-3  gap-2">
            {props.topSubJunior?.length > 0 ? (
              props.topSubJunior.slice(0, 3).map((topper: any) => (
                <div className="hover:bg-ysmoke p-3 border rounded-md w-full">
                  <p className="text-sm bg-yellow inline font-semibold p-1 rounded-md">
                    {topper.chest}
                  </p>
                  <p className="font-bold">{topper.name}</p>
                  <p className="text-3xl font-bold">{topper.totalPoints} pts</p>
                  <p className="text-sm uppercase">Sub Junior | {topper.college}</p>
                </div>
              ))
            ) : (
              <>
               <div className="hover:bg-ysmoke p-3 border rounded-md w-full flex items-center justify-center font-semibold bg-yellow h-40">
                  No Toppers to show
                </div>
                </>
            )}
          </div>
        </div>

      </div>
      </div>
      
    </>
  );
};

export default Results;
