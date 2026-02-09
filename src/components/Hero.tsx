import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-vista.jpg" 
          alt="Haslet Estate Luxury Hardscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-between py-12 md:py-20">
        <nav className="flex justify-between items-center">
          <div className="text-white font-serif text-2xl tracking-tighter">
            LUXE<span className="font-sans font-light text-luxe-beige">TERRA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/90">
            <a href="#portfolio" className="hover:text-luxe-beige transition-colors">Portfolio</a>
            <a href="#process" className="hover:text-luxe-beige transition-colors">Process</a>
            <a href="#team" className="hover:text-luxe-beige transition-colors">Studio</a>
            <a href="#contact" className="hover:text-luxe-beige transition-colors">Contact</a>
          </div>
          <button className="md:hidden text-white uppercase text-xs tracking-widest border border-white/30 px-4 py-2">
            Menu
          </button>
        </nav>

        <div className="max-w-4xl">
          <p className="text-white/80 text-sm md:text-base uppercase tracking-[0.2em] mb-6 animate-fade-in">
            Haslet • Southlake • Westlake
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] mb-8 animate-fade-in-up">
            Sculpting <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxe-beige to-white">Sanctuary.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
             <button className="bg-white text-luxe-charcoal px-8 py-4 text-sm uppercase tracking-widest hover:bg-luxe-beige transition-colors duration-300">
              View The Collection
            </button>
            <div className="h-px w-24 bg-white/50 hidden md:block" />
            <p className="text-white/80 text-sm max-w-xs leading-relaxed font-light">
              Elevating outdoor living through architectural precision and organic design.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 md:right-20 animate-bounce">
            <ArrowDown className="text-white/50 w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
