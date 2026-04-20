import React from "react";
import AboutHeader from "@/components/common/AboutHeader";

const CommitteeMemberGrid = ({ members }: { members: { name: string, role: string }[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {members.map((member, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg p-6 shadow">
                <div className="border-l-4 border-primary pl-4 mb-2 font-semibold text-lg">{member.name}</div>
                <div className="text-gray-700">{member.role}</div>
            </div>
        ))}
    </div>
);

const welcomeCommittee = [
    { name: "Dr. Vandana Gupta", role: "Associate Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Shalini Sharma", role: "Associate Professor, Kalindi College, University of Delhi" },
    { name: "Prof. Nidhi Arora", role: "Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Sweety Kataria", role: "Associate Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Reena Jain", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Rajani", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Dharmendra Kumar Meena", role: "Assistant Professor (TIC), Kalindi College, University of Delhi" },
    { name: "Mr. Rajeev Kumar Rai", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Sushil Malik", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Ruby Gupta", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Ms. Neha Singh", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Ms. Mamta", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Dr. Anshula Sangwan", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Ms. Kanishka Solanki", role: "Assistant Professor, Kalindi College, University of Delhi" },
    { name: "Mrs. Asha Khantwal", role: "Senior Technical Assistant, Kalindi College, University of Delhi" },
    { name: "Mrs. Mamta Sachdeva", role: "Senior Technical Assistant, Kalindi College, University of Delhi" },
];

const technicalCommittee = [
    { name: "Mr Rajeev Kumar Rai", role: "Kalindi College University of Delhi" },
    { name: "Ms Neha Singh", role: "Kalindi College University of Delhi" },
    { name: "Ms Mamta", role: "Kalindi College University of Delhi" },
    { name: "Ms Kanishka Solanki", role: "Kalindi College University of Delhi" },
    { name: "Ms Mamta Sachdeva", role: "Kalindi College University of Delhi" },
    { name: "Asha Khantwal", role: "Kalindi College University of Delhi" },
];

const technicalSessionCommittee = [
    { name: "Dr. Rajeev Kumar", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Vanya Arun", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Himanshu Sharma", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Pankaj", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Chavi Pahwa", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Bharti Choudhary", role: "Kalindi College, University of Delhi" },
    { name: "Prof. (Dr.) Avdhesh Kr. Gupta", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Ankita Awasthi", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Meenu", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Umesh Chandra", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Sanjoy", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Manoj Kumar", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Aastha", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Sanjeev Verma", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Khushboo Gupta", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Mukesh Kumar", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Kuldeep Malik", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Veena", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Pankja Verma", role: "Kalindi College, University of Delhi" },

];

const foodCommittee = [
    { name: "Dr. Priyanka Bhatnagar", role: "Committee Chair, Kalindi College, University of Delhi" },
    { name: "Dr. Shivani Saini", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Nidhi Singh", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Bisma", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Duraivadivel", role: "Kalindi College, University of Delhi" },
];

const sponsorshipCommittee = [
    { name: "Dr. Kshama Pandey", role: "Committee Chair, Kalindi College, University of Delhi" },
    { name: "Dr. Arpit Varshney", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Rakhi Trivedi", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Dimpy Chauhan", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Garima", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Sameer", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Pankaj Sharma", role: "Kalindi College, University of Delhi" },
];

const hospitalityCommittee = [
    { name: "Dr. Naseem Ahmed", role: "Committee Chair, Kalindi College, University of Delhi" },
    { name: "Dr. Vibhav Narayan Singh", role: "Kalindi College, University of Delhi" },
    { name: "Mr. Satish Jha", role: "Kalindi College, University of Delhi" },
    { name: "Mr. Mayank", role: "Kalindi College, University of Delhi" },
    { name: "Mr. Pradeep Upadhyay", role: "Kalindi College, University of Delhi" },
];

const registrationHelpDeskCommittee = [
    { name: "Dr. Shradha Sharma", role: "Committee Chair, Kalindi College, University of Delhi" },
    { name: "Dr. Ashlesha Bhardwaj", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Sunil Bhardwaj", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Geetika", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Manoj Kumar", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Nidhi Rai", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Kushal Mazumder", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Rahul Singh", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Saurabh", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Kuldeep Malik", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Aruna", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Roma Pandey", role: "Kalindi College, University of Delhi" },
];

const printingDesigningCommittee = [
    { name: "Mr. Aditya Saini", role: "Committee Chair, Kalindi College, University of Delhi" },
    { name: "Dr. Kriti Nagarkoti", role: "Kalindi College, University of Delhi" },
    { name: "Dr. K.M. Bala", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Gaurav Upadhyay", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Priti", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Jayanta Biswas", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Monu", role: "Kalindi College, University of Delhi" },
];

const publicitySocialMediaCommittee = [
    { name: "Dr. Heena Khera", role: "Committee Chair, Kalindi College, University of Delhi" },
    { name: "Dr. Vinti Dhaka", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Kuldeep Malik", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Prince Solanki", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Rahul Singh", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Aastha", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Saurabh", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Neha", role: "Kalindi College, University of Delhi" },
    { name: "Ms. Smriti Sethi", role: "Kalindi College, University of Delhi" },
];

const culturalCommittee = [
    { name: "Dr. Khushboo Gupta", role: "Committee Chair, Kalindi College, University of Delhi" },
    { name: "Dr. Pawan Soni", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Mukesh", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Surbhi Rani", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Akansha", role: "Kalindi College, University of Delhi" },
    { name: "Ms. Priyanka Singh", role: "Kalindi College, University of Delhi" },
];

const publicationCommittee = [
    { name: "Prof. Narendra Kumar", role: "Committee Chair, Kalindi College, University of Delhi" },
    { name: "Dr. Rajeev Kumar", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Pranav Srivastava", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Jaswinder Singh", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Gaurav Upadhyay", role: "Kalindi College, University of Delhi" },
    { name: "Dr. K.K. Mishra", role: "Kalindi College, University of Delhi" },
    { name: "Dr. Swati", role: "Kalindi College, University of Delhi" },
];

const Section = ({ title, members }: { title: string, members: { name: string, role: string }[] }) => (
    <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">{title}</h2>
        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-8"></div>
        <CommitteeMemberGrid members={members} />
    </section>
);

export default function OtherCommitteesPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Committees"
                date="14 – 15 October"
                // image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <Section title="Welcome Committee" members={welcomeCommittee} />
                <Section title="Technical Committee" members={technicalCommittee} />
                <Section title="Technical Session Committee" members={technicalSessionCommittee} />
                <Section title="Food Committee" members={foodCommittee} />
                <Section title="Sponsorship Committee" members={sponsorshipCommittee} />
                <Section title="Transportation, Accommodation & Hospitality Committee" members={hospitalityCommittee} />
                <Section title="Registration Committee & Help Desk" members={registrationHelpDeskCommittee} />
                <Section title="Printing and Designing Committee" members={printingDesigningCommittee} />
                <Section title="Publicity & Social Media Committee" members={publicitySocialMediaCommittee} />
                <Section title="Cultural Committee" members={culturalCommittee} />
                <Section title="Publication Committee" members={publicationCommittee} />
            </div>
        </div>
    );
}
