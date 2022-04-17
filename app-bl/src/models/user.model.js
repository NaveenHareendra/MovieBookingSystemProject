export class user{
    id='';
    username='';
    contactNo=0;
    email='';
    password='';
    token='';
    
    setProfile(name, contact, email, id){
        this.username=name;
        this.contactNo=contact;
        this.email=email;
        this.id=id;
    }

    getUsername(){
        return this.username;
    }

    getContactNo(){
        return this.contactNo;
    }

    getEmail(){
        return this.email;
    }

    getUserId(){
        return this.id;
        
    }

}