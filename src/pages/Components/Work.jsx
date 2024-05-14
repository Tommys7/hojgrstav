import Image from "next/image";

const Work = () => {
  return (
    <div className=" bg-white pb-20 work-section">
      <div className="container">
        <h2 className="section-title">Čím se zabýváme?</h2>
        <div className="flex flex-wrap">
          <div className="work-list text-center">
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
          <div className="work-list text-center">
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
    </div>
  );
};

export default Work;
