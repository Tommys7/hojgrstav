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
              <li>Zděné, betonové, hliníkové a pletivové ploty</li>
              <li>Ztracené bednění</li>
              <li>Pergoly</li>
              <li>Zemní a výkopové práce</li>
              <li>Podlahy</li>
              <li>Terénní úpravy</li>
              <li>Inženýrské sítě</li>
              <li>Přípravné a dokončovací stavební práce</li>
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
              <li>Veřejné osvětlení</li>
              <li>Elektrické brány</li>
              <li>A další!</li>
            </ul>
          </div>
        </div>
        <div className="operate">
        <h4 className="text-center mt-8 section-title !mb-8">Kde působíme?</h4>
        <h4 className="text-center">Naše projekty realizujeme především v Olomouckém kraji, zejména v okrese Šumperk.</h4>
        </div>
      </div>
    </div>
  );
};

export default Work;
