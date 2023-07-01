import {FC, memo} from 'react';

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
  transform?: string;
}

const Icon: FC<IconProps> = memo(({children, className, svgRef, transform, defaultChecked, ...props}) => (
  <svg
    className={className}
    fill="currentColor"
    ref={svgRef}
    transform={transform}
    viewBox= {!defaultChecked ? "0 0 128 128" : "0 0 24 24"}
    width={!defaultChecked ? "128" : "24"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    {children}
  </svg>
));

export default Icon;
