import Image from "next/image";

const Work = () => {
  return (
    <div id="Seznam-praci" className="pt-20 mx-5">
      <div className="container work-section">
        <h2 className="section-title !mb-8">Čím se zabýváme?</h2>
        <div className="flex flex-wrap">
          <div className="work-list text-center">
            <ul className="">
              <li>Venkovní dlažby</li>
              <li>Zděné, betonové a pletivové ploty</li>
              <li>Ztracené bednění</li>
              <li>Pergoly</li>
              <li>Zemní a výkopové práce</li>
              <li>Podlahy</li>
              <li>Terénní úpravy</li>
            </ul>
          </div>
          <div className="work-list text-center">
            <ul className="">
              <li>Bazény na klíč</li>
              <li>Základové desky</li>
              <li>Bourací práce</li>
              <li>Odvoz zeminy</li>
              <li>Kanalizace, vodovody, trativody, opravy</li>
              <li>Rybníčky a vodní plochy</li>
              <li>A další!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
