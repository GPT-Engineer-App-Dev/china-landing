import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">Discover China</h1>
          <p className="text-2xl mt-4">A Journey Through History, Culture, and Modernity</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              China, a country with a rich history spanning thousands of years, is known for its diverse culture and rapid modernization. From ancient dynasties to modern skyscrapers, China offers a unique blend of the old and the new.
            </p>
            <img src="/placeholder.svg" alt="China" className="mt-4 w-full h-64 object-cover" />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* History Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>A Glimpse into China's History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              China's history is marked by significant events and milestones. From the construction of the Great Wall to the rise and fall of dynasties, each era has left an indelible mark on the country's cultural heritage.
            </p>
            <img src="/placeholder.svg" alt="Great Wall of China" className="mt-4 w-full h-64 object-cover" />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Culture Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Cultural Heritage</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              China is renowned for its cultural heritage, which includes traditional festivals, cuisine, arts, and crafts. The country's cultural diversity is celebrated through various forms of artistic expression and culinary delights.
            </p>
            <img src="/placeholder.svg" alt="Chinese Culture" className="mt-4 w-full h-64 object-cover" />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Modern China Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Modern China</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              In recent decades, China has undergone rapid development and technological advancements. Major cities like Beijing, Shanghai, and Shenzhen are now global hubs of innovation and economic growth.
            </p>
            <img src="/placeholder.svg" alt="Modern China" className="mt-4 w-full h-64 object-cover" />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p>Contact us at: info@discoverchina.com</p>
        <p>Follow us on social media: [Social Media Links]</p>
        <p>&copy; 2023 Discover China. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;