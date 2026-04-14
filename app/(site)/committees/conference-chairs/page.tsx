import React from "react";
import AboutHeader from "@/components/common/AboutHeader";
import CommitteeMemberGrid from "@/components/common/CommitteeMemberGrid";

const chiefPatron = [
    {
        image: "/images/user.jpg",
        name: "Prof. (Dr.) Meena Charanda",
        role: "Principal",
        affiliation: "Kalindi College, University of Delhi",
    }
];

const specialGuest = [
    {
        image: "/images/user.jpg",
        name: "Dr. Nihar Amonkar",
        role: "VC",
        affiliation: "IILM University, Greater Noida, India",
    },
];

const conferenceChair: { image: string; name: string; role: string; affiliation: string }[] = [
    // To be updated with actual Conference Chair details
];

const internationalChair: { image: string; name: string; role: string; affiliation: string }[] = [
    // To be updated with actual International Chair details
];

const conveners = [
    {
        image: "/images/user.jpg",
        name: "Dr. Dharmendra Kumar Meena",
        role: "Convener",
        affiliation: "Kalindi College, University of Delhi",
    },
    {
        image: "/images/user.jpg",
        name: "Dr. Ruby Gupta",
        role: "Convener",
        affiliation: "Kalindi College, University of Delhi",
    },
    {
        image: "/images/user.jpg",
        name: "Ms. Neha Singh",
        role: "Co Convener",
        affiliation: "Kalindi College, University of Delhi",
    },
    {
        image: "/images/user.jpg",
        name: "Dr. Reena Jain",
        role: "Co Convener",
        affiliation: "Kalindi College, University of Delhi",
    },
];

const organizingSecretaries = [
    {
        image: "/images/user.jpg",
        name: "Dr. Rajani",
        role: "Organising Secretary",
        affiliation: "Kalindi College, University of Delhi",
    },
    {
        image: "/images/user.jpg",
        name: "Dr. Sushil Malik",
        role: "Organising Secretary",
        affiliation: "Kalindi College, University of Delhi",
    },
    {
        image: "/images/user.jpg",
        name: "Dr. Anshula Sangwan",
        role: "Organising Secretary",
        affiliation: "Kalindi College, University of Delhi",
    },
    {
        image: "/images/speakers/dr-narendra.jpeg",
        name: "Dr. Narendra Kumar",
        role: "Organising Secretary",
        affiliation: "IILM University, Greater Noida",
    },
];

type OrganizingCommitteeEntry = {
    name: string;
    role: string;
    affiliation: string;
    image?: string;
};

const organizingCommittee: OrganizingCommitteeEntry[] = [
    {
        name: "Dr Rakesh M Patel",
        role: "Organising Committee",
        affiliation: "Government of College of Science Gandhi Nagar, India"
    },
    {
        name: "Dr Indu Sharma",
        role: "Organising Committee",
        affiliation: "NIMS University, Jaipur, India"
    },
    {
        name: "Dr Pankaj",
        role: "Organising Committee",
        affiliation: "IILM University, Greater Noida, India"
    },
    {
        name: "Dr Rajeev",
        role: "Organising Committee",
        affiliation: "IILM University, Greater Noida, India"
    },
    {
        name: "Dr. Vandana Gupta",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Dr. Shalini Sharma",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Prof.  (Dr.) Nidhi Arora",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Dr. Sweety Kataria",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Dr. Reena Jain",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Dr. Rajani",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Dr. Dharmendra Kumar Meena",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Dr. Sushil Malik",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Dr. Ruby Gupta",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Dr. Anshula Sangwan",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Mr. Rajeev Kumar Rai",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Ms. Neha Singh",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Ms. Mamta",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    },
    {
        name: "Ms. Kanishka Solanki",
        role: "Organising Committee",
        affiliation: "Kalindi College, University of Delhi"
    }
];

export default function ConferenceChairPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Conference Chairs & Committee"
                date="May 29–31, 2026"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <section className="max-w-6xl mx-auto px-4 py-12">

                <h2 className="text-3xl md:text-4xl font-bold mb-8">Chief Patron</h2>
                <CommitteeMemberGrid members={chiefPatron.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Special Guest</h2>
                <CommitteeMemberGrid members={specialGuest.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />
                <br />
                <br />
                {conferenceChair.length > 0 && (
                    <>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Conference Chair</h2>
                        <CommitteeMemberGrid members={conferenceChair.map(m => ({
                            name: m.name,
                            role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                            image: m.image
                        }))} />
                    </>
                )}

                {internationalChair.length > 0 && (
                    <>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">International Chair</h2>
                        <CommitteeMemberGrid members={internationalChair.map(m => ({
                            name: m.name,
                            role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                            image: m.image
                        }))} />
                    </>
                )}

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Conveners &amp; Co-Conveners</h2>
                <CommitteeMemberGrid members={conveners.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Organizing Secretaries</h2>
                <CommitteeMemberGrid members={organizingSecretaries.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image ?? "/images/user.jpg"
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Organizing Committee</h2>
                <CommitteeMemberGrid members={organizingCommittee.map((m) => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image ?? "/images/user.jpg"
                }))} />

            </section>
        </div>
    );
}
