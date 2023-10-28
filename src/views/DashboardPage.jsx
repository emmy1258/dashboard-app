import React, { useContext, useEffect } from "react";
import DashboardLayout from "../layouts/DashbordLayout";
import Authentication from "../auth";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {

  return (
    <>
      <DashboardLayout />
    </>
  );
}
