import  { Component } from "react";
import { userService } from "../../Services/UserServices";

export default class userRegistrationComponent extends Component{
    // Service=userService();
    
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeContactNo=this.onChangeContactNo.bind(this);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeDupPassword=this.onChangeDupPassword.bind(this);

        this.state={
            name:'',
            email:'',
            contactNo:0,
            password:'',
            dupPassword:'',
            wrongPassword:''         
        }
    }

    onChangeDupPassword(e){
        this.setState({
            dupPassword:e.target.value
        })
    }
    onChangeUsername(e){
        this.setState({
            name:e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }

    onChangeContactNo(e){
        this.setState({
            contactNo:e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }



    onSubmit(e){
        e.preventDefault();
        let Service=new userService();
        const user={
            name:this.state.name,
            password:this.state.password,
            contactNo:this.state.contactNo,
            email:this.state.email,
            dupPassword:this.state.dupPassword
        }
        if(user.dupPassword===user.password && user.password.length>5){
            Service.register(user.name, user.password, user.contactNo, user.email);//passes to the register service
            this.setState({
                wrongPassword:""
                 
            });

            this.setState({
                password:''
            });
            this.setState({
                name:''
            });
            this.setState({
                contactNo:''
            });
            this.setState({
                email:''
            });

            this.setState({
                dupPassword:''
            });

        }else if(user.password.length<5){
            this.setState({
                wrongPassword:"* Password should contain more than 5 characters. *"
                 
            });
            this.setState({
                password:''
            });
            this.setState({
                dupPassword:''
            });
        }else{
            this.setState({
                wrongPassword:"* Password is incorrect. *"
                 
            });
            this.setState({
                password:''
            });
            this.setState({
                dupPassword:''
            });
            
        }


            // console.log(user);

        // axios.post('http://localhost:5000/user/add', user)
        // .then(res=>console.log(res.data));
    }
}