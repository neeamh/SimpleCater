import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Define an interface for each dropdown item
interface DropdownItem {
  label: string;
  path?: string; // Use `path` instead of `href` for navigation via router.push
  onClick?: () => void; // Optional onClick handler for each item
}

// Define the prop types for the dropdown component
interface DropdownComponentProps {
  id: string;
  title: string;
  items: DropdownItem[];
  variant?: string; // Optional prop for Bootstrap variant (e.g., 'success', 'primary')
}

// Create the dropdown component
const DropdownComponent: React.FC<DropdownComponentProps> = ({
  id,
  title,
  items,
  variant = 'primary',
}) => {
  const router = useRouter();

  // Function to handle item navigation
  const handleItemClick = (path?: string, onClick?: () => void) => {
    if (onClick) {
      onClick();
    } else if (path) {
      router.push(path);
    }
  };

  return (
    <DropdownButton id={id} title={title} variant={variant}>
      {items.map((item, index) => (
        <Dropdown.Item
          key={index}
          onClick={() => handleItemClick(item.path, item.onClick)}
          style={{ cursor: 'pointer' }}
        >
          {item.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownComponent;

/*
const dropdownItems = [
  { label: 'Home', path: '/home' },
  { label: 'Profile', path: '/profile' },
  { label: 'Settings', path: '/settings' },
];
const customStyles = {
  dropdownToggle: {
    styles...
  },
  dropdownMenu: {
    styles...
  },
  dropdownItem: {
    styles...
  },
};
<DropDown items={dropdownItems} styles={customStyles} title="Custom Button Title" />
*/

