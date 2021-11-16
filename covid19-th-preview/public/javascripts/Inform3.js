
function dateSearch(){
    document.getElementById("tabledata").innerHTML=`<tr class="head">
    <th scope="col"><b>&nbsp;Sorting&nbsp;</b></th>
    <th scope="col" colspan="2">&nbsp;Gender&nbsp;</th>
    <th scope="col">&nbsp;Age&nbsp;</th>
    <th scope="col">&nbsp;Nationality&nbsp;</th>
    <th scope="col">&nbsp;Job&nbsp;</th>
    <th scope="col">&nbsp;Risk&nbsp;</th>
    <th scope="col">&nbsp;Patient Type&nbsp;</th>
    <th scope="col">&nbsp;Province&nbsp;</th>
    <th scope="col">&nbsp;Update Date&nbsp;</th>
  </tr>`;

    var search = document.getElementById("inputdate").value;
    console.log(search);
    const getdata = ("https://covid19.ddc.moph.go.th/api/Cases/round-3-line-lists");
    showdata();

async function showdata(){
    const response = await fetch(getdata);
    const data = await response.json();


    var dateId  = data.data;
    console.log(dateId)

    var itemData = dateId.filter(itemData => itemData.txn_date == search);

    console.log(itemData)

    for (var i=0;i<itemData.length-1;i++)
    {
        var sexTd = itemData[i].gender;
        var ageTd = itemData[i].age_number;
        var nationTd = itemData[i].nationality;
        var jobTd = itemData[i].job;
        var riskTd = itemData[i].risk;
        var patientTd = itemData[i].patient_type;
        var provinceTd = itemData[i].province;
        var updateTxnTd = itemData[i].update_date;

        document.getElementById("tabledata").innerHTML += `<tr>
        <th scope="row">${i+1}</th>
        <td colspan="2">&nbsp; ${sexTd} &nbsp;</td>
        <td>&nbsp; ${ageTd} &nbsp;</td>
        <td>&nbsp; ${nationTd} &nbsp;</td>
        <td>&nbsp; ${jobTd} &nbsp;</td>
        <td>&nbsp; ${riskTd} &nbsp;</td>
        <td>&nbsp; ${patientTd} &nbsp;</td>
        <td>&nbsp; ${provinceTd} &nbsp;</td>
        <td>&nbsp; ${updateTxnTd} &nbsp;</td>
      </tr>`
    }
    }
}

dateSearch();