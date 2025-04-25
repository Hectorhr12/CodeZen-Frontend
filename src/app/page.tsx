import Header from "@/components/ui/Header";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <div className="px-4 py-6 md:px-8 md:py-10 lg:px-16 lg:py-12">
      <Header />

      <main className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Bienvenido a <span className="text-primary">REDIBO</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
          Tu tienda en línea para rentar autos.
        </p>
      </main>
    </div>
  );
}
