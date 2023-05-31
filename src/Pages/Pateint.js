import React from "react";
import { Route,Routes } from "react-router-dom";
import Dashboard from "../components/patient-dash/Dashboard";
import SidebarPatient from "../components/patient-dash/Sidebar";

const PatientPage = () => {
  return (
    <>
      <section class="py-3 ">
        <div class="container-fluid">
          <div class="row">
            <SidebarPatient />
            <Routes className="hi">
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientPage;
