import awards from '../rawdata/json_award.json';

// ******************** WINNERS BY CATEGORY ********************

const categoriesArr: string[] = awards.map((award: { category: { en: string; }; }) => award.category.en);
const categoryCount: any = {};

for (const category of categoriesArr) {
    categoryCount[category] = categoryCount[category] ? categoryCount[category] + 1 : 1;
}

const categoriesData = [
    { category: 'Chemistry', count: categoryCount['Chemistry']},
    { category: 'Economic Sciences', count: categoryCount['Economic Sciences']},
    { category: 'Literature', count: categoryCount['Literature']},
    { category: 'Peace', count: categoryCount['Peace']},
    { category: 'Physics', count: categoryCount['Physics']},
    { category: 'Physiology or Medicine', count: categoryCount['Physiology or Medicine']}
].map(({category, count}) => ({ x: category, y: count}))

const categoryData = {
    datasets: [{
        label: 'Number of Nobel Prizes',
        data: categoriesData,
        backgroundColor: [
          '#70B0FD',
          '#8099ED',
          '#9080D8',
          '#9E66BD',
          '#A6499C',
          '#A82978'
      ],
        hoverOffset: 6
    }]
}


// ******************** AVERAGE PRIZE SUM PER YEAR ********************
// const prizeSumArr: number[] = awards.map((award: { prizeAmount: number; }) => award.prizeAmount)
const yearArr: string[] = awards.map((award) => award.awardYear);
const yearCount: any = {};

for (const year of yearArr) {
    yearCount[year] = yearCount[year] ? yearCount[year] + 1 : 1;
}

type PrizeType = {
  x: number | string;
  y: number ;
}

let prizeArr: PrizeType[] = [];
awards.map((award) => {prizeArr.push({ x: award.awardYear, y: award.prizeAmount})
});

const tempPrize: any = {};

prizeArr.forEach(function(d: { x: number | string; y: number; }) {
  if (tempPrize.hasOwnProperty(d.x)) {
    tempPrize[d.x] = tempPrize[d.x] + d.y;
  } else {
    tempPrize[d.x] = d.y;
  }
});

const averagePrizeArr = [];

for (const value in tempPrize) {
  averagePrizeArr.push({ x: value, y: tempPrize[value]/yearCount[value] });
}

// console.log(averagePrizeArr);

// ******************** AVERAGE PRIZE SUM PER YEAR **ADJUSTED** ********************
let adjustedPrizeArr: PrizeType[] = [];
awards.map((award) => {adjustedPrizeArr.push({ x: award.awardYear, y: award.prizeAmountAdjusted})
});
const tempPrizeAdjusted: any = {};

adjustedPrizeArr.forEach(function(d: { x: number | string; y: number; }) {
  if (tempPrizeAdjusted.hasOwnProperty(d.x)) {
    tempPrizeAdjusted[d.x] = tempPrizeAdjusted[d.x] + d.y;
  } else {
    tempPrizeAdjusted[d.x] = d.y;
  }
});

const averagePrizeAdjustedArr: PrizeType[] = [];

for (const value in tempPrizeAdjusted) {
  averagePrizeAdjustedArr.push({ x: value, y: tempPrizeAdjusted[value]/yearCount[value] });
}
let AdjustedPrizeData = {
    datasets: [{
        label: 'Average prize money in SEK',
        data: averagePrizeAdjustedArr,
        backgroundColor: ['#9E66BD']
    }]
}
let PrizeData = {
  datasets: [{
      label: 'Average prize money in SEK',
      data: averagePrizeArr,
      backgroundColor: ['#A82978']
  },
  {
    label: 'Average prize money in SEK, current value.',
    data: averagePrizeAdjustedArr,
    backgroundColor: ['#9E66BD']
}], 
}


// ******************** NUMBER OF WINNERS BY CATEGORY ********************

type WinnerType = {
  laureates: string[];
  category: string;
}

const getNames = (laureates: any[] | any): string[] => {
  if (Array.isArray(laureates)) {
    return laureates.map(laureate => {
     if (laureate?.knownName?.en) {
       return laureate.knownName.en

     } else if (laureate?.orgName?.en) {
        return laureate.orgName.en
       
     } else {
      return []
     }
   })

  } else {
    return []
  }

}


let winnersArr: WinnerType[] = []
awards.map((winner) => {winnersArr.push({ laureates: getNames(winner.laureates), category: winner.category?.en})})

const count: any = {};

for (const wins of winnersArr) {
    if (wins.laureates !== undefined) {
        count[wins.category] = count[wins.category] ? count[wins.category] + wins.laureates.length : wins.laureates.length;       
    }
}

const winnersByCategoryData = {
    labels: [
      'Chemistry',
      'Economic Sciences',
      'Literature',
      'Peace',
      'Physics',
      'Physiology or Medicine'
    ],
    datasets: [{
        label: 'Number of laureates',
        data: [count['Chemistry'], count['Economic Sciences'], count['Literature'], count['Peace'], count['Physics'], count['Physiology or Medicine']],
        backgroundColor: [
            '#70B0FD',
            '#8099ED',
            '#9080D8',
            '#9E66BD',
            '#A6499C',
            '#A82978'
        ],
        hoverOffset: 3
    }],
};



export { categoryData, PrizeData, winnersByCategoryData}