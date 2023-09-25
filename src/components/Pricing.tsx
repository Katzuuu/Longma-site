const Pricing = ({ pricing }: { pricing: any }) => {
  return (
    <div
      ref={pricing}
      className="xd:h-full bg-white flex items-center justify-center select-none"
    >
      <div className="flex w-full flex-col xd:flex-row items-center justify-center h-[90%] 2xl:h-[75%] md:gap-4">
        <div className="lg:h-[85%] bg-gray-100 pricingBox">
          <h3 className="pricing-header">Mzdy</h3>
          <div className="px-9 mt-10">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Spracovanie miezd na 1 osobu
              </p>
              <p className="text-[#4181BA] text-xs md:text-sm text-right">
                14 €
              </p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Prihláška, odhláška zamestnanca
                <br /> a zamestnávateľa SP, ZP na 1 osobu
              </p>
              <p className="text-[#4181BA] text-xs md:text-sm text-right">
                30 €
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Ukončenie PP zamestnanca, odhlásenie zo
                <br /> SP, ZP, príprava mzdového listu,
                <br /> zápočtového listu, ELDP
              </p>
              <p className="text-[#4181BA] text-xs md:text-sm text-right">
                30 €
              </p>
            </div>
          </div>
        </div>
        <div className="h-full bg-gradient-to-bl text-gray-100 from-[#4181BA] to-[#363795] pricingBox">
          <h3 className="pricing-header">Ostatné služby</h3>

          <div className="px-9 mt-10">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Zaradenie el. Komunikácie na DU
                <br />
                príprava splnomocnenia, zriadenie
                <br />
                autorizácie, registrácia DPH
              </p>
              <p className="text-gray-300 text-xs md:text-sm text-right">
                10 €
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Registrácia zamestnávateľa na daň
                <br /> zo závislej činnosti príprava
                <br />a podanie prihlášky
              </p>
              <p className="text-gray-300 text-xs md:text-sm text-right">
                10 €
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Nastavenie klienta v mzdovom software <br /> a implementačný
                proces - nahodenie
                <br /> všetkých zamestnancov, mzdových položiek
              </p>
              <p className="text-gray-300 text-xs md:text-sm text-right">
                1 € za zamestnanca
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Vypracovanie intrastátu
              </p>
              <p className="text-gray-300 text-xs md:text-sm text-right">
                10 € / položka
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Vypracovanie štatistických hlásení,
                <br /> hlásení NBS ainých výkazov
              </p>
              <p className="text-gray-300 text-xs md:text-sm text-right">
                30 € / hodina
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Vypracovanie dane z motorových vozidiel
              </p>
              <p className="text-gray-300 text-xs md:text-sm text-right">25€</p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Vypracovanie dane z nehnuteľností
              </p>
              <p className="text-gray-300 text-xs md:text-sm text-right">
                30€ / hodina
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Databáza účtovníctva účtovnej jednotky
                <br /> - odovzdanie z účtovného softwaru Pohoda
              </p>
              <p className="text-gray-300 text-xs md:text-sm text-right">
                500 €
              </p>
            </div>
          </div>
        </div>
        <div className="h-[85%] bg-gray-100 pricingBox">
          <h3 className="pricing-header">
            Spracovanie
            <br /> účtovníctva
          </h3>
          <div className="px-9 mt-10">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Počet zaúčtovaných položiek
                <br /> 1-80 ks za mesiac
              </p>
              <p className="text-[#4181BA] text-xs md:text-sm text-right">
                50 - 100 €
              </p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Počet zaúčtovaných položiek <br /> nad 100 položiek <br /> Ročná
                účtovná závierka
              </p>
              <p className="text-[#4181BA] text-xs md:text-sm text-right">
                1 € neplatca DPH
                <br /> 1,20 € platca DPH
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Vypracovanie ročnej účtovnej závierky
                <br /> - súvaha, VZaS, poznámky
                <br /> - Veľká účtovná jednotka
              </p>
              <p className="text-[#4181BA] text-xs md:text-sm text-right">
                Paušál - december,
                <br /> minimálne 500€
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] md:text-[13px]">
                Daňové priznanie <br />
                VEĽKÁ účtovná jednotka
              </p>
              <p className="text-[#4181BA] text-xs md:text-sm text-right">
                500 €
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
