import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-2xl text-orange-400">My Header</h1> 
        <p className="text-base">Este es un parrafo que estoy escribiendo desde el editor de textos <code>vim</code>.</p>
        <p className="py-4 px-2 text-sm italic">Segundo párrafo: este segundo párrafo lo estoy agregando para probar el despliege de la aplicación en vercel.</p> 
      </main>
    </div>
  );
}
