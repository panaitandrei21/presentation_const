import Image from "next/image";
import Header from './header';

const services = [
    {
        titre: "Joints et finitions placo",
        description: "Nous appliquons les bandes de jointure, enduits et finitions fines, pour des murs et plafonds parfaitement lisses.",
        img: "/drywall_bazooka.png",
    },
    {
        titre: "Peinture et travaux intérieurs",
        description: "Nous offrons des services complets de peinture avec des matériaux de qualité, pour un aspect moderne et propre.",
        img: "/spray_paint.png",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-100 to-blue-100">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="flex flex-col md:flex-row items-center justify-center flex-1 text-center md:text-left py-12 px-6 gap-8">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
                            Spécialistes en joints placo et peinture intérieure
                        </h1>
                        <p className="text-lg text-gray-800 mb-6">
                            L&apos;équipe <strong>FPJoint et Painture</strong> est composée de professionnels dédiés qui apportent une attention aux détails et des finitions impeccables, qu&apos;il s&apos;agisse d&apos;appartements, de maisons ou d&apos;espaces de bureaux.
                        </p>
                        <a
                            href="https://wa.me/+33760399295"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Demander un devis rapide
                        </a>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <Image
                            src="/test_hero.jpg"
                            width={350}
                            height={350}
                            alt="Mascotte placo FPJoint et Painture - illustration représentant nos services"
                            className="rounded-2xl shadow-lg"
                            priority
                        />
                    </div>
                </section>

                {/* About Section */}
                <section id="apropos" className="py-10 px-4 bg-white shadow-inner">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">À propos de nous</h2>
                        <p className="text-gray-800 text-lg leading-relaxed">
                            Nous sommes spécialisés dans les <strong>finitions placo</strong> et la <strong>peinture intérieure</strong>. Nous mettons l&apos;accent sur un travail
                            propre, le respect des délais et une communication ouverte avec chaque client.
                        </p>
                        <p className="text-gray-800 text-lg leading-relaxed mt-4">
                            Nous utilisons uniquement des matériaux professionnels et garantissons la qualité pour chaque travail réalisé !
                        </p>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-12 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Nos services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((srv, idx) => (
                                <article key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                                    <Image
                                        src={srv.img}
                                        width={220}
                                        height={150}
                                        alt={`Illustration pour ${srv.titre}`}
                                        className="rounded-xl mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{srv.titre}</h3>
                                    <p className="text-gray-700 text-center leading-relaxed">{srv.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="galerie" className="py-12 px-4 bg-blue-50">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Galerie de nos travaux</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Image
                                src="/rigips-cartoon.png"
                                width={200}
                                height={150}
                                alt="Exemple de travail réalisé par l'équipe FPJoint et Painture"
                                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            />
                            {/* Add more images here when available */}
                        </div>
                        <p className="text-center text-gray-600 mt-6">
                            Plus de photos de nos réalisations seront bientôt ajoutées !
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-12 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-blue-800 mb-8">Contact</h2>
                        <div className="space-y-4">
                            <div>
                                <span className="font-semibold text-gray-700">Téléphone : </span>
                                <a
                                    href="tel:+33760399295"
                                    className="text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                >
                                    +33 7 60 39 92 95
                                </a>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Email : </span>
                                <a
                                    href="mailto:florin.panait@yahoo.com"
                                    className="text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                >
                                    florin.panait@yahoo.com
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-blue-900 text-white text-center p-4 mt-6">
                <p>© {new Date().getFullYear()} FPJoint et Painture | Tous droits réservés.</p>
            </footer>
        </div>
    );
}