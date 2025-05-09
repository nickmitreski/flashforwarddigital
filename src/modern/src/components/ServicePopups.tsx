import React from 'react';
import { BasePopup } from './shared/BasePopup';
import { ServiceCard } from './shared/ServiceCard';
import { brandingServices, contentServices, aiServices } from '../data/serviceData';

interface ServicePopupsProps {
  isBrandingOpen: boolean;
  isContentOpen: boolean;
  isAIOpen: boolean;
  onClose: () => void;
}

export const ServicePopups: React.FC<ServicePopupsProps> = ({
  isBrandingOpen,
  isContentOpen,
  isAIOpen,
  onClose,
}) => {
  return (
    <>
      <BasePopup
        isOpen={isBrandingOpen}
        onClose={onClose}
        title="Branding Services"
        description="Transform your brand identity with our comprehensive branding solutions"
        >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brandingServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
            />
          ))}
            </div>
      </BasePopup>

      <BasePopup
        isOpen={isContentOpen}
        onClose={onClose}
        title="Content Services"
        description="Engage your audience with compelling content that drives results"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
            />
          ))}
                    </div>
      </BasePopup>

      <BasePopup
        isOpen={isAIOpen}
        onClose={onClose}
        title="AI Solutions"
        description="Leverage cutting-edge AI technology to optimize your business processes"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
            />
          ))}
              </div>
      </BasePopup>
    </>
  );
}; 