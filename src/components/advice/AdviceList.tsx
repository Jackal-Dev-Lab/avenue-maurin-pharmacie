
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const advices = [
  {
    slug: "bien-preparer-le-printemps",
    title: "Bien préparer le printemps",
    date: "01 mars 2025",
    author: "Irène Watfa",
    excerpt: "Allergies, manque d’énergie ? Nos conseils pour booster votre forme avant les beaux jours.",
  },
  {
    slug: "soleil-et-peau-proteger-efficacement",
    title: "Soleil : comment protéger efficacement sa peau ?",
    date: "28 avril 2025",
    author: "Elie Watfa",
    excerpt: "Solaires, hydratation… Les bons gestes pour profiter du soleil en toute sérénité.",
  },
];

export function AdviceList() {
  return (
    <div className="grid gap-5">
      {advices.map((advice) => (
        <Card key={advice.slug} className="hover-scale">
          <CardHeader>
            <CardTitle>{advice.title}</CardTitle>
            <CardDescription>
              <span className="text-xs">{advice.date} • {advice.author}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3">{advice.excerpt}</p>
            <Button asChild variant="outline" className="text-pharmacy-DEFAULT">
              <a href={`/conseils/${advice.slug}`}>Lire l’article</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
