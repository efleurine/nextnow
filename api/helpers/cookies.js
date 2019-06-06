export const session = require("micro-cookie-session")({
  name: "session",
  keys: ["someverystringsecretstring"],
  maxAge: 24 * 60
});
