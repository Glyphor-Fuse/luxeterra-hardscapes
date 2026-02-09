import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface TransformationProps {
  beforeImage: string;
  afterImage: string;
}

export const TransformationExplorer = ({ beforeImage, afterImage }: TransformationProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    let position = ((clientX - containerRect.left) / containerRect.width) * 100;
    position = Math.max(0, Math.min(100, position));
    
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove as any);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove as any);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove as any);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-luxe-charcoal text-luxe-white overflow-hidden">
      <div className="container px-4 mx-auto mb-16 flex flex-col md:flex-row items-end justify-between">
        <div className="max-w-2xl">
          <span className="text-luxe-bronze uppercase tracking-widest text-sm font-semibold mb-4 block">Process</span>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">Canvas to <span className="italic text-luxe-beige">Creation</span></h2>
        </div>
        <p className="md:max-w-xs text-luxe-gray mt-6 md:mt-0 font-sans text-sm leading-relaxed border-l border-luxe-bronze/30 pl-6">
          Explore the dramatic shift from raw potential to refined luxury. Drag the slider to witness the transformation.
        </p>
      </div>

      <div className="container px-4 mx-auto">
        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden cursor-ew-resize group select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onClick={(e) => {
            // Allow clicking to jump to position if not dragging
            if(!isDragging) handleMove(e);
          }}
        >
          {/* Before Image (Background) */}
          <img 
            src={beforeImage} 
            alt="Before Hardscape Transformation" 
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-4 py-2 text-xs uppercase tracking-widest text-white z-10">
            Before
          </div>

          {/* After Image (Foreground - Clipped) */}
          <div 
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={afterImage} 
              alt="After Hardscape Transformation" 
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current?.offsetWidth || '100%' }}
            />
             <div className="absolute top-8 right-8 bg-luxe-bronze/90 backdrop-blur-md px-4 py-2 text-xs uppercase tracking-widest text-white z-10">
              After
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-white z-20 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center text-luxe-charcoal transform group-hover:scale-110 transition-transform duration-300">
              <Star className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        {/* Material Details Overlay */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <h4 className="text-luxe-beige font-serif text-xl mb-2">Paving</h4>
              <p className="text-luxe-gray text-sm">Imported Turkish Travertine, French Pattern</p>
            </div>
            <div>
              <h4 className="text-luxe-beige font-serif text-xl mb-2">Masonry</h4>
              <p className="text-luxe-gray text-sm">Oklahoma Flagstone veneer with limestone caps</p>
            </div>
            <div>
              <h4 className="text-luxe-beige font-serif text-xl mb-2">Lighting</h4>
              <p className="text-luxe-gray text-sm">Low-voltage brass path lights (2700K)</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationExplorer;
