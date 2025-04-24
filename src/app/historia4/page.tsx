"use client";

import { ProductosTable } from "@/components/ui/historia4/ProductosTable";
import Header from "@/components/ui/Header";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Historia4Page() {
  const [hostId, setHostId] = useState<number | null>(null);
  useEffect(() => {
    const id_usuarioHost=4
  setHostId(id_usuarioHost); 
  }, []);
  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Actividad de mi automovil</h1>
        {hostId ? (
          <>
        <ProductosTable hostId={hostId} />
          <div className="flex justify-end mt-4">
         <Link href="/">
          <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Atrás
          </button>
          </Link>
        </div>
          </>
        ) : (
          <div className="text-center py-8">Cargando información del host...</div>
        )}
      </div>
    </div>
  );
}
