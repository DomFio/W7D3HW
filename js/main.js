const form = document.querySelector('#SRdata')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let season = document.querySelector('#Season')
    let round = document.querySelector('#Round')

    console.log(season.value)
    console.log(round.value)
})


const getData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings  
}
console.log(getData(season.value,round.value))

// Create a constant to hold DOM Elements
const DOM_Elements = { 
    f1: '.f1-list'
}

//Create f1 list HTML
const createF1 = (position, names, nationality, sponsor, points) => {
    const html = `<table class="table">
    <thread>
        <th scope="col">Position</th>
        <th scope="col">Name</th>
        <th scope="col">Nationality</th>
        <th scope="col">Sponsor</th>
        <th scope="col">Points</th>
    </thread>
    <tbody>
        <th scope="col">${position}</th>
        <th scope="col">${names}</th>
        <th scope="col">${nationality}</th>
        <th scope="col">${sponsor}</th>
        <th scope="col">${points}</th>
    </tbody>`
    //Paste list item on document
    document.querySelector(DOM_Elements.f1).insertAdjacentHTML('beforeend', html)
}

//Create a function to loop over f1 and create each element
const loadData = async () => {
    clearData()
    const f1List = await getData(season.value, round.value);

    f1List.forEach( f1 => createF1(f1.position, f1.Driver.givenName, f1.Driver.nationality, f1.Constructors[0].name, f1.points))
}

const clearData = () =>{
    document.querySelector(DOM_Elements.f1).innerHTML = '';
}















// This works bringing in the data on the table with the button in HTML that is commented out


// const getData = async () => {  
//     let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
//     console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
//     return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
// }

// console.log(getData())
// // Create a constant to hold DOM Elements
// const DOM_Elements = { 
//     f1: '.f1-list'
// }

// //Create f1 list HTML
// const createF1 = (position, names, nationality, sponsor, points) => {
//     const html = `<table class="table id="table">
//     <thread>
//         <th scope="col">Position</th>
//         <th scope="col">Name</th>
//         <th scope="col">Nationality</th>
//         <th scope="col">Sponsor</th>
//         <th scope="col">Points</th>
//     </thread>
//     <tbody>
//         <th scope="col">${position}</th>
//         <th scope="col">${names}</th>
//         <th scope="col">${nationality}</th>
//         <th scope="col">${sponsor}</th>
//         <th scope="col">${points}</th>
//     </tbody>`

//     //Paste list item on document
//     document.querySelector(DOM_Elements.f1).insertAdjacentHTML('beforeend', html)
// }

// //Create a function to loop over f1 and create each element
// const loadData = async () => {
//     clearData()
//     const f1List = await getData();

//     f1List.forEach( f1 => createF1(f1.position, f1.Driver.givenName, f1.Driver.nationality, f1.Constructors[0].name, f1.points))
// }

// const clearData = () =>{
//     document.querySelector(DOM_Elements.f1).innerHTML = '';
// }
