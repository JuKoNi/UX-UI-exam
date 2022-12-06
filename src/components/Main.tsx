// import React, { useEffect, useRef, useState } from 'react'
// import './Main.css'
// import './Content'
// import Hero from './Hero';
// import Nav from './Nav';
// import Content from './Content';
// import AnimationPref from './AnimationPref';
// import GenderChart from './GenderChart';
// import CategoryChart from './CategoryChart';
// import CountryChart from './CountryChart';
// import WinnersChart from './WinnersChart';
// import AveragePrizeSum from './AveragePrizeSum';
// import WinnersByCategory from './WinnersByCategory';


// type Props = {}

// const Main = (props: Props) => {

//   const [showCategory, setShowCategory] = useState<boolean>(false);
//   const [showCountry, setShowCountry] = useState<boolean>(false);
//   const [showGender, setShowGender] = useState<boolean>(false);
//   const [showWinnersByCategory, setShowWinnersByCategory] = useState<boolean>(false);
//   const [showTopTen, setShowTopTen] = useState<boolean>(false);
//   const [showAverage, setShowAverage] = useState<boolean>(false);

//   // TOGGLES
//   const toggleCategory = () => {
//     setShowCategory(!showCategory);
//     setShowCountry(false);
//     setShowGender(false);
//     setShowWinnersByCategory(false);
//     setShowTopTen(false);
//     setShowAverage(false);

//     console.log('HEJHEJHEJ');
    
//   }
//   const toggleCountry = () => {
//     setShowCategory(false);
//     setShowCountry(!showCountry);
//     setShowGender(false);
//     setShowWinnersByCategory(false);
//     setShowTopTen(false);
//     setShowAverage(false);

//     console.log('HEJHEJHEJ');
    
//   }
//   const toggleGender = () => {
//     setShowCategory(false);
//     setShowCountry(false);
//     setShowGender(!showGender);
//     setShowWinnersByCategory(false);
//     setShowTopTen(false);
//     setShowAverage(false);

//     console.log('HEJHEJHEJ');
    
//   }
//   const toggleWinnersByCategory = () => {
//     setShowCategory(false);
//     setShowCountry(false);
//     setShowGender(false);
//     setShowWinnersByCategory(!showWinnersByCategory);
//     setShowTopTen(false);
//     setShowAverage(false);

//     console.log('HEJHEJHEJ');
    
//   }
//   const toggleTopTen = () => {
//     setShowCategory(false);
//     setShowCountry(false);
//     setShowGender(false);
//     setShowWinnersByCategory(false);
//     setShowTopTen(!showTopTen);
//     setShowAverage(false);

//     console.log('HEJHEJHEJ');
    
//   }
//   const toggleAverage = () => {
//     setShowCategory(false);
//     setShowCountry(false);
//     setShowGender(false);
//     setShowWinnersByCategory(false);
//     setShowTopTen(false);
//     setShowAverage(!showAverage);

//     console.log('HEJHEJHEJ');
    
//   }
    



//   return (
//     <main className='main'>
//         <Hero />
//         <AnimationPref />
//         <Nav toggleCategory={toggleCategory} toggleCountry={toggleCountry} toggleGender={toggleGender} toggleWinnersByCategory={toggleWinnersByCategory} toggleTopTen={toggleTopTen} toggleAverage={toggleAverage}/>
//         <Content />

//         {showCategory ? <CategoryChart /> : null}
//         {showCountry ? <CountryChart /> : null}
//         {showGender ? <GenderChart /> : null}
//         {showWinnersByCategory ? <WinnersByCategory /> : null }
//         {showTopTen ? <WinnersChart /> : null}
//         {showAverage ? <AveragePrizeSum /> : null}

        
        
        

//     </main>
//   )
// }

// export default Main