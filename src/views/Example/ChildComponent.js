import { render } from '@testing-library/react';
import React from 'react';
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs

        })

    }

    handleOnClickDelete = (job) => {
        console.log(">>> handleOnClickDelete: ", job)
        this.props.deleteAJob(job)

    }

    render() {

        //console.log('>>>>check props: ', this.props)
        //let name = this.props.name;
        //let age = this.props.age;

        //object destructuring:phai dat ten bien trung vs key (name, age)
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        //console.log("check conditional: ", check)

        return (
            //neu showJobs = false thi moi co nut button SHOW
            //neu showJobs = true thi moi show tat ca the trong div className="job-lists"
            //NOTE: khi dung dieu kien phai dung 1 KHOI BLOCK --> TH nay can <> </> boc cac div
            <>
                {showJobs === false ?

                    <div>
                        <button style={{ color: 'red' }}
                            onClick={() => this.handleShowHide()}>Show</button>
                    </div>

                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })

                            }
                        </div>

                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>

                }
            </>



        )

    }
}

/*const ChildComponent = (props) => {
    let { name, age, address, arrJobs } = props;
    return (

        <div className="job-lists">
            {
                arrJobs.map((item, index) => {
                    //dấu + ở if: convert từ string => number
                    if (+item.salary >= 500) //neu thoa man dieu kien moi RETURN
                    {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary} $
                            </div>
                        )

                    }

                })

            }
        </div>

    )

}*/
export default ChildComponent;