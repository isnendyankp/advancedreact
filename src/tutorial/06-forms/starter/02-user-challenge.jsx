// setup controlled input (name input)

// setup onSubmit (for now just placeholder)

// import data array (first array) from data

// create another state value (data as default)

// iterate over and display right after form (h4)

// when user submits the form add new person to the list

// Extra Challenge

// add button and setup functionality to remove user

const UserChallenge = () => {
  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
