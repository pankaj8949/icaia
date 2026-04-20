import React from "react";
import AboutHeader from "@/components/common/AboutHeader";
import CommitteeMemberGrid from "@/components/common/CommitteeMemberGrid";

const organizingCommitteeMembers = [
    { name: "Dr. Priyanka Bhatnagar", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Nidhi Puri", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Vanya", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Bharti", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Pankaj", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Lalit", role: "Kalindi College, University of Delhi" },
];

export default function OrganizingCommitteePage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Organising Committee"
                date="May 29–31, 2026"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Organising Committee</h2>
                <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12"></div>
                <CommitteeMemberGrid members={organizingCommitteeMembers} />
            </section>
        </div>
    );
}
