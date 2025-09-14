import React, { useState, useEffect } from 'react';
import { Lightbulb, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/Button';

interface PromptSuggestionsProps {
  onPromptSelect: (prompt: string) => void;
}

const DEFAULT_PROMPTS = [
  // Estilo Fotorrealista/Hiperrealista (5)
  "Retrato fotorrealista de una mujer joven con cabello ondulado y ojos expresivos, iluminación cinematográfica",
  "Paisaje montañoso al atardecer con lago cristalino reflejando el cielo dorado, fotografía profesional",
  "Gato persa blanco durmiendo en una ventana soleada, fotografía macro con bokeh suave",
  "Astronauta caminando en la superficie de Marte, fotografía espacial hiperrealista",
  "Café parisino con croissants y flores, fotografía lifestyle con luz natural dorada",

  // Estilo Cartoon/Animado (5)
  "Dragón amigable de colores brillantes volando sobre un castillo de caricatura, estilo Pixar",
  "Perro golden retriever sonriente con gafas de sol, ilustración cartoon colorida y divertida",
  "Villa encantada con hongos gigantes y flores parlantes, estilo Disney animado",
  "Robot simpático ayudando en una cocina futurista, diseño cartoon 3D adorable",
  "Familia de pandas comiendo bambú en un bosque cartoon, colores vibrantes y tiernos",

  // Estilo Artístico/Pintura (5)
  "Jardín japonés zen con puente de bambú y flores de cerezo, estilo acuarela delicada",
  "Bailarina en movimiento con vestido fluido, pintura al óleo impresionista vibrante",
  "Bodegón con frutas tropicales y flores exóticas, estilo pintura renacentista clásica",
  "Velero navegando en aguas turquesas al atardecer, técnica de pintura marina romántica",
  "Campo de girasoles bajo cielo estrellado, estilo Van Gogh con pinceladas expresivas",

  // Estilo Fantasía/Sci-Fi (5)
  "Portal mágico dimensional con energía violeta en bosque místico, arte conceptual épico",
  "Ciudad flotante en las nubes con cascadas infinitas, arquitectura fantástica futurista",
  "Criatura bioluminiscente nadando en océano alien, arte digital de ciencia ficción",
  "Biblioteca mágica con libros flotantes y escaleras imposibles, fantasía arquitectónica",
  "Mago anciano conjurando galaxias con bastón cristalino, arte fantástico místico épico"
];

export const PromptSuggestions: React.FC<PromptSuggestionsProps> = ({
  onPromptSelect
}) => {
  const [displayedPrompts, setDisplayedPrompts] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);

  const shufflePrompts = () => {
    const shuffled = [...DEFAULT_PROMPTS].sort(() => Math.random() - 0.5);
    setDisplayedPrompts(shuffled.slice(0, 4));
  };

  useEffect(() => {
    shufflePrompts();
  }, []);

  const handlePromptClick = (prompt: string) => {
    onPromptSelect(prompt);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 hover:text-gray-200 transition-colors flex-1 text-left"
        >
          <Lightbulb className="h-4 w-4 text-yellow-400" />
          <span className="text-sm font-medium text-gray-300">
            Sugerencias de Prompts
          </span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </button>
        {isExpanded && (
          <Button
            variant="ghost"
            size="sm"
            onClick={shufflePrompts}
            className="h-6 w-6 p-0"
            title="Mostrar nuevas sugerencias"
          >
            <RefreshCw className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isExpanded && (
        <>
          <div className="grid grid-cols-1 gap-2">
            {displayedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptClick(prompt)}
                className="text-left p-3 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 rounded-lg transition-all duration-200 group"
              >
                <p className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed">
                  {prompt}
                </p>
              </button>
            ))}
          </div>

          <p className="text-xs text-gray-500 text-center">
            Haz clic en cualquier sugerencia para usarla
          </p>
        </>
      )}
    </div>
  );
};