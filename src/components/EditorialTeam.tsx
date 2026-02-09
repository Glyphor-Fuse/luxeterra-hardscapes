import { MapPin, Phone, Mail } from "lucide-react";

export const EditorialTeam = () => {
  return (
    <section className="py-32 bg-luxe-alabaster text-luxe-charcoal" id="team">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-12">
              <span className="text-luxe-bronze uppercase tracking-widest text-xs font-bold mb-4 block">The Studio</span>
              <h2 className="text-5xl font-serif mb-8 leading-none">Architects of <br/>the Outdoors</h2>
              <p className="text-luxe-charcoal/70 leading-relaxed font-light mb-8">
                LuxeTerra was founded on a singular principle: that the exterior of a home should be as curated, thoughtful, and luxurious as its interior. We are a collective of landscape architects, master masons, and horticulturalists.
              </p>
              <p className="text-luxe-charcoal/70 leading-relaxed font-light mb-12">
                Based in Haslet, we serve the most distinguished estates in the region, bringing a blend of European classicism and modern Texas resilience to every project.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-luxe-charcoal/10 pt-8">
                <div>
                   <h3 className="font-serif text-2xl mb-1">20+</h3>
                   <p className="text-xs uppercase tracking-widest text-luxe-charcoal/50">Years Experience</p>
                </div>
                <div>
                   <h3 className="font-serif text-2xl mb-1">150+</h3>
                   <p className="text-xs uppercase tracking-widest text-luxe-charcoal/50">Estates Transformed</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm font-medium">
                <MapPin className="w-4 h-4 text-luxe-bronze" />
                <span>Serving Haslet, Southlake, Colleyville</span>
              </div>
               <div className="flex items-center gap-4 text-sm font-medium">
                <Phone className="w-4 h-4 text-luxe-bronze" />
                <span>(817) 555-0198</span>
              </div>
               <div className="flex items-center gap-4 text-sm font-medium">
                <Mail className="w-4 h-4 text-luxe-bronze" />
                <span>studio@luxeterra.com</span>
              </div>
            </div>
          </div>

          {/* Image Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8">
             <div className="space-y-4 md:space-y-8 mt-12 md:mt-24">
                <img 
                  src="/images/team-1.jpg" 
                  alt="Lead Architect" 
                  className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="text-center md:text-left">
                  <h4 className="font-serif text-xl">Elena V.</h4>
                  <p className="text-xs uppercase tracking-widest text-luxe-bronze mt-1">Lead Designer</p>
                </div>
             </div>
             <div className="space-y-4 md:space-y-8">
                <img 
                  src="/images/team-2.jpg" 
                  alt="Master Mason" 
                  className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                 <div className="text-center md:text-left">
                  <h4 className="font-serif text-xl">Marcus T.</h4>
                  <p className="text-xs uppercase tracking-widest text-luxe-bronze mt-1">Master Mason</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialTeam;
