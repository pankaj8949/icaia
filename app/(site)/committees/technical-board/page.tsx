import React from "react";
import AboutHeader from "@/components/common/AboutHeader";
import CommitteeMemberGrid from "@/components/common/CommitteeMemberGrid";

const internationalAdvisoryBoard = [
  {
    name: "Dr. Raya Karlibaeva",
    role: "Professor, Tashkent State University of Economics, Uzbekistan",
  },
  {
    name: "Dr. Dorota Jelonek",
    role: "Czestochowa University of Technology, Poland",
  },
  {
    name: "Dr. Lilla Knop",
    role: "Professor, Silesian University of Technology, Poland",
  },
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
