import { useVotesContext } from "../store/store"
import './TypeVotes.css'

const TypeVotes = () => {
  const { votes } = useVotesContext();
  const entries = Object.entries(votes);
  console.log(entries);

  return(
    <div className="gap">
    {entries.map((entrie)=>{
        return <div className="individulaEntrie" key={entrie}>{entrie}</div>;
      })}
   </div>
  )
}

export default TypeVotes;
