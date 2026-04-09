import React from "react";
import AboutHeader from "@/components/common/AboutHeader";
import CommitteeMemberGrid from "@/components/common/CommitteeMemberGrid";

const internationalAdvisoryBoard = [
  { name: "Dr. Ilona Paweloszek", role: "Częstochowa University of Technology, Poland" },
  { name: "Dr. Dalia Younis", role: "AASTMT University, Egypt" },
  { name: "Dr. Raya Karlibaeva", role: "Tashkent State University of Economics, Uzbekistan" },
  { name: "Dr. Aysun Kahraman", role: "USA" },
  { name: "Dr. Manuel Malaver de la Fuente", role: "Maritime University of the Caribbean, Venezuela" },
  { name: "Dr. Andreas Gimsa", role: "Stirling Technology Institut gemeinnützige GmbH, Potsdam, Germany" },
  { name: "Dr. Ertan Gudekli", role: "Istanbul University, Turkey" },
  { name: "Dr. Rajan Iyer", role: "Environmental Materials Theoretical Physics, Arizona, USA" },
  { name: "Dr. Sidney Soares Filho", role: "University of Fortaleza (UNIFOR), Brazil" },
  { name: "Dr. Gulshat Karlibaeva", role: "Tashkent State University of Economics, Uzbekistan" },
  { name: "Dr. Liliana Guran", role: "Babeș-Bolyai University, Romania" },
  { name: "Dr. Monika Bota", role: "Babeș-Bolyai University, Romania" },
  { name: "Dr. Devendra Kumar", role: "CET, Oman" },
  { name: "Dr. Magdalena Rzemieniak", role: "Lublin University of Technology, Poland" },
  { name: "Dr. Leszek Ziora", role: "Częstochowa University of Technology, Poland" },
];

const nationalAdvisoryBoard: { name: string; role: string }[] = [
  // To be updated with national advisory board members
];

export default function ReviewCommitteePage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeader
        title="Advisory Board"
        date="May 29–31, 2026"
        overlayColor="#1a1a2e"
        bgImage="/images/utb-images/gallery/gallery-2.jpg"
        dividerColor="primary"
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">International Advisory Board</h2>
        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12" />
        <CommitteeMemberGrid members={internationalAdvisoryBoard} />
        {nationalAdvisoryBoard.length > 0 && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-16">National Advisory Board</h2>
            <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12" />
            <CommitteeMemberGrid members={nationalAdvisoryBoard} />
          </>
        )}
      </section>
    </div>
  );
}
