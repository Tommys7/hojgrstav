import Image from "next/image";

const Work = () => {
  return (
    <div className="container mb-16">
      <h2 className="section-title">Čím se zabýváme?</h2>
      <div className="flex">
        <div className="w-50 text-center">
          <ul className="">
            <li>Venkovní dlažby</li>
            <li>Zděné, Betonové a pletivové ploty</li>
            <li>Ztracené bednění</li>
            <li>Pergoly</li>
            <li>Zemní a výkopové práce</li>
            <li>Podlahy</li>
            <li>Terénní úpravy</li>
          </ul>
        </div>
        <div className="w-50 text-center">
          <ul className="">
            <li>Montáž bazénů</li>
            <li>Základové desky</li>
            <li>Bourací práce</li>
            <li>Odvoz zeminy</li>
            <li>Kanalizace, vodovody</li>
            <li>Rybníčky a vodní plochy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
