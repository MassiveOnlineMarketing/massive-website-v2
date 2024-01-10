// CookieSettings.jsx

import { ToggleWithIcon } from '@/components/ui/input/switch';
import { ConsentKeys, CookieKeys } from './CookieConsentBanner';
import Modal from '../modal/SimpleModal';


interface CookieSettingsProps {
  consent: Record<ConsentKeys, boolean>;
  onClose: () => void;
  onSave: () => void;
  onReset: () => void;
  onConsentChange: (segment: CookieKeys, newValue: boolean) => void;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ consent, onClose, onSave, onReset, onConsentChange }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      {(["marketing", "analytics", "statistics"] as ConsentKeys[]).map(type => (
        <div key={type}>
        <ToggleWithIcon
          checked={consent[type]}
          onChange={(value) => onConsentChange(type, value)}
        />
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </div>
      ))}

      <button onClick={onSave}>Save Preferences</button>
      <button onClick={onReset}>Reset Preferences</button>
    </Modal>
  );
};

export default CookieSettings;
