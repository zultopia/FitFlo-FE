import { useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "@/components/sidebar";
import FilterButtonGroup from "@/components/ui/filter-button";
import Hospital1 from "@/assets/hospital1.jpg";
import Hospital2 from "@/assets/hospital2.png";
import Hospital3 from "@/assets/hospital3.jpg";
import PHC1 from "@/assets/phc1.jpg";
import PHC2 from "@/assets/phc2.jpg";
import Lab1 from "@/assets/lab1.jpg";
import Lab2 from "@/assets/lab2.jpg";

const healthcare_facility = [
  {
    name: "RS Mayapada",
    healthcare_type: "Hospital",
    ownership: "public",
    type: "A",
    open_hour: "10:00",
    close_hour: "23:00",
    picture: Hospital2,
    payment_accepted: [
      "Credit Card",
      "Debit Card",
      "Mandiri Insurance",
      "BNI Life",
      "",
      "BPJS",
      "Cash",
    ],
    address: "Jl. Bandung No.24",
    city: "Bandung",
    country: "Indonesia",
    specialization_availability: [
      "general practitioner",
      "pediatrics",
      "dentist",
      "neurosurgeon",
    ],
    facilities: ["MRI", "USG", "MCU"],
    services: [
      "General Consultation",
      "Pediatric Checkup",
      "Dental Care",
      "Neurosurgery",
    ],
  },
  {
    name: "RS Harapan Bunda",
    healthcare_type: "Hospital",
    ownership: "public",
    type: "B",
    open_hour: "08:00",
    close_hour: "20:00",
    picture: Hospital3,
    payment_accepted: ["Credit Card", "Debit Card", "BPJS", "Cash"],
    address: "Jl. Kebon Jeruk No.12",
    city: "Jakarta",
    country: "Indonesia",
    specialization_availability: [
      "general practitioner",
      "pediatrics",
      "cardiologist",
    ],
    facilities: ["X-Ray", "ICU", "Laboratory"],
    services: [
      "General Checkup",
      "Child Health Services",
      "Cardiovascular Screening",
    ],
  },
  {
    name: "RS Premier Jatinegara",
    healthcare_type: "Hospital",
    ownership: "private",
    type: "A",
    open_hour: "09:00",
    close_hour: "21:00",
    picture: Hospital1,
    payment_accepted: [
      "Credit Card",
      "Debit Card",
      "AXA Insurance",
      "Prudential",
      "Cash",
    ],
    address: "Jl. Raya Jatinegara No.85",
    city: "Jakarta",
    country: "Indonesia",
    specialization_availability: [
      "orthopedic",
      "cardiologist",
      "ophthalmologist",
    ],
    facilities: ["Cath Lab", "ICCU", "Radiology"],
    services: [
      "Orthopedic Surgery",
      "Cardiac Catheterization",
      "Eye Examination",
    ],
  },
  {
    name: "Puskesmas Jatiwaringin",
    healthcare_type: "Public Health Center",
    ownership: "public",
    type: "D",
    open_hour: "10:00",
    close_hour: "23:00",
    picture: PHC1,
    payment_accepted: [
      "Credit Card",
      "Debit Card",
      "Tokio Marine",
      "BNI Life",
      "",
      "Cash",
    ],
    address: "Jl. Bandung No.24",
    city: "Bandung",
    country: "Indonesia",
    specialization_availability: ["general practitioner", "dentist"],
    facilities: ["MRI", "USG", "MCU", "Trauma Center", "Covid Vaccination"],
    services: [
      "Primary Care",
      "Dental Checkup",
      "Trauma Handling",
      "Covid-19 Vaccination",
    ],
  },
  {
    name: "Puskesmas Cibadak",
    healthcare_type: "Public Health Center",
    ownership: "public",
    type: "D",
    open_hour: "09:00",
    close_hour: "17:00",
    picture: PHC2,
    payment_accepted: ["Credit Card", "Debit Card", "BPJS", "Cash"],
    address: "Jl. Raya Cibadak No.10",
    city: "Bogor",
    country: "Indonesia",
    specialization_availability: [
      "general practitioner",
      "dentist",
      "nutritionist",
    ],
    facilities: ["Basic Laboratory", "Pharmacy", "Child Immunization"],
    services: [
      "General Consultation",
      "Dental Services",
      "Nutritional Counseling",
      "Immunization",
    ],
  },
  {
    name: "RS Santo Borromeus",
    healthcare_type: "Hospital",
    ownership: "public",
    type: "A",
    open_hour: "09:00",
    close_hour: "22:00",
    picture: Hospital3,
    payment_accepted: ["Credit Card", "Debit Card", "BPJS", "Allianz", "Cash"],
    address: "Jl. Ir. H. Juanda No.100",
    city: "Bandung",
    country: "Indonesia",
    specialization_availability: [
      "general practitioner",
      "cardiologist",
      "orthopedic",
      "gynecologist",
    ],
    facilities: ["MRI", "Ultrasonography", "Cath Lab"],
    services: [
      "General Health Check",
      "Cardiac Screening",
      "Orthopedic Care",
      "Gynecological Consultation",
    ],
  },
  {
    name: "Lab Klinik Prodia",
    healthcare_type: "Laboratory",
    ownership: "private",
    type: "",
    open_hour: "07:00",
    close_hour: "20:00",
    picture: Lab1,
    payment_accepted: [
      "Credit Card",
      "Debit Card",
      "BPJS",
      "Mandiri Insurance",
      "Cash",
    ],
    address: "Jl. Gatot Subroto No.45",
    city: "Jakarta",
    country: "Indonesia",
    services: [
      "Blood Test",
      "Urine Test",
      "DNA Test",
      "Covid-19 PCR",
      "Allergy Test",
    ],
    facilities: ["Phlebotomy Room", "Radiology", "Ultrasonography"],
  },
  {
    name: "Lab Kimia Farma",
    healthcare_type: "Laboratory",
    ownership: "private",
    type: "",
    open_hour: "08:00",
    close_hour: "17:00",
    picture: Lab2,
    payment_accepted: ["Credit Card", "Debit Card", "BPJS", "Cash"],
    address: "Jl. Sudirman No.12",
    city: "Bandung",
    country: "Indonesia",
    services: [
      "Blood Test",
      "Cholesterol Test",
      "Liver Function Test",
      "Urine Test",
    ],
    facilities: ["Sampling Room", "Cold Storage", "Pharmacy"],
  },
  {
    name: "Lab Pramita",
    healthcare_type: "Laboratory",
    ownership: "private",
    type: "",
    open_hour: "06:00",
    close_hour: "20:00",
    picture: Lab1,
    payment_accepted: [
      "Credit Card",
      "Debit Card",
      "AXA Insurance",
      "BPJS",
      "Cash",
    ],
    address: "Jl. Dr. Sutomo No.9",
    city: "Surabaya",
    country: "Indonesia",
    services: [
      "Complete Blood Count",
      "HIV Test",
      "Covid-19 Antigen",
      "Thyroid Function Test",
    ],
    facilities: ["Sterile Room", "Mobile Lab", "Emergency Sampling"],
  },
  {
    name: "Lab CITO",
    healthcare_type: "Laboratory",
    ownership: "private",
    type: "",
    open_hour: "08:00",
    close_hour: "18:00",
    picture: Lab2,
    payment_accepted: [
      "Credit Card",
      "Debit Card",
      "BPJS",
      "Prudential",
      "Cash",
    ],
    address: "Jl. Pahlawan No.25",
    city: "Semarang",
    country: "Indonesia",
    services: [
      "Blood Chemistry",
      "Tumor Marker Test",
      "DNA Paternity Test",
      "Microbiology Test",
    ],
    facilities: [
      "Molecular Biology Room",
      "PCR Machine",
      "Sterile Sampling Area",
    ],
  },
  {
    name: "Lab Parahita",
    healthcare_type: "Laboratory",
    ownership: "private",
    type: "",
    open_hour: "07:30",
    close_hour: "19:00",
    picture: Lab1,
    payment_accepted: ["Credit Card", "Debit Card", "Manulife", "BPJS", "Cash"],
    address: "Jl. Magelang No.34",
    city: "Yogyakarta",
    country: "Indonesia",
    services: [
      "Hemoglobin Test",
      "Diabetes Screening",
      "Hormone Analysis",
      "Urinalysis",
    ],
    facilities: [
      "Automated Analyzers",
      "Sterile Sampling Booth",
      "Cold Chain Storage",
    ],
  },
  {
    name: "Lab Bio Medika",
    healthcare_type: "Laboratory",
    ownership: "private",
    type: "",
    open_hour: "07:00",
    close_hour: "21:00",
    picture: Lab2,
    payment_accepted: [
      "Credit Card",
      "Debit Card",
      "AIA Insurance",
      "BPJS",
      "Cash",
    ],
    address: "Jl. Diponegoro No.77",
    city: "Medan",
    country: "Indonesia",
    services: [
      "Urine Culture",
      "Blood Glucose Test",
      "Tumor Marker",
      "Covid-19 PCR",
    ],
    facilities: [
      "Biosafety Cabinet",
      "Automated PCR Machine",
      "Sample Collection Room",
    ],
  },
  {
    name: "Lab Alton",
    healthcare_type: "Laboratory",
    ownership: "private",
    type: "",
    open_hour: "08:00",
    close_hour: "20:00",
    picture: Lab1,
    payment_accepted: [
      "Credit Card",
      "Debit Card",
      "Tokio Marine",
      "BPJS",
      "Cash",
    ],
    address: "Jl. Hasanuddin No.5",
    city: "Makassar",
    country: "Indonesia",
    services: [
      "Blood Typing",
      "Lipid Profile",
      "Kidney Function Test",
      "Covid-19 Antigen",
    ],
    facilities: [
      "Centrifuge Machine",
      "Biochemistry Analyzer",
      "Sampling Room",
    ],
  },
  {
    name: "Lab Satria",
    healthcare_type: "Laboratory",
    ownership: "public",
    type: "",
    open_hour: "09:00",
    close_hour: "17:00",
    picture: Lab2,
    payment_accepted: ["Credit Card", "Debit Card", "BPJS", "Cash"],
    address: "Jl. Merdeka No.23",
    city: "Bogor",
    country: "Indonesia",
    services: [
      "Hematology Test",
      "Renal Function Test",
      "Stool Test",
      "Malaria Test",
    ],
    facilities: [
      "Basic Lab Equipment",
      "Sterilization Room",
      "Reception and Waiting Area",
    ],
  },
  {
    name: "Lab Nusantara",
    healthcare_type: "Laboratory",
    ownership: "public",
    type: "",
    open_hour: "07:30",
    close_hour: "19:30",
    picture: Lab1,
    payment_accepted: ["Credit Card", "Debit Card", "BPJS", "Allianz", "Cash"],
    address: "Jl. Merdeka No.9",
    city: "Denpasar",
    country: "Indonesia",
    services: [
      "Complete Blood Count",
      "Electrolyte Test",
      "Covid-19 Rapid Test",
      "Thrombocyte Test",
    ],
    facilities: ["Sterile Sampling Room", "Automated Analyzer", "PCR Testing"],
  },
  {
    name: "Lab Anugerah",
    healthcare_type: "Laboratory",
    ownership: "private",
    type: "",
    open_hour: "06:30",
    close_hour: "18:00",
    picture: Lab2,
    payment_accepted: [
      "Credit Card",
      "Debit Card",
      "BPJS",
      "BNI Life",
      "",
      "Cash",
    ],
    address: "Jl. Sultan Agung No.10",
    city: "Malang",
    country: "Indonesia",
    services: [
      "Hepatitis Test",
      "Hematology",
      "Vitamin Deficiency Test",
      "Allergy Panel",
    ],
    facilities: [
      "Advanced Diagnostic Equipment",
      "Sample Processing Area",
      "Sterile Room",
    ],
  },
];

const healthcareTypes = ["Public Health Center", "Hospital", "Laboratory"];
const paymentOptions = [
  "Cash",
  "Debit Card",
  "Credit Card",
  "BPJS",
  "Tokio Marine",
  "BNI Life",
  "Mandiri Insurance",
  "AXA Insurance",
  "Prudential",
  "AIA Insurance",
];

const HealthcarePage = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeFilterChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handlePaymentFilterChange = (payment: string) => {
    setSelectedPayments((prev) =>
      prev.includes(payment)
        ? prev.filter((p) => p !== payment)
        : [...prev, payment]
    );
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const filteredData = healthcare_facility.filter(
    (facility) =>
      (selectedTypes.length === 0 ||
        selectedTypes.includes(facility.healthcare_type)) &&
      (selectedPayments.length === 0 ||
        facility.payment_accepted.some((payment) =>
          selectedPayments.includes(payment)
        )) &&
      facility.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Sidebar />

      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 my-6">
          Healthcare Facilities
        </h1>

        <div className="flex justify-between items-center mb-4">
          {/* Search Bar */}
          <input
            className="w-full max-w-[80%] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search healthcare facility..."
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {/* Filter Button */}
          <button
            className="ml-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all"
            onClick={toggleFilterVisibility}
          >
            <span className="hidden sm:inline">
              {isFilterVisible ? "Hide Filters" : "Show Filters"}
            </span>
            <span className="inline sm:hidden">Filters</span>
          </button>
        </div>

        <motion.div
          animate={{
            height: isFilterVisible ? "auto" : 0,
            opacity: isFilterVisible ? 1 : 0,
          }}
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FilterButtonGroup
            options={healthcareTypes}
            selectedOptions={selectedTypes}
            title="Type"
            onChange={handleTypeFilterChange}
          />

          <FilterButtonGroup
            options={paymentOptions}
            selectedOptions={selectedPayments}
            title="Payment"
            onChange={handlePaymentFilterChange}
          />
        </motion.div>

        <div className="grid py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredData.map((facility, index) => (
            <motion.div
              key={facility.name}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                alt={facility.name}
                className="w-full h-40 object-cover rounded-md"
                src={facility.picture}
              />
              <h3 className="text-lg font-semibold mt-2">{facility.name}</h3>
              <p className="text-sm text-gray-600">
                {facility.city}, {facility.country}
              </p>
              <p className="text-sm text-gray-500">{facility.address}</p>
              <p className="text-sm mt-2">
                Open: {facility.open_hour} - {facility.close_hour}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcarePage;
