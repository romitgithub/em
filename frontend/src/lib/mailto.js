// Central place to configure where form submissions are emailed.
// Update RECIPIENT_EMAIL to your address.
export const RECIPIENT_EMAIL = "hello@kamalamuditam.org";

const encode = (s) => encodeURIComponent(s ?? "");

// Build a mailto: link for a Volunteer submission from the multi-step journey.
export const buildVolunteerMailto = (form) => {
  const subject = `New Ripple Maker — ${form.full_name || "Volunteer"}`;
  const lines = [
    "A new volunteer has joined the Kamala Muditam journey.",
    "",
    "— About —",
    `Name:         ${form.full_name}`,
    `Email:        ${form.email}`,
    `Mobile:       ${form.mobile}`,
    `City:         ${form.city}`,
    `Profession:   ${form.profession}`,
    `Organization: ${form.organization || "—"}`,
    "",
    "— Where their heart leads them —",
    ...(form.focus_areas?.length ? form.focus_areas.map((f) => `• ${f}`) : ["—"]),
    "",
    "— How they wish to walk alongside —",
    ...(form.contributions?.length ? form.contributions.map((c) => `• ${c}`) : ["—"]),
    "",
    `Availability: ${form.availability || "—"}`,
    "",
    "— Their story —",
    form.story || "—",
    "",
    "— Consent —",
    form.consent
      ? "Yes — believes in Restore • Rise • Ripple."
      : "No consent recorded.",
  ];
  const body = lines.join("\n");
  return `mailto:${RECIPIENT_EMAIL}?subject=${encode(subject)}&body=${encode(body)}`;
};

// Build a mailto: link for a Contact ("Start a Ripple") submission.
export const buildContactMailto = (form) => {
  const subject = `Start a Ripple — ${form.subject || "New message"}`;
  const lines = [
    "A new message has arrived from the Kamala Muditam website.",
    "",
    `Name:    ${form.name}`,
    `Email:   ${form.email}`,
    `Phone:   ${form.phone || "—"}`,
    `Subject: ${form.subject}`,
    "",
    "— Message —",
    form.message,
  ];
  const body = lines.join("\n");
  return `mailto:${RECIPIENT_EMAIL}?subject=${encode(subject)}&body=${encode(body)}`;
};

// Opens the user's email client with the composed message.
export const openMailto = (href) => {
  window.location.href = href;
};
