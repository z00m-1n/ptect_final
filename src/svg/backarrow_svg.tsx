import Svg, { Path, SvgXml } from "react-native-svg";

function BackArrowSvg() {
  const xml = ` <svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M783.977545 941.168214L341.457261 503.702745l441.752464-419.037788A49.460408 49.460408 0 0 0 785.70514 15.689123 47.220933 47.220933 0 0 0 718.009006 13.193708L239.465165 467.231293a49.268453 49.268453 0 0 0-0.76782 70.767414l478.607826 473.297071c19.195501 17.595876 48.564618 16.572116 66.480419-2.303461a49.524393 49.524393 0 0 0 0.191955-67.824103" fill="#000000" /></svg>
`;
  return (
    <SvgXml xml={xml}  height='20' width='20'  />
  )
}

export default BackArrowSvg
