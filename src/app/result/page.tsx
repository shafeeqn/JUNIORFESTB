import React from "react";
import candidatesData from "@/data/candidates.json";
import programsData from "@/data/programs.json";
import collegeData from "@/data/institutions.json";
import cp from "@/data/cp.json";
import Results from "@/components/result/Results";

const page = () => {
  const publishedPrograms = programsData.filter(
    (prg: any) => prg?.publish == 1
  );

  const candidateWithProgram: any = publishedPrograms.map((prg) => {
    const candidate = cp.filter((c) => c.prg == prg.code);
    const candidatesWithDetails = candidate.map((cnd) => {
      return {
        cp: cnd,
        ...candidatesData.find((c) => c.chest == cnd.code),
      };
    });
    return {
      ...prg,
      candidate: candidatesWithDetails,
    };
  });

  const collegeWithTotalPoints = collegeData.map((college) => {
    let totalPoints = 0;
    let juniorPoints = 0;
    let seniorPoints = 0;
    let generalPoints = 0;
    let superSeniorPoints = 0;
    let subJuniorPoints = 0;

    candidateWithProgram.map((prg: any) => {
      prg.candidate.map((cnd: any) => {
        if (cnd?.college == college.name) {
          // console.log(cnd?.cp);

          totalPoints += cnd?.cp?.pts || 0;
          if (prg?.cat === "J") {
            juniorPoints += cnd?.cp?.pts || 0;
          } else if (prg?.cat === "S") {
            seniorPoints += cnd?.cp?.pts || 0;
          } else if (prg?.cat === "G") {
            generalPoints += cnd?.cp?.pts || 0;
          } else if (prg?.cat === "SS") {
            superSeniorPoints += cnd?.cp?.pts || 0;
          } else if (prg?.cat === "SJ") {
            subJuniorPoints += cnd?.cp?.pts || 0;
          }
        }
      });
    });

    return {
      ...college,
      totalPoints,
      juniorPoints,
      seniorPoints,
      generalPoints,
      superSeniorPoints,
      subJuniorPoints,
    };
  });

  const collegeWithTotalPointsSorted = collegeWithTotalPoints.sort(
    (a, b) => b.totalPoints - a.totalPoints
  );

  console.log(collegeWithTotalPointsSorted[0]);

  const topCandidates = candidatesData.map((cnd) => {
    let totalPoints = 0;
    let cat = "";

    cp.map((c) => {
      if (cnd.chest == c.code) {
        const prg = programsData.find((p) => p.code === c.prg);
        
        if (prg?.publish == 1 && prg?.isGrp != 1) {
          cat = prg?.cat || "";
          // cat = c.prg.slice(0, 2);
          // if (cat === "SS") {
          //   cat = "SS";
          // } else if (cat === "SJ") {
          //   cat = "SJ";
          // }
          // // else cat starts with S
          // else if (cat.startsWith("S")) {
          //   cat = "S";
          // } else if (cat.startsWith("J")) {
          //   cat = "J";
          // } else if (cat.startsWith("G")) {
          //   cat = "G";
          // }
          totalPoints += c?.pts || 0;
        }
      }
    });

    return {
      ...cnd,
      totalPoints,
      cat,
    };
  });

  const topCandidatesSorted = topCandidates.sort(
    (a, b) => b.totalPoints - a.totalPoints
  );

  const top5JuniorCandidates = topCandidatesSorted
    .filter((cnd) => cnd.cat === "J")
    .slice(0, 5);

  const top5SuperSeniorCandidates = topCandidatesSorted
    .filter((cnd) => cnd.cat === "SS")
    .slice(0, 5);
  const top5SubJuniorCandidates = topCandidatesSorted
    .filter((cnd) => cnd.cat === "SJ")
    .slice(0, 5);
  const top5SeniorCandidates = topCandidatesSorted
    .filter((cnd) => cnd.cat === "S")
    .slice(0, 5);

  const top5GeneralCandidates = topCandidatesSorted
    .filter((cnd) => cnd.cat === "G")
    .slice(0, 5);

  // console.log(topCandidatesSorted[0]);

  return (
    <div>
      <Results
        topTeams={collegeWithTotalPointsSorted}
        programs={candidateWithProgram}
        topJunior={top5JuniorCandidates}
        topSenior={top5SeniorCandidates}
        topGeneral={top5GeneralCandidates}
        topSuperSenior={top5SuperSeniorCandidates}
        topSubJunior={top5SubJuniorCandidates}
      />
    </div>
  );
};

export default page;
