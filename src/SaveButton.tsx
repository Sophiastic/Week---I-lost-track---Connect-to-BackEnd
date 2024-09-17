const saveClick = () => {};

//may possibly be nested within the add recipe and edit recipe buttons once connected to backend?
export default function SaveButton() {
  return (
    <div>
      <button className="btn btn-success btn-sm" onClick={saveClick}>
        Save Changes
      </button>
    </div>
  );
}
