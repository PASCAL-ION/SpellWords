
export const StatsTable = (battleStats) => {
  return (
    <table className="text-white">
      <tr>
        <th>Player 1</th>
        <th>Player 2</th>
        <th>Winner</th>
        <th>Date</th>
      </tr>
      {battleStats.map((battle) => (
        <tr key={battle.id}>
          <td>{battle.player1}</td>
          <td>{battle.player2}</td>
          <td>{battle.winner}</td>
          <td>{battle.date}</td>
        </tr>
      ))
}
    </table>
  )
}