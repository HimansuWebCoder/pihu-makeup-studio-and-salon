import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // optional: specify weights you want
});

export default function Gallery() {
  const images = [
    "/images/pedicure1.jpg",
    "/images/manicure1.jpg",
    "/images/party1.jpg",
    "/images/bridal12.jpg",
    "/images/hair8.jpg",
    "/images/bridal4.jpg",
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Our Gallery</h2>
        <p className="text-lg text-txtcol max-w-3xl mx-auto">
          Browse through our portfolio of stunning transformations and artistic creations
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/gallery">
          <Button size="lg">View Full Gallery</Button>
        </Link>
      </div>
    </section>
  )
}
