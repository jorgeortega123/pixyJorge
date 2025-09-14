import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { HelpCircle, Key } from "lucide-react";
import { InfoModal } from "./InfoModal";
import { ApiKeyModal } from "./ApiKeyModal";

export const Header: React.FC = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const checkApiKey = () => {
      const apiKey = localStorage.getItem('gemini_api_key');
      const hasKey = !!apiKey;
      setHasApiKey(hasKey);

      // Auto-open modal if no API key exists
      if (!hasKey) {
        setShowApiKeyModal(true);
      }
    };

    checkApiKey();

    // Listen for storage changes
    window.addEventListener('storage', checkApiKey);
    return () => window.removeEventListener('storage', checkApiKey);
  }, []);

  return (
    <>
      <header className="h-16 bg-gray-950 border-b border-gray-800 flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img 
              src="https://jandrea-backend.llampukaq.workers.dev/images/image/5144f7ea-546e-4bad-bca6-7d0b9f97f897" 
              alt="PixJorge Logo" 
              className="w-8 h-8 rounded-md object-cover"
            />
            <h1 className="text-xl font-semibold text-gray-100 hidden md:block">
              PixJorge
            </h1>
            <h1 className="text-xl font-semibold text-gray-100 md:hidden">
              NB Editor
            </h1>
          </div>
          <div className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
            Imágenes IA integrado Nano Banana
          </div>
          <div className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
            v1.3
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {!hasApiKey && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowApiKeyModal(true)}
              className="text-yellow-400 hover:text-yellow-300 border-yellow-400/50 hover:border-yellow-300/50"
            >
              <Key className="h-4 w-4 mr-2" />
              Configurar API Key
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowInfoModal(true)}
          >
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <InfoModal open={showInfoModal} onOpenChange={setShowInfoModal} />
      <ApiKeyModal
        open={showApiKeyModal}
        onOpenChange={setShowApiKeyModal}
        onApiKeySaved={() => {
          setHasApiKey(true);
          setShowApiKeyModal(false);
        }}
      />
    </>
  );
};
