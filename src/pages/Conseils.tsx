
import { Layout } from "@/components/layout/layout";
import { AdviceList } from "@/components/advice/AdviceList";
import { Section } from "@/components/section/Section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Conseils() {
  return (
    <Layout>
      <div className="container py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Conseils santé & guides</h1>
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="w-full flex mb-7">
            <TabsTrigger value="articles" className="flex-1">Articles</TabsTrigger>
            <TabsTrigger value="videos" className="flex-1">Vidéos</TabsTrigger>
            <TabsTrigger value="marques" className="flex-1">Focus marques</TabsTrigger>
          </TabsList>
          <TabsContent value="articles">
            <Section
              title="Nos derniers conseils bien-être"
              description="Rédigés par notre équipe pour vous accompagner toute l’année."
            >
              <AdviceList />
            </Section>
          </TabsContent>
          <TabsContent value="videos">
            <Section
              title="Vidéos conseils d’Irène & Elie"
              description="Comprendre, bien utiliser, prévenir… Visionnez nos mini-guides santé."
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded mb-3">
                <iframe
                  src="https://www.youtube.com/embed/7N-IarqP8w4"
                  title="Conseil vidéo"
                  className="w-full h-full rounded"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <a href="https://www.youtube.com/@PharmacieDeMaurin" target="_blank" className="text-pharmacy-DEFAULT underline">Voir plus sur notre chaîne</a>
              </div>
            </Section>
          </TabsContent>
          <TabsContent value="marques">
            <Section
              title="Focus partenaire santé : Oenobiol"
              description="Chaque mois, zoom sur une marque experte de notre sélection."
            >
              <div className="flex items-center gap-4 bg-pharmacy-light rounded-lg p-4">
                <img src="https://res.cloudinary.com/demo/image/upload/w_80/v1712927533/oenobiol.png" alt="Oenobiol" className="h-16 rounded shadow" />
                <div>
                  <div className="font-bold mb-1">Oenobiol</div>
                  <div className="text-muted-foreground text-sm">Compléments nutritionnels français, expert du cheveu & de la vitalité.</div>
                </div>
              </div>
            </Section>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
