import React from "react";
import AboutHeader from "@/components/common/AboutHeader";
import CommitteeMemberGrid from "@/components/common/CommitteeMemberGrid";

const organizingCommitteeMembers = [
    { name: "Dr. Rakesh M Patel", role: "Government College of Science, Gandhi Nagar, India" },
    { name: "Dr. Indu Sharma", role: "NIMS University, Jaipur, India" },
    { name: "Dr. Pankaj", role: "IILM University, Greater Noida, India" },
    { name: "Dr. Rajeev", role: "IILM University, Greater Noida, India" },
    { name: "Dr. Vandana Gupta", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Shalini Sharma", role: "Kalindi College, University of Delhi" },
    { name: "Prof. (Dr.) Nidhi Arora", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Sweety Kataria", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Reena Jain", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Rajani", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Dharmendra Kumar Meena", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Sushil Malik", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Ruby Gupta", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Anshula Sangwan", role: "Kalindi College, University of Delhi" },
    { name: "Mr. Rajeev Kumar Rai", role: "Kalindi College, University of Delhi" },
    { name: "Ms. Neha Singh", role: "Kalindi College, University of Delhi" },
    { name: "Ms. Mamta", role: "Kalindi College, University of Delhi" },
    { name: "Ms. Kanishka Solanki", role: "Kalindi College, University of Delhi" },
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
