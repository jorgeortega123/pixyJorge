import React, { useState, useEffect } from 'react';
import { Lightbulb, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/Button';

interface PromptSuggestionsProps {
  onPromptSelect: (prompt: string) => void;
}

const DEFAULT_PROMPTS = [
  "Un sereno paisaje montañoso al atardecer con un lago cristalino reflejando el cielo dorado",
  "Retrato fotorrealista de una mujer joven con cabello ondulado y ojos expresivos, iluminación cinematográfica",
  "Gato naranja durmiendo en una ventana soleada con plantas verdes alrededor, estilo acuarela suave",
  "Ciudad futurista con rascacielos brillantes y coches voladores, estilo cyberpunk neón",
  "Bosque encantado con árboles antiguos, hongos luminosos y mariposas mágicas flotando",
  "Playa tropical paradisíaca con palmeras, arena blanca y agua turquesa cristalina",
  "Astronauta explorando un planeta alienígena con dos lunas en el cielo violeta",
  "Café acogedor de París con mesas al aire libre, croissants y flores en las ventanas",
  "Dragón majestuoso volando sobre un castillo medieval en las montañas nevadas",
  "Jardín japonés zen con puente de bambú, koi nadando y flores de cerezo cayendo",
  "Robot humanoide amigable trabajando en un laboratorio lleno de tecnología avanzada",
  "Casa de campo inglesa con jardín de rosas, chimenea humeante y cielo nublado",
  "Ballena jorobada saltando del océano azul profundo con rayos de sol atravesando el agua",
  "Mercado colorido marroquí con especias, telas vibrantes y arquitectura tradicional",
  "Tren de vapor vintage cruzando un puente de piedra sobre un valle verde exuberante",
  "Biblioteca antigua con estanterías altas, escaleras de madera y luz dorada filtrándose",
  "Águila dorada volando sobre cañones rocosos con formaciones geológicas dramáticas",
  "Festival de linternas nocturno con miles de luces flotando en el cielo estrellado",
  "Cocina rústica italiana con pasta fresca, tomates maduros y hierbas aromáticas",
  "Aurora boreal bailando sobre un bosque de pinos cubiertos de nieve brillante"
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