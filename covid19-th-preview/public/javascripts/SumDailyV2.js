async function getUser() {
    // console.log("kkk");
    const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all");
    // fetch() timeouts at 300 seconds in Chrome
    const data = await response.json();
    covid19data = data;
    console.log(covid19data[0].update_date)

    document.getElementById("new_case").innerHTML = covid19data[0].new_case;
    document.getElementById("new_recovered").innerHTML = covid19data[0].new_recovered;
    document.getElementById("total_case").innerHTML = covid19data[0].total_case;
    document.getElementById("total_recovered").innerHTML = covid19data[0].total_recovered;
    document.getElementById("update_date").innerHTML = covid19data[0].update_date;
    document.getElementById("new_death").innerHTML = covid19data[0].new_death;
    document.getElementById("new_case_excludeabroad").innerHTML = covid19data[0].new_case_excludeabroad;
    document.getElementById("total_case_excludeabroad").innerHTML = covid19data[0].total_case_excludeabroad;
    document.getElementById("total_death").innerHTML = covid19data[0].total_death;
}

getUser();