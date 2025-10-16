"use client";

import { useState, useEffect } from "react";
import { WORKING_HOURS } from "@/lib/constants";
import { parseSchedule, Day } from "@/lib/utils";

type BusinessStatus = { isOpen: boolean; message: string };

export default function useBusinessStatus(): BusinessStatus {
  const [status, setStatus] = useState<BusinessStatus>({ isOpen: false, message: "Cargando..." });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Sunday, 1=Monday
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour * 60 + minute;
      const days: Day[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const dayName = days[day];
      const schedule = parseSchedule(WORKING_HOURS)[dayName];

      if (!schedule) {
        setStatus({ isOpen: false, message: "CERRADO - Abrimos Martes 9:00am" });
        return;
      }

      for (const slot of schedule) {
        if (currentTime >= slot.start && currentTime < slot.end) {
          setStatus({ isOpen: true, message: "ABIERTO" });
          return;
        }
      }

      // Determinar próxima apertura simple
      setStatus({ isOpen: false, message: "CERRADO - Abrimos 9:00am" });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
