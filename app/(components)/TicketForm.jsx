// next is server side By default.
"use client"; // because use the form

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "شروع نشده",
    category: "مشکل سخت افزاری",
  };

  const [formData, setFormData] = useState(startingTicketData);
  return <div>TicketForm</div>;
};

export default TicketForm;
