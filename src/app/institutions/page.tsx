"use client";
import Institution from "@/components/institutions/Institution";
import institutionsData from "@/data/institutions.json";
import candidatesData from "@/data/candidates.json";
import programsData from "@/data/programs.json";
import candidateProgramsData from "@/data/cp.json";

const page = ({ params, searchParams }: any) => {
  const search = searchParams?.search || "";

  const candidateWithProgram: any = candidatesData.map((cnd) => {
    const cps = candidateProgramsData.filter((cp) => cp.code == cnd.chest);
    return {
      ...cnd,
      programs: cps.map((cp) => {
        return {
          ...programsData.find((prg) => prg.code == cp.prg)
        }
      })
    };
  });

  console.log(candidateWithProgram);

  return (
    <div>
      <Institution
        searchParams={searchParams}
        candidates={candidatesData as any}
        candidatePrograms={candidateProgramsData as any}
        programs={programsData}
        institutions={
          institutionsData
            .filter((instn) =>
              instn.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 12) as any
        }
      />
    </div>
  );
};

export default page;
