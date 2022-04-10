import { action, computed, makeObservable, observable } from "mobx";

export default class DemoStore {
  firstName: string | undefined = undefined;
  lastName: string | undefined = undefined;

  constructor(){
      makeObservable(this,
        {
            firstName : observable,
            lastName :observable,
            setFirstName:action,
            fullName : computed
        })
  }

  setFirstName = (fName : string)=>{
      this.firstName = fName;
  }
  setLastName = (lName : string)=>{
    this.lastName = lName;
  }

  get fullName(){
    return this.firstName+" "+this.lastName;
  }
  
}
