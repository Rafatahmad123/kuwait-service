"use client";

import { useState } from "react";
import { MapPin, MessageCircle } from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

const ShareLocationButton = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsLink = `https://maps.google.com/?q=${latitude},${longitude}`;
        const message = `موقعي الحالي: ${mapsLink}`;
        const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
        void trackLead({
          channel: "whatsapp",
          source: "mobile-share-location",
          href: url,
          metadata: {
            latitude,
            longitude,
          },
        });
        window.open(url, "_blank", "noopener,noreferrer");
        setStatus("idle");
      },
      () => {
        setStatus("error");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleShareLocation}
        className="inline-flex items-center gap-2 rounded-full bg-kuwait-green px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-kuwait-green/60"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 animate-pulse" aria-hidden="true" />
            جارٍ إرسال الموقع...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            مشاركة موقعي الحالي عبر واتساب
          </span>
        )}
      </button>
      {status === "error" && (
        <p className="text-xs text-kuwait-red">
          تعذر الوصول إلى الموقع. تأكد من تفعيل GPS أو أرسل موقعك يدويًا عبر تطبيق الخرائط.
        </p>
      )}
    </div>
  );
};

export default ShareLocationButton;
