declare module "css-color-function" {
  type Adjusters = "red" | "green" | "blue" | "alpha" | "a" // RGBA
    | "hue" | "h" | "saturation" | "s" | "lightness" | "l" | "whiteness" | "w" | "blackness" | "b" // HSLWB;
    | "blend" | "tint" | "shade" | "contrast";

  interface Modifier {
    type: "modifier";
    value: string;
  }

  interface Number {
    type: "number";
    value: string;
  }

  interface Color {
    type: "color";
    value: string;
  }

  interface Adjuster {
    type: "function";
    name: Adjusters;
    arguments: Array<Modifier | Number | ColorFunction>;
  }

  interface ColorFunction {
    type: "function";
    name: "color";
    arguments: Array<Color | Adjuster>;
  }

  export function convert(val: string): string;

  export function parse(val: string): ColorFunction | Modifier | Number | Adjuster;
}
