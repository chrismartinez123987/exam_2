export default function NYCTaxation() {
  return (
    <>
      <p>
        You pay tax as a percentage of your income in layers called tax
        brackets. As your income goes up, the tax rate on the next layer of
        income is higher. When your income jumps to a higher tax bracket, you
        do not pay the higher rate on your entire income. You pay the higher rate
        only on the part that is in the new tax bracket.
      </p>
      <p>
        For more information visit the{' '}
        <a href="https://www.irs.gov/" target="_blank" className="text-blue-600">
          IRS Website
        </a>
      </p>

      <table className="border-separate border-spacing-2 border border-slate-400 ...">
        <thead>
          <tr>
            <th className="border border-slate-300 ...">Tax rate</th>
            <th className="border border-slate-300 ..."> Single</th>
            <th className="border border-slate-300 ...">Married filing jointly</th>
            <th className="border border-slate-300 ...">
              Married filing separately
            </th>
            <th className="border border-slate-300 ...">Head of household</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 ...">10%</td>

            <td className="border border-slate-300 ...">$0 to $11,600</td>

            <td className="border border-slate-300 ...">$0 to $23,200</td>

            <td className="border border-slate-300 ...">$0 to $11,600</td>

            <td className="border border-slate-300 ...">$0 to $16,550</td>
          </tr>

          <tr>
            <td className="border border-slate-300 ...">12%</td>

            <td className="border border-slate-300 ..."> $11,601 to $47,150</td>

            <td className="border border-slate-300 ...">$23,201 to $94,300</td>

            <td className="border border-slate-300 ..."> $11,601 to $47,150</td>

            <td className="border border-slate-300 ..."> $16,551 to $63,100</td>
          </tr>

          <tr>
            <td className="border border-slate-300 ...">22%</td>

            <td className="border border-slate-300 ..."> $47,151 to $100,525</td>

            <td className="border border-slate-300 ...">$94,301 to $201,050</td>

            <td className="border border-slate-300 ...">$47,151 to $100,525</td>

            <td className="border border-slate-300 ...">$63,101 to $100,500</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">24%</td>

            <td className="border border-slate-300 ...">$100,526 to $191,950</td>

            <td className="border border-slate-300 ...">$201,051 to $383,900</td>

            <td className="border border-slate-300 ...">$100,526 to $191,950</td>

            <td className="border border-slate-300 ...">$100,501 to $191,950</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">32%</td>

            <td className="border border-slate-300 ..."> $191,951 to $243,725</td>

            <td className="border border-slate-300 ...">$383,901 to $487,450</td>

            <td className="border border-slate-300 ...">$191,951 to $243,725</td>

            <td className="border border-slate-300 ...">$191,951 to $243,700</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">35%</td>

            <td className="border border-slate-300 ..."> $243,726 to $609,350</td>

            <td className="border border-slate-300 ...">$487,451 to $731,200</td>

            <td className="border border-slate-300 ...">$243,726 to $365,600</td>

            <td className="border border-slate-300 ...">$243,701 to $609,350</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">37%</td>

            <td className="border border-slate-300 ..."> $609,351 or more</td>

            <td className="border border-slate-300 ..."> $731,201 or more</td>

            <td className="border border-slate-300 ...">$365,601 or more</td>

            <td className="border border-slate-300 ...">$609,351 or more</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
