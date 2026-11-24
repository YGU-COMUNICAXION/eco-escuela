export const courseOffer = {
  regularPrice: 6900,
  earlyBirdPrice: 5900,
  earlyBirdUntil: "30 de noviembre de 2026",
  // Exclusive deadline: midnight in Mexico City after November 30.
  earlyBirdEndsAt: "2026-12-01T00:00:00-06:00",
  maxPeople: 8,
};

export const courseCities = [
  { city: "CDMX", sessions: [
    { start: "2026-12-12", end: "2026-12-13", dates: "12 y 13 de diciembre de 2026", hours: "10:00 a 17:30 h" },
    { start: "2027-01-02", end: "2027-01-03", dates: "2 y 3 de enero de 2027", hours: "10:30 a 18:00 h" },
    { start: "2027-01-04", end: "2027-01-06", dates: "4 al 6 de enero de 2027", hours: "18:00 a 21:30 h" },
  ] },
  { city: "Guadalajara", sessions: [
    { start: "2026-12-14", end: "2026-12-16", dates: "14 al 16 de diciembre de 2026", hours: "17:00 a 20:30 h" },
    { start: "2026-12-17", end: "2026-12-18", dates: "17 y 18 de diciembre de 2026", hours: "9:30 a 17:00 h" },
    { start: "2026-12-19", end: "2026-12-20", dates: "19 y 20 de diciembre de 2026", hours: "10:30 a 18:00 h" },
  ] },
  { city: "Monterrey", sessions: [
    { start: "2027-01-07", end: "2027-01-08", dates: "7 y 8 de enero de 2027", hours: "9:30 a 17:00 h" },
    { start: "2027-01-09", end: "2027-01-10", dates: "9 y 10 de enero de 2027", hours: "10:30 a 18:00 h" },
  ] },
];

export const courseWhatsapp = (city: string, dates: string, hours: string) =>
  `https://wa.me/525530281898?text=${encodeURIComponent(`Hola, me interesa el Curso Intensivo de Oratoria y Comunicación en ${city}, del ${dates}, de ${hours}. ¿Tienen disponibilidad y cuál es la sede?`)}`;

export const formatPrice = (price: number) => `$${price.toLocaleString("es-MX")}`;
