import React from "https://esm.sh/react@18.3.1";

export default function Icon({ name, className = "h-5 w-5" }) {
  return <i data-lucide={name} className={className} aria-hidden="true"></i>;
}
