import { useVotesContext } from "../store/store";

const TotalVotes = () =>{
  const { votes } = useVotesContext();
  return(
    <>
      Total Votes: {votes.totalVotes}
    </>
  )
}

export default TotalVotes;
