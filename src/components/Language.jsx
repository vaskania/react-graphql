const Language = ({ language, toggleCountries }) => {
  return <div className="language-container" onClick={toggleCountries}>{language}</div>
}

export default Language