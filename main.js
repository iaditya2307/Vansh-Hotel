const WHATSAPP_NUMBER = "919535047946";
const form = document.querySelector("#enquiry-form");
const status = document.querySelector("#form-status");
const roomSelect = document.querySelector("#room");

document.querySelectorAll("[data-room]").forEach((link) => {
  link.addEventListener("click", () => {
    roomSelect.value = link.dataset.room;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const checkin = String(data.get("checkin") || "");
  const checkout = String(data.get("checkout") || "");
  const guests = String(data.get("guests") || "");
  const room = String(data.get("room") || "");
  const note = String(data.get("message") || "").trim();

  if (checkout && checkin && checkout < checkin) {
    status.textContent = "Check-out should be on or after check-in.";
    return;
  }

  const message = [
    "New stay enquiry for Vansh Hotel, Bidhuna",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Check-in: ${checkin}`,
    `Check-out: ${checkout}`,
    `Guests: ${guests}`,
    `Room: ${room}`,
    `Note: ${note || "—"}`,
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  status.textContent = "WhatsApp is open with your enquiry. Tap send there so the hotel gets the notification.";
});
