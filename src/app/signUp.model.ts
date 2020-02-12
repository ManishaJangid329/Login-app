export class signUp{
   public Email :String ;
   public password :String ;
   public ConfirmedPassword :String ;

    constructor(email:String ,pass :String ,pass2:String )
    {
        this.Email=email ;
        this.password=pass ;
        this.ConfirmedPassword=pass2 ;
    }
}