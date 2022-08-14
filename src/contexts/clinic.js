import React, { useMemo, useState } from "react";

export const ClinicContext = React.createContext(null);

function ClinicProvider({ children }) {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [patientServices, setPatientServices] = useState([]);
  const [patientSupports, setPatientSupports] = useState([]);
  const [family, setFamily] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [location, setLocation] = useState({
    address: "",
    fullAddress: "",
    phone: "",
  });

  const value = useMemo(
    () => ({
      doctors,
      setDoctors,
      services,
      setServices,
      treatments,
      setTreatments,
      location,
      setLocation,
      patientServices,
      setPatientServices,
      patientSupports,
      setPatientSupports,
      family,
      setFamily,
    }),
    [
      doctors,
      services,
      patientServices,
      treatments,
      location,
      family,
      patientSupports,
    ]
  );

  return (
    <ClinicContext.Provider value={value}>{children}</ClinicContext.Provider>
  );
}
export default ClinicProvider;
