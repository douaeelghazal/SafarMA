import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, QrCode, Download, Camera, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const SafarLogo = () => (
    <div className="flex flex-col items-center justify-center mb-8 z-20">
        {/* Arch & Star Emblem - Cropped to show only icon */}
        <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-lg">
            <img 
              src="/SafarMA.png" 
              alt="SafarMA Logo" 
              className="w-full h-[200%] object-cover object-top drop-shadow-2xl scale-125" 
            />
        </div>
        
        {/* Text */}
        <h1 className="font-serif text-7xl md:text-9xl font-bold text-[#C41E3A] tracking-tight drop-shadow-lg" style={{ textShadow: '2px 2px 0px white' }}>
            SafarMA
        </h1>
    </div>
);

const PhoneMockup = ({ children, title, subtitle, className = "" }: { children: React.ReactNode, title: string, subtitle?: string, className?: string }) => (
    <div className={`flex flex-col items-center ${className}`}>
        <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden mb-6 transform hover:scale-[1.02] transition-transform duration-300 ring-4 ring-gray-200/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>
            <div className="w-full h-full bg-[#FDFBF7] overflow-hidden relative">
                <div className="absolute inset-0 moroccan-pattern opacity-10 pointer-events-none"></div>
                {children}
            </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 text-center font-serif">{title}</h3>
        {subtitle && <p className="text-gray-600 text-center mt-1 font-serif italic">{subtitle}</p>}
    </div>
);

const Home = () => {
    return (
        <div className="font-sans text-gray-900 bg-[#FDFBF7]">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        background: `linear-gradient(to bottom, 
                            rgba(68, 51, 122, 0.4), 
                            rgba(212, 163, 115, 0.6)
                        ), url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2000&auto=format&fit=crop')`,
                        backgroundPosition: 'center 60%'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-0"></div>
                <div className="absolute top-0 left-0 right-0 h-32 bg-[url('/pattern-geometric.png')] opacity-20 z-10"></div>

                <div className="relative z-10 flex flex-col items-center animate-fade-in-up px-4 max-w-5xl mx-auto">
                    <SafarLogo />
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-serif text-4xl md:text-6xl text-white font-bold drop-shadow-xl mt-8 leading-tight tracking-wide"
                    >
                        Votre Compagnon IA <br/> au Cœur du Maroc
                    </motion.h2>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12"
                    >
                        <Button className="bg-[#C41E3A] hover:bg-[#A01830] text-white px-8 py-6 rounded-full text-xl shadow-xl transition-transform hover:scale-105 font-bold border-2 border-white/20">
                            Commencer l'Aventure
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 2. THREE PHONES / FEATURES OVERVIEW */}
            <section className="py-24 bg-[#FDFBF7] relative bg-[radial-gradient(#dbcfaa_1px,transparent_1px)] [background-size:20px_20px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-center items-end gap-12 md:gap-8 lg:gap-16">
                        {/* Phone 1: Planner */}
                        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
                            <PhoneMockup title="Planificateur Intelligent">
                                <div className="p-4 pt-12 flex flex-col h-full bg-[#FFFBE6]">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="font-serif font-bold text-lg text-[#C41E3A]">Mon Voyage</h4>
                                        <div className="flex gap-1"><div className="w-1 h-1 bg-black rounded-full"></div><div className="w-1 h-1 bg-black rounded-full"></div></div>
                                    </div>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 items-center">
                                                <div className="w-12 h-12 rounded-lg bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] font-bold text-xs border border-[#D4A017]/20">
                                                    {9 + i}:00
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm text-gray-800">{['Visite Médina', 'Déjeuner Tajine', 'Jardin Majorelle'][i]}</div>
                                                    <div className="text-xs text-gray-500">Marrakech</div>
                                                </div>
                                                <div className="ml-auto text-xs font-bold text-[#C41E3A]">$</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-auto mb-8 bg-[#C41E3A] text-white rounded-full p-3 flex justify-center items-center shadow-lg transform hover:scale-105 active:scale-95 transition-all w-12 h-12 mx-auto">
                                        <span className="text-2xl font-bold leading-none mb-1">+</span>
                                    </div>
                                </div>
                            </PhoneMockup>
                        </motion.div>

                        {/* Phone 2: Scanner */}
                        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="md:-mt-12">
                             <PhoneMockup title="Scanner du Patrimoine">
                                <div className="h-full bg-gray-900 relative flex flex-col">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=400&fit=crop')] bg-cover bg-center"></div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center">
                                         <div className="w-48 h-48 border-2 border-[#D4A017] rounded-lg relative">
                                            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#D4A017] -mt-1 -ml-1"></div>
                                            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#D4A017] -mt-1 -mr-1"></div>
                                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#D4A017] -mb-1 -ml-1"></div>
                                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#D4A017] -mb-1 -mr-1"></div>
                                         </div>
                                    </div>

                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-24 bg-[#FFFBE6] border-2 border-[#D4A017] rounded-xl p-3 w-48 shadow-2xl">
                                        <h5 className="font-bold text-[#C41E3A] text-sm mb-1">Tajine - Plat ancestral</h5>
                                        <p className="text-[10px] text-gray-600 leading-tight">Plat conique traditionnel permettant une cuisson à l'étouffée.</p>
                                    </div>

                                    <div className="mt-auto p-8 flex justify-center">
                                        <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-white/20 backdrop-blur-sm">
                                            <div className="w-12 h-12 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </PhoneMockup>
                        </motion.div>

                        {/* Phone 3: Chatbot */}
                        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
                             <PhoneMockup title="Chatbot Culturel">
                                <div className="p-4 pt-12 flex flex-col h-full bg-[#fcfcfc]">
                                     <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                        <div className="w-10 h-10 rounded-full bg-[#C41E3A]/10 flex items-center justify-center border border-[#C41E3A]/20">🤖</div>
                                        <div>
                                            <div className="font-bold text-sm text-[#C41E3A]">Safar Guide</div>
                                            <div className="text-[10px] text-green-600 font-bold uppercase tracking-wider">● En ligne</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-xs font-medium">
                                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 self-start max-w-[85%] text-gray-600">
                                            Bonjour! Je peux vous aider à découvrir l'histoire de ce lieu.
                                        </div>
                                        <div className="bg-[#C41E3A] text-white p-3 rounded-2xl rounded-tr-none shadow-md self-end max-w-[85%]">
                                            Raconte-moi l'histoire du Tajine! 🥘
                                        </div>
                                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 self-start max-w-[85%] text-gray-600">
                                            Bien sûr! Le Tajine est un plat emblématique d'origine ancestrale...
                                        </div>
                                    </div>
                                    <div className="mt-auto mb-4 bg-gray-50 border border-gray-200 rounded-full h-10 w-full flex items-center px-4 text-xs text-gray-400">Écrire un message...</div>
                                </div>
                            </PhoneMockup>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. FEATURE: PLANNER DETAILED */}
            <section className="py-24 bg-[#FFFBE6]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1B365D] mb-2">Le Planificateur Intelligent :</h2>
                        <p className="text-2xl text-[#1B365D] font-serif">Votre Itinéraire sur Mesure</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Card: Preferences */}
                         <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#2E5A35] relative">
                            <h3 className="text-2xl font-bold mb-8 text-[#1a1a1a]">Vos Préférences</h3>
                            
                            <div className="mb-8">
                                <label className="text-sm text-gray-500 font-bold mb-4 block">Ambiance</label>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="p-4 rounded-xl border-2 border-gray-100 text-center hover:border-gray-300 cursor-pointer">
                                        <div className="text-2xl mb-2">🧘‍♂️</div>
                                        <div className="font-bold text-sm">Détente</div>
                                    </div>
                                    <div className="p-4 rounded-xl border-2 border-[#C41E3A] bg-[#C41E3A] text-white shadow-lg transform scale-105 cursor-pointer">
                                        <div className="text-2xl mb-2">🎒</div>
                                        <div className="font-bold text-sm">Aventure</div>
                                    </div>
                                    <div className="p-4 rounded-xl border-2 border-gray-100 text-center hover:border-gray-300 cursor-pointer">
                                        <div className="text-2xl mb-2">🥘</div>
                                        <div className="font-bold text-sm">Gastro</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm text-gray-500 font-bold mb-4 block">Budget</label>
                                <div className="h-2 bg-gray-100 rounded-full w-full relative mt-2">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-[#2E5A35] rounded-full"></div>
                                    <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-[#2E5A35] rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 mt-3 font-bold uppercase tracking-wider">
                                    <span>Économique</span>
                                    <span>Moyen</span>
                                    <span>Luxe</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Card: Itinerary (Arch Shape) */}
                        <div className="relative mx-auto w-full max-w-sm">
                             <div className="bg-[#FDFBF7] pt-12 pb-8 px-8 rounded-t-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[12px] border-[#C41E3A] relative z-10 min-h-[500px]">
                                <h3 className="font-serif text-2xl font-bold text-center mb-8 text-[#1a1a1a] leading-tight">Votre Journée Type <br/> à Marrakech</h3>
                                
                                <div className="space-y-8 relative">
                                    {/* Vertical Line */}
                                    <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-200"></div>

                                    {[
                                        { time: '9h00', text: 'Petit-déjeuner sur terrasse avec vue sur l\'Atlas', icon: '☀️' },
                                        { time: '13h00', text: 'Déjeuner traditionnel chez l\'habitant', icon: '🍲' },
                                        { time: '22h00', text: 'Thé à la menthe place Jemaa el-Fna', icon: '🍵' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 items-start relative">
                                            <div className="w-7 h-7 rounded-full bg-[#FFFBE6] border-2 border-[#D4A017] flex items-center justify-center text-xs relative z-10 shrink-0 mt-1">
                                                {/* Dot content if needed */}
                                            </div>
                                            <div>
                                                <div className="font-bold text-[#1a1a1a] text-sm mb-1">{item.time} - {item.text.split(' ')[0]}...</div>
                                                <div className="text-gray-600 text-sm leading-snug">{item.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                             </div>
                             {/* Decorative Pattern Border */}
                             <div className="absolute -inset-2 border-2 border-[#D4A017] rounded-t-full z-0 pointer-events-none opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FEATURE: SCANNER DETAILED */}
            <section className="py-24 bg-[#FFFBE6] border-t border-[#D4A017]/20">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                         <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#C41E3A] mb-2">Le Scanner du Patrimoine :</h2>
                         <p className="text-2xl text-[#2E5A35] font-bold">Pointez, Scannez, Révélez</p>
                    </div>

                    <div className="max-w-4xl mx-auto relative group">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
                            <img 
                                src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1200" 
                                alt="Tajine" 
                                className="w-full h-[500px] object-cover opacity-80"
                            />
                            
                            {/* Scanning UI Elements */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/40 rounded-full animate-[ping_3s_linear_infinite]"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white rounded-full flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                    {/* Crosshair lines */}
                                    <div className="absolute top-0 bottom-0 w-full border-t border-b border-white/20 h-0"></div>
                                    <div className="absolute left-0 right-0 h-full border-l border-r border-white/20 w-0"></div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-32 -translate-y-16 w-32 h-[1px] bg-white"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-64 -translate-y-16 w-1 h-1 bg-white rounded-full"></div>
                            </div>

                            {/* Info Card Overlay */}
                            <motion.div 
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 w-80 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border-l-8 border-[#2E5A35]"
                            >
                                <h4 className="text-[#2E5A35] font-bold text-xl mb-3">Tajine - Plat ancestral</h4>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    La forme conique permet de recycler la vapeur et de cuire avec très peu d'eau. Une invention géniale née dans les montagnes de l'Atlas il y a plus de 1000 ans.
                                </p>
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-200">
                                        <img src="https://images.unsplash.com/photo-1554502758-7ab6320e6f8c?w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-200">
                                        <img src="https://images.unsplash.com/photo-1549297166-5e580e3094c9?w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        
                        <div className="mt-8 flex justify-center">
                            <Button className="bg-[#C41E3A] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:bg-[#a01830] transition-colors border-2 border-[#C41E3A]">
                                Explorez et Scannez Votre Héritage
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

             {/* 5. FEATURE: CHATBOT DETAILED */}
             <section className="py-24 bg-[#FFFBE6]">
                <div className="container mx-auto px-4">
                     <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#C41E3A] mb-4">Le Chatbot Culturel : Votre Ami Local 24h/24</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
                        {/* Interactive Chat Mockup */}
                        <div className="w-full max-w-xs md:max-w-sm bg-white rounded-[3rem] border-8 border-[#1a1a1a] shadow-2xl relative overflow-hidden aspect-[9/19]">
                             <div className="absolute inset-x-0 top-0 h-28 bg-[url('/pattern-geometric.png')] bg-[#FDFBF7] flex flex-col items-center justify-end pb-4 border-b z-10">
                                <div className="text-xs font-bold text-gray-400 mb-1">GUIDE SAFAR</div>
                                <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
                             </div>
                             
                             <div className="absolute inset-0 pt-32 p-4 bg-[#FDFBF7] space-y-4 overflow-hidden">
                                <div className="bg-[#C41E3A] text-white p-4 rounded-2xl rounded-tr-sm shadow-sm ml-auto max-w-[90%] text-sm">
                                    Où je peux manger un bon tajine pas trop cher près de Jemaa el-Fna ?
                                </div>
                                <div className="bg-[#1B365D] text-white p-4 rounded-2xl rounded-tl-sm shadow-sm mr-auto max-w-[95%] text-sm leading-relaxed relative">
                                    <div className="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-[#1B365D] border-r-[10px] border-r-transparent"></div>
                                    Je vous recommande <strong>"Chez Lamine"</strong>. C'est un petit restaurant caché, tajine d'agneau exceptionnel pour 50 dirhams.
                                </div>
                                
                                <div className="flex flex-col gap-2 mt-4">
                                    <button className="bg-[#D4A017]/20 text-[#1a1a1a] text-xs font-bold py-3 px-4 rounded-full text-left w-full hover:bg-[#D4A017]/30 transition-colors">
                                        📍 Itinéraire vers 'Chez Lamine'
                                    </button>
                                    <button className="bg-[#D4A017]/20 text-[#1a1a1a] text-xs font-bold py-3 px-4 rounded-full text-left w-full hover:bg-[#D4A017]/30 transition-colors">
                                        🥘 Choisir un tajine d'agneau
                                    </button>
                                    <button className="bg-[#D4A017]/20 text-[#1a1a1a] text-xs font-bold py-3 px-4 rounded-full text-left w-full hover:bg-[#D4A017]/30 transition-colors">
                                        ✨ Recommandations
                                    </button>
                                </div>
                             </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                            {[
                                "Supporte Français, Anglais, Arabe",
                                "Connaît l'histoire des lieux scannés",
                                "Recommandations en temps réel"
                            ].map((text, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-center gap-4 text-xl font-medium text-gray-800 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#2E5A35] flex items-center justify-center text-white font-bold text-sm shrink-0">✔</div>
                                    {text}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
             </section>

             {/* 6. HOW IT WORKS (3 STEPS) */}
             <section className="py-24 bg-[#FFFBE6]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#C41E3A] mb-20">Le Maroc en 3 étapes simples</h2>
                    
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center group">
                            <div className="w-24 h-24 mb-8 text-[#1B365D] border-4 border-[#1B365D] rounded-3xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                <Download className="w-12 h-12 stroke-[2.5]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Téléchargez SafarMA.</h3>
                            <p className="text-gray-600 font-medium">(Disponible iOS/Android).</p>
                        </div>
                        
                        <div className="flex flex-col items-center relative group">
                            {/* Dotted Lines */}
                            <div className="hidden md:flex absolute top-12 -left-1/2 w-full items-center justify-center gap-2">
                                {[1,2,3,4,5,6].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#D4A017]"></div>)}
                            </div>
                            
                            <div className="w-24 h-24 mb-8 text-[#C41E3A] border-4 border-[#C41E3A] rounded-3xl flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-300 bg-white z-10">
                                <Camera className="w-12 h-12 stroke-[2.5]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Scannez ce qui vous entoure</h3>
                            <p className="text-gray-600 font-medium">(Monuments, plats, motifs).</p>
                        </div>

                        <div className="flex flex-col items-center relative group">
                            <div className="hidden md:flex absolute top-12 -left-1/2 w-full items-center justify-center gap-2">
                                {[1,2,3,4,5,6].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#D4A017]"></div>)}
                            </div>

                            <div className="w-24 h-24 mb-8 text-[#D4A017] border-4 border-[#D4A017] rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 bg-white z-10">
                                <BookOpen className="w-12 h-12 stroke-[2.5]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Révélez l'histoire et explorez.</h3>
                        </div>
                    </div>
                </div>
             </section>

             {/* 7. TESTIMONIALS */}
             <section className="py-24 bg-[#1B365D] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ils ont voyagé avec SafarMA</h2>
                    <div className="flex justify-center gap-2 text-[#D4A017] mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" stroke="none" className="w-8 h-8" />)}
                    </div>
                    <p className="text-xl font-bold mb-20">4.9/5 note moyenne (12k avis)</p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Sophie (France)", text: "Grâce au scanner, j'ai enfin compris la signification des motifs des zelliges. C'est comme avoir un historien dans ma poche ! J'ai passé des heures à scanner chaque porte, chaque fontaine.", img: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
                            { name: "Carlos (Espagne)", text: "Le planner a compris mon mood 'aventure' et m'a emmené dans des endroits incroyables hors des sentiers battus. J'ai fait une randonnée dans l'Atlas que je n'aurais jamais trouvée tout seul.", img: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
                            { name: "Karim (Maroc)", text: "Je suis marocain et j'ai appris des choses sur mon propre pays ! SafarMA m'a reconnecté avec mon patrimoine. Bravo pour ce projet qui valorise notre culture.", img: "https://i.pravatar.cc/150?u=a048581f4e29026701d" },
                        ].map((t, i) => (
                            <div key={i} className="bg-[#1B365D] rounded-2xl p-8 border border-[#D4A017] relative hover:bg-[#234370] transition-colors">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-[#D4A017] overflow-hidden bg-gray-200">
                                     <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex justify-center gap-1 text-[#D4A017] mt-10 mb-4">
                                     {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" stroke="none" />)}
                                </div>
                                <h4 className="font-serif text-xl font-bold text-[#D4A017] mb-4">{t.name}</h4>
                                <p className="text-white/90 leading-relaxed italic text-sm">"{t.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
             </section>

             {/* 8. FINAL CTA */}
             <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2000&auto=format&fit=crop")', // Moroccan Architecture/Courtyard
                        filter: 'brightness(0.6)'
                    }}
                />
                
                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center max-w-4xl text-center">
                    <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                        Prêt à vivre le <br/> Maroc autrement ?
                    </h2>
                    <p className="text-2xl text-white/90 mb-12 font-light tracking-wide">Téléchargez maintenant.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="bg-black text-white hover:bg-gray-900 h-16 px-8 rounded-xl flex items-center gap-4 border border-gray-700 transition-transform hover:scale-105 active:scale-95 shadow-2xl">
                            <div className="text-left">
                                <div className="text-[0.7rem] uppercase tracking-wider opacity-80">Télécharger dans</div>
                                <div className="text-xl font-bold leading-none">l'App Store</div>
                            </div>
                        </Button>
                        <Button className="bg-black text-white hover:bg-gray-900 h-16 px-8 rounded-xl flex items-center gap-4 border border-gray-700 transition-transform hover:scale-105 active:scale-95 shadow-2xl">
                            <div className="text-left">
                                <div className="text-[0.7rem] uppercase tracking-wider opacity-80">DISPONIBLE SUR</div>
                                <div className="text-xl font-bold leading-none">Google Play</div>
                            </div>
                        </Button>
                    </div>
                </div>
             </section>

             {/* Footer Simple */}
        </div>
    );
};

export default Home;

