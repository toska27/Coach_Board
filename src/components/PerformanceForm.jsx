export default function PerformanceForm() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="player">Player:</label>
          <select>
            <option value="1">1</option>
          </select>
        </div>

        <div>
          <label htmlFor="location">Game:</label>
          <select>
            <option value="2">2</option>
          </select>
        </div>

        <div>
          <label htmlFor="points">Points:</label>
          <input type="number" name="points" />
        </div>

        <div>
          <label htmlFor="points">Rebounds:</label>
          <input type="number" name="rebounds" />
        </div>

        <div>
          <label htmlFor="score">Assists:</label>
          <input type="number" name="assists" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
