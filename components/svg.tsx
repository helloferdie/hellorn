import Svg, { Path } from "react-native-svg";

interface SVGProps {
  textColor?: string;
}

export function SVGPlus(props: SVGProps) {
  return (
    <Svg
      className={`h-5 w-5 ${
        props.textColor ? props.textColor : "text-gray-500"
      }`}
      fill="none"
      viewBox="0 0 20 20"
    >
      <Path
        fill="#6B7280"
        fillRule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
