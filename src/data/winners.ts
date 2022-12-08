import winners from '../rawdata/json_laureates.json';

// ******************** WINNERS BY GENDER ********************
const genderArr: string[] = winners.map(winner => winner.gender ? winner.gender : 'undefined')
const genderCount: any = {};

for (const gender of genderArr) {
    genderCount[gender] = genderCount[gender] ? genderCount[gender] + 1 : 1;
}

const genderData = {
    labels: [
        'Male',
        'Female',
        'Organizations'
    ],
    datasets: [{
        label: 'Number of Nobel Prizes',
        data: [genderCount['male'], genderCount['female'], genderCount['undefined']],
        backgroundColor: [
            '#8099ED',
            '#9E66BD',
            '#70B0FD'
        ],
        hoverOffset: 4
    }],
};

// ******************** WINNERS BY COUNTRY ********************
let countriesArr: string[] = [];
winners.map(winner => winner.birth?.place.country.en ? countriesArr.push( winner.birth?.place.country.en) : winner.founded?.place?.country?.en ? countriesArr.push( winner.founded?.place?.country?.en) : countriesArr.push('Unknown') )


const countryCount: any = {};

for (const country of countriesArr) {
    countryCount[country] = countryCount[country] ? countryCount[country] + 1 : 1;
}
type CountryType = {
    x: string;
    y: number | any;
}
let countryData: CountryType[] = [];

for (const [key, value] of Object.entries(countryCount)) {

    countryData.push({ x: key, y: value});
}


countryData.sort((a: { y: number; }, b: { y: number; }) => b.y - a.y);

let numOfCountries: number = 30;
const sortedCountries = countryData.splice(0, numOfCountries)



let CountryData = {
    datasets: [{
        label: 'Number of Nobel Prizes',
        data: sortedCountries,
        backgroundColor: [
            '#70B0FD',
            '#8099ED',
            '#9080D8',
            '#9E66BD',
            '#A6499C',
            '#A82978'
        ],
    }]
}

// ******************** TOP TEN WINNERS ********************
type WinnerType = {
    x: string;
    y: number;
  }
let winnersArr: WinnerType[] = [];

winners.map((winner) => {
    if ( winner.fullName !== undefined) {
        winnersArr.push({ x: winner.fullName.en, y: winner.nobelPrizes.length})
    } else {
        winnersArr.push({ x: winner.orgName.en, y: winner.nobelPrizes.length})
    }
})
winnersArr.sort((a: { y: number; }, b: { y: number; }) => b.y - a.y);

let sortedWinners = winnersArr.splice(0, 10)


// console.log(winnersArr);
let winnersData = {
  datasets: [{
      label: 'Number of Nobel Prizes',
      data: sortedWinners,
      backgroundColor: [
        '#70B0FD',
        '#8099ED',
        '#9080D8',
        '#9E66BD',
        '#A6499C',
        '#A82978'
    ],
  }]
}

export { genderData, CountryData, winnersData }



