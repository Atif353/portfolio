const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact({ name, email, message }) {
  return {
    name: name.trim().length === 0,
    email: !EMAIL_PATTERN.test(email.trim()),
    message: message.trim().length < 10,
  };
}

export function hasErrors(errors) {
  return Object.values(errors).some(Boolean);
}
