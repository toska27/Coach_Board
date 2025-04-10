export default function PlayerForm() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label htmlFor="surname">Surname:</label>
          <input type="text" name="surname" />
        </div>

        <div>
          <label htmlFor="number">Jersey number:</label>
          <input type="number" name="number" />
        </div>

        <div>
          <label htmlFor="position">Position:</label>
          <select>
            <option value="pg">PG</option>
            <option value="sg">SG</option>
            <option value="sf">SF</option>
            <option value="pf">PF</option>
            <option value="c">C</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
