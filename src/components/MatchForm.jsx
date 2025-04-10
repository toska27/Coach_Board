export default function MatchForm() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Opponent:</label>
          <input type="text" name="opponent" />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <select>
            <option value="home">Home</option>
            <option value="away">Away</option>
          </select>
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" />
        </div>

        <div>
          <label htmlFor="result">Result:</label>
          <select>
            <option value="win">Win</option>
            <option value="lose">Lose</option>
          </select>
        </div>

        <div>
          <label htmlFor="score">Score:</label>
          <input type="text" name="score" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
