import { Hero } from "@/components/Hero";
import { TransformationExplorer } from "@/components/TransformationExplorer";
import { EditorialTeam } from "@/components/EditorialTeam";

const Index = () => {
  return (
    <div className="bg-luxe-alabaster min-h-screen selection:bg-luxe-beige selection:text-luxe-charcoal">
      <Hero />
      
      <section id="portfolio" className="bg-luxe-alabaster py-24">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-serif text-luxe-charcoal mb-4">Curated Hardscapes</h2>
          <div className="w-16 h-px bg-luxe-bronze mx-auto"></div>
        </div>
        {/* Placeholder for Gallery Component or Grid */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
                <img src="/images/project-1.jpg" alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-xs uppercase tracking-widest mb-2">Southlake</p>
                    <h3 className="text-2xl font-serif">The Obsidian Patio</h3>
                </div>
            </div>
             <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer lg:translate-y-12">
                <img src="/images/project-2.jpg" alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-xs uppercase tracking-widest mb-2">Haslet</p>
                    <h3 className="text-2xl font-serif">Manor Retaining Walls</h3>
                </div>
            </div>
             <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
                <img src="/images/project-3.jpg" alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-xs uppercase tracking-widest mb-2">Westlake</p>
                    <h3 className="text-2xl font-serif">Poolside Travertine</h3>
                </div>
            </div>
        </div>
      </section>

      <div id="process">
        <TransformationExplorer 
          beforeImage="/images/before-backyard.jpg" 
          afterImage="/images/after-backyard.jpg" 
        />
      </div>
      
      <EditorialTeam />
      
      <footer className="bg-luxe-charcoal text-white py-20 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="text-2xl font-serif tracking-tighter mb-8">LUXE<span className="font-sans font-light text-luxe-beige">TERRA</span></div>
            <p className="text-white/50 text-sm mb-8">&copy; 2024 LuxeTerra Hardscapes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;