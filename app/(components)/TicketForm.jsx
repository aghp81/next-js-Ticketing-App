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
  return (
    <div className="flex justify-center">
      <form action="">
        <h3>ایجاد تیکت</h3>
        <label>عنوان</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
      </form>
    </div>
  );
};

export default TicketForm;
