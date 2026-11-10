import { topics } from "@/data/contact";
import { profile } from "@/data/site";
import { useContactForm } from "@/features/contact/hooks/useContactForm";
import { Button } from "@/shared/components/ui/Button";
import styles from "./ContactForm.module.css";

function Field({ label, error, message, children }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      {children}
      {error ? <span className={styles.error}>{message}</span> : null}
    </label>
  );
}

export function ContactForm() {
  const { values, errors, status, setField, handleSubmit, reset } = useContactForm();
  const trimmedName = values.name.trim();

  return (
    <div className={styles.card}>
      {status === "sent" ? (
        <div className={styles.success} role="status">
          <span className={styles.check} aria-hidden="true">
            ✓
          </span>
          <h2 className={styles.successTitle}>Thanks, {trimmedName}.</h2>
          <p className={styles.successText}>
            Your message is on its way. I'll reply to {values.email.trim()} — or write to {profile.email} directly if it's urgent.
          </p>
          <Button variant="outline" size="xs" type="button" onClick={reset}>
            Write another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <div className={styles.group}>
            <span className={styles.label}>I'm reaching out about</span>
            <div className={styles.topics} role="radiogroup" aria-label="Topic">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  role="radio"
                  aria-checked={values.topic === topic}
                  className={values.topic === topic ? `${styles.topic} ${styles.selected}` : styles.topic}
                  onClick={() => setField("topic", topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.pair}>
            <Field label="Your name" error={errors.name} message="Please add your name.">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={(event) => setField("name", event.target.value)}
                placeholder="Enter name"
                autoComplete="name"
                className={errors.name ? `${styles.input} ${styles.invalid}` : styles.input}
              />
            </Field>
            <Field label="Email" error={errors.email} message="Please enter a valid email.">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={(event) => setField("email", event.target.value)}
                placeholder="Enter email"
                autoComplete="email"
                className={errors.email ? `${styles.input} ${styles.invalid}` : styles.input}
              />
            </Field>
          </div>
          <Field label="Message" error={errors.message} message="A short message helps me reply properly.">
            <textarea
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) => setField("message", event.target.value)}
              placeholder="Tell me about the role, product or problem you're working on."
              className={errors.message ? `${styles.textarea} ${styles.invalid}` : styles.textarea}
            />
          </Field>
          <input type="text" name="website" className={styles.honey} tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className={styles.footer}>
            <span className={status === "error" ? `${styles.note} ${styles.noteError}` : styles.note} aria-live="polite">
              {status === "error"
                ? `Something went wrong sending that. Please try again or email ${profile.email}.`
                : "Sent securely by email to my inbox."}
            </span>
            <Button type="submit" arrow="→" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
