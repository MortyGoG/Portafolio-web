import { useState } from "react";

const images = [
    "src/assets/picture.jpg",
    "/img/water.jpg",
    "/img/mountain.jpg",
    "/img/city.jpg",
    "/img/forest.jpg",
    "/img/space.jpg"
  ];
  
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Galería de Imágenes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Imagen ampliada" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
}