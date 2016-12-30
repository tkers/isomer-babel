import Isomer, { Shape, Point, Color } from "isomer";

const red = new Color(160, 60, 50);
const blue = new Color(50, 60, 160);

const init = () => {

    const canvas = document.getElementById("playground");
    const iso = new Isomer(canvas);

    iso.add(Shape.Prism(Point.ORIGIN, 3, 3, 1));
    iso.add(Shape.Pyramid(Point(0, 2, 1)), red);
    iso.add(Shape.Prism(Point(2, 0, 1)), blue);
};

window.addEventListener("load", init, false);
