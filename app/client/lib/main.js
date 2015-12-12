Accounts.onLogin(function(){
  Session.get('Role') ? "" : Session.set('Role',"R");
});
