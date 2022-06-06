import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    //key: value,
    state = {

        arrJobs: [
            { id: "abcJob1", title: "Developer", salary: "500" },
            { id: "abcJob2", title: "Tester", salary: "400" },
            { id: "abcJob3", title: "Project Manager", salary: "1000" },
        ]

    }

    addNewJob = (job) => {
        console.log("check job from parent: ", job)
        //cap nhat lai arrJobs bang cach day (push) them job moi
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job)
        this.setState({
            //arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJobs

        })

    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)

        this.setState({
            arrJobs: currentJobs
        })

    }
    //hien thi ngay sau khi goi render()
    componentDidMount() {
        console.log('>>>Run component did mount')
    }

    //sau do toi giai doan update
    componentDidUpdate(prevProps, prevState) {
        console.log(">>>did update: ", "previous state: ", prevState, "current state: ", this.state)

    }


    /*

    JSX --> return block ( tuc chi return 1 phan tu/ 1 lop boc o ngoai cung)
    */
    //component
    render() {
        console.log(">>>check state: ", this.state)
        //cách truyền function từ parent Component vào child Component như props (fuction as props), 
        //chỉ ghi tên hàm và ko thêm "( )"
        return (
            <>

                <AddComponent
                    addNewJob={this.addNewJob} />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>

        )

    }
}
export default MyComponent;