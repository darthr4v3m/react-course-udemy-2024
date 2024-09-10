import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
    return <header id="header">
        <img src={logo} alt="Logo showing money" />
        <h1>Gimme Money!</h1>
    </header>
}