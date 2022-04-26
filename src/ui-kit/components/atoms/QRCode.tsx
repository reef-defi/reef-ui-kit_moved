import { QRCodeSVG } from 'qrcode.react';

export interface Props {
  value: string,
  className?: string
}

const QRCode = ({
  value,
  className
}: Props): JSX.Element => (
  <div
    className={`
      uik-qr-code
      ${className || ''}
    `}
  >
    <QRCodeSVG value={value} />
  </div>
);

export default QRCode