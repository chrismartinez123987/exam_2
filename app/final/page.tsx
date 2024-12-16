export default function Page() {
    return (
      <>
      <h1 className="text-3xl ml-5">Final Exam </h1>
      <form>
        <label htmlFor="FirstName" className="ml-5">First Name

        </label>
        <input type="text" name="FirstName" id="FirstName" className="m-5 text-black 
        bg-white "/>
         <label htmlFor="LastName" className="ml-5">Last Name

</label>
<input type="text" name="LastName" id="LastName" className="m-5 text-black 
bg-white "/>
         <br/>
         <label htmlFor="Status">Choose your filing status:</label>

<select name="Status" className="mx-5" id="Status">
  <option value="single">Single</option>
  <option value="marriedjointly">Married Filing Jointly</option>
  <option value="marriedseparately">Married Filing Separately</option>
  <option value="hoh">Head of Household</option>
  <option value="qss">Qualifying Surviving Spouse</option>
  <option value="alien">Nonresident Alien</option>
</select>
<br/>
<div className="ml-5 mt-5"> 
<label htmlFor="Dependency" className="ml-5">Can you be claimed as a dependent?
</label>
<br/>
<input type="radio" id="yes" name="choice" value="Yes"/>
<label htmlFor="yes">Yes</label><br/>
<input type="radio" id="No" name="choice" value="No"/>
<label htmlFor="No">No</label><br/>
</div>
<br/>
<div className="ml-5 mt-5"> 
<input type="checkbox" id="ExtraInfo1" name="ExtraInfo1" value="Student"/>
<label htmlFor="ExtraInfo1"> Taxpayer was over the age of 18 and a full-time student at an elgible institution</label><br/>
<input type="checkbox" id="ExtraInfo2" name="ExtraInfo2" value="Blind"/>
<label htmlFor="ExtraInfo2"> Taxpayer is blind</label><br/>
<input type="checkbox" id="ExtraInfo3" name="ExtraInfo3" value="Deceased"/>
<label htmlFor="ExtraInfo3"> Taxpayer is deceased</label><br/>
<input type="checkbox" id="ExtraInfo4" name="ExtraInfo4" value="Campaign"/>
<label htmlFor="ExtraInfo4"> Taxpayer wishes to contribute 3 dollars to the Presidential Election Campaign Fund</label><br/>
<input type="checkbox" id="ExtraInfo5" name="ExtraInfo5" value="Military"/>
<label htmlFor="ExtraInfo5"> Taxpayer or spuse serve in a combat zone during the current year</label><br/>
<input type="checkbox" id="ExtraInfo6" name="ExtraInfo6" value="Disaster"/>
<label htmlFor="ExtraInfo6"> Taxpayer was affected by a natural disaster during the current year</label><br/>
<input type="checkbox" id="ExtraInfo7" name="ExtraInfo7" value="DigitalAsset"/>
<label htmlFor="ExtraInfo7"> Taxpayer received, sold, or disposed of a digital asset in the current tax year</label><br/>
</div>
<br/>
<br/>

        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-10" type="submit">Save</button>
      </form>
      </>
    );
  }