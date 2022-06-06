import React from 'react';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',

    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.title === "" || this.state.salary === "") {
            alert("missing required parameter")
            return;//ko lam gi nua
        }
        console.log(">>>>> chack data input ", this.state)
        this.props.addNewJob({
            //truyen len thg cha 1 bien object(job) gom 3 phan tu (id, title, salary)
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,

        })
        //sau khi submit xong thi cac o input =""
        this.setState({
            title: "",
            salary: "",
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's Title:</label><br />
                <input type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />


                <br />
                <input type="submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}

                />
            </form>
        )
    }

}
export default AddComponent;