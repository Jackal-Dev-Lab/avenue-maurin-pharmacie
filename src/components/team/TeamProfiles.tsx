
import React from "react";

const team = [
  {
    name: "Irène Watfa",
    role: "Pharmacienne titulaire",
    expertise: "Conseils micronutrition, dermocosmétique",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Elie Watfa",
    role: "Pharmacien",
    expertise: "Médication familiale, nutrition, produits naturels",
    img: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    name: "Nathalie Dupin",
    role: "Préparatrice en pharmacie",
    expertise: "Préparation d’ordonnances, accueil et conseils",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
  },
];

export function TeamProfiles() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {team.map((member) => (
        <div key={member.name} className="flex flex-col items-center bg-white rounded-lg p-6 shadow hover-scale">
          <img src={member.img} alt={member.name} className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-pharmacy-DEFAULT" />
          <h3 className="font-semibold text-lg mb-0.5">{member.name}</h3>
          <div className="text-pharmacy-DEFAULT mb-1 text-sm">{member.role}</div>
          <div className="text-xs text-muted-foreground">{member.expertise}</div>
        </div>
      ))}
    </div>
  );
}
