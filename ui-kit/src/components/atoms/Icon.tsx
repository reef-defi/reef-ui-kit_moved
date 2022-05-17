import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface Props {
  icon?: any,
  className?: string
}

const Icon = ({
  icon,
  className
}: Props): JSX.Element => (
  <FontAwesomeIcon
    className={`uik-icon ${className || ''}`}
    icon={icon}
  />
);

export default Icon
