import Homepage from "./Homepage"
import SearchResults from "./SearchResults"

function Searchpage({results,setResults}) {
  return (
    // <div>Searchpage</div>
    <>
    <Homepage setResults={setResults}/>
    <SearchResults results={results}/>
    </>
  )
}

export default Searchpage