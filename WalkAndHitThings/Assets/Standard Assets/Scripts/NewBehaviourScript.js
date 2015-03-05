var myLevel : String;
 
function OnCollisionEnter (myCollision : Collision) {
 if(myCollision.gameObject.name == "testArea"){
  Application.LoadLevel(myLevel);
 }
}