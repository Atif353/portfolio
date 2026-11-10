import { useCallback, useState } from "react";
import { topics } from "@/data/contact";
import { hasErrors, validateContact } from "../utils/validation";

const emptyValues = () => ({ name: "", email: "", topic: topics[0], message: "" });

export function useContactForm() {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const setField = useCallback((field, value) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: false }));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const nextErrors = validateContact(values);
      if (hasErrors(nextErrors)) {
        setErrors(nextErrors);
        return;
      }

      const website = event.currentTarget.elements.website?.value ?? "";
      setStatus("sending");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, website }),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus("sent");
      } catch {
        setStatus("error");
      }
    },
    [values],
  );

  const reset = useCallback(() => {
    setValues(emptyValues());
    setErrors({});
    setStatus("idle");
  }, []);

  return { values, errors, status, setField, handleSubmit, reset };
}
