export default function AddTask({ handleAddTask }) {
  async function handleCreate(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const circulartoPlain = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(circulartoPlain);
    console.log(circulartoPlain);
    handleAddTask(circulartoPlain);
  }
  return (
    <div className="login-registration-form">
      <div className="loginSection">
        <div className="login-card signup">
          <div className="top-section">
            <div>
              <h2>Task</h2>
            </div>
            <div className="grey">Add task to your project</div>
          </div>
          <div className="login-form">
            <form action="" onSubmit={handleCreate}>
              <input
                type="hidden"
                name="taskId"
                value={Math.floor(Math.random() * 10000)}
              />
              <input type="hidden" name="status" value="created" />
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id=""
                placeholder="Title for your task"
              />
              <label htmlFor="info">Description</label>
              <input
                type="text"
                name="info"
                id="info"
                placeholder="Information on your task"
              />
              <label htmlFor="deadline">Deadline</label>
              <input type="date" name="deadline" id="deadline" />
              <div className="select-task">
                <label for="cars">Assign this task:</label>
                <select name="name" id="name">
                  <option value="" selected>
                    None
                  </option>
                  <option value="Avinav Bhattarai">Avinav Bhattarai</option>
                  <option value="Sulav Pokharel">Sulav Pokharel</option>
                  <option value="Krishna Lamsal">Krishna Lamsal</option>
                  <option value="Ankit Dahal">Ankit Dahal</option>
                </select>
              </div>
              <div className="submitbutton">
                <input
                  className="submitBtn"
                  type="submit"
                  value="Create"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
