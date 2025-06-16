import Image from "next/image";

const servicii = [
  {
    titlu: "Lipire benzi și finisaje rigips",
    descriere: "Aplicăm benzi de îmbinare, șpacluri și finisaje fine, pentru pereți și tavane perfect netede.",
    img: "/rigips-cartoon.png", // mascotă cartoon!
  },
  {
    titlu: "Vopsire și zugrăveli interioare",
    descriere: "Oferim servicii complete de vopsire cu materiale de calitate, pentru un aspect modern și curat.",
    img: "/vopsire.png",
  },
];

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-100 to-blue-100">
        {/* Header */}
        <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-10">
          <div className="text-2xl font-bold text-blue-800">FPJoint&Painture</div>
          <nav className="space-x-6">
            <a href="#despre" className="text-blue-800 hover:underline">Despre</a>
            <a href="#servicii" className="text-blue-800 hover:underline">Servicii</a>
            <a href="#galerie" className="text-blue-800 hover:underline">Galerie</a>
            <a href="#contact" className="text-blue-800 hover:underline">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-center flex-1 text-center md:text-left py-12 px-6 gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
              Specialiști în benzi rigips și vopsitorie interioară
            </h1>
            <p className="text-lg text-gray-800 mb-6">
              Echipa <b>ConstructFix</b> e formată din profesioniști dedicați care aduc atenție la detalii și finisaje impecabile, fie că este vorba de apartamente, case sau spații de birouri.
            </p>
            <a href="#contact" className="bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition">
              Cere ofertă rapidă
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
                src="/rigips-cartoon.png"
                width={350}
                height={350}
                alt="Mascota rigips ConstructFix"
                className="rounded-2xl shadow-lg"
                priority
            />
          </div>
        </section>

        {/* Despre */}
        <section id="despre" className="py-10 px-4 bg-white shadow-inner">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Despre noi</h2>
            <p className="text-gray-800">
              Suntem specializați în <b>finisaje rigips</b> și <b>vopsitorii interioare</b>. Punem accent pe lucrul curat, respectarea termenelor și comunicare deschisă cu fiecare client.
              <br />
              Folosim doar materiale profesionale și garantăm calitate pentru fiecare lucrare executată!
            </p>
          </div>
        </section>

        {/* Servicii */}
        <section id="servicii" className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Serviciile noastre</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicii.map((srv, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                    <Image src={srv.img} width={220} height={150} alt={srv.titlu} className="rounded-xl mb-4" />
                    <h3 className="text-xl font-semibold text-blue-900">{srv.titlu}</h3>
                    <p className="text-gray-700 mt-2 text-center">{srv.descriere}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section id="galerie" className="py-12 px-4 bg-blue-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Galerie lucrări</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {/*<Image src="https://source.unsplash.com/random/200x150?gypsum" width={200} height={150} alt="Finisaj rigips" className="rounded-lg" />*/}
              {/*<Image src="https://source.unsplash.com/random/200x150?paint" width={200} height={150} alt="Vopsire" className="rounded-lg" />*/}
              <Image src="/rigips-cartoon.png" width={200} height={150} alt="Mascota cartoon" className="rounded-lg" />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 px-4 bg-white">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Contact</h2>
            <form className="bg-blue-50 rounded-xl shadow p-6 flex flex-col gap-4">
              <input type="text" placeholder="Nume" className="p-2 border rounded" />
              <input type="email" placeholder="Email" className="p-2 border rounded" />
              <textarea placeholder="Mesaj" rows={3} className="p-2 border rounded"></textarea>
              <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-900 transition">
                Trimite mesaj
              </button>
            </form>
            <div className="text-center text-gray-700 mt-4">
              <b>Telefon:</b> 07xx xxx xxx<br />
              <b>Email:</b> contact@constructfix.ro
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center p-4 mt-6">
          © {new Date().getFullYear()} ConstructFix | Toate drepturile rezervate.
        </footer>
      </div>
  );
}
