import './Nav.css'

type Props = {
  toggleCategory: () => void;
  showCategory: boolean;
  toggleCountry: () => void;
  showCountry: boolean;
  toggleGender: () => void;
  showGender: boolean;
  toggleWinnersByCategory: () => void;
  showWinnersByCategory: boolean;
  toggleTopTen: () => void;
  showTopTen: boolean;
  toggleAverage: () => void;
  showAverage: boolean
}


const Nav = (props: Props) => {

  return (
    <nav className='nav'>
        <ul className='nav-list'>
            <li className={props.showCategory ? "selected" : ''} onClick={props.toggleCategory}>Nobel Prizes by category</li>
            <li className={props.showCountry ? "selected" : ''} onClick={props.toggleCountry}>Top 30 winners by country</li>
            <li className={props.showGender ? "selected" : ''} onClick={props.toggleGender}>Laureates by gender</li>
            <li className={props.showWinnersByCategory ? "selected" : ''} onClick={props.toggleWinnersByCategory}>Number of laureates by category</li>
            <li className={props.showTopTen ? "selected" : ''} onClick={props.toggleTopTen}>Top 10 laureates</li>
            <li className={props.showAverage ? "selected" : ''} onClick={props.toggleAverage}>Average prize money by year</li>
        </ul>
    </nav>
  )
}

export default Nav