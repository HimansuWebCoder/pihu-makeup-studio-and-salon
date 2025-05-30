"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // optional: specify weights you want
});

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = [
    { id: "bridal", name: "Bridal Makeup" },
    { id: "party", name: "Party Makeup" },
    { id: "hair", name: "Hair Styling" },
    { id: "skincare", name: "Skincare" },
    // { id: "nails", name: "Nail Art" },
    { id: "pedicure", name: "Pedicure" },
    { id: "manicure", name: "Manicure" },
    // { id: "facial", name: "Facial Makeup" },
  ]

  // Generate placeholder images for each category
  const generateImages = (category: string, count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${category}-${i}`,
      src: `/images/${category}${i + 1}.jpg`,
      alt: `${category} image ${i + 1}`,
      category,
    }))
  }


  const allImages = [
    ...generateImages("bridal", 14),
    ...generateImages("party", 7),
    ...generateImages("hair", 36),
    ...generateImages("skincare", 1),
    ...generateImages("nails", 1),
    ...generateImages("pedicure", 1),
    ...generateImages("manicure", 1),
    ...generateImages("facial", 1),
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className={`${playfair.className} text-4xl font-bold text-center mb-4`}>Our Gallery</h1>
      <p className="text-lg text-center text-txtcol mb-12 max-w-3xl mx-auto">
        Browse through our portfolio of stunning transformations and artistic creations
      </p>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid w-full h-auto grid-cols-3 md:grid-cols-6 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image) => (
              <GalleryImage key={image.id} image={image} onClick={() => setSelectedImage(image.src)} />
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allImages
                .filter((image) => image.category === category.id)
                .map((image) => (
                  <GalleryImage key={image.id} image={image} onClick={() => setSelectedImage(image.src)} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative h-[80vh]">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-cover" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function GalleryImage({
  image,
  onClick,
}: {
  image: { id: string; src: string; alt: string; category: string }
  onClick: () => void
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity"
          onClick={onClick}
        >
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
        </div>
      </DialogTrigger>
    </Dialog>
  )
}
