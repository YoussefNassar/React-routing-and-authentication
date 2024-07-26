handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
}

function Login(props) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log("someasdasd")
        }}>
            <label>
                Email:
                <input type="text" name="email"/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Login;
