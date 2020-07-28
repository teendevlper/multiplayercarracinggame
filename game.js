class Game{
    constructor(){

    }
getgameState(){
    var gmstateref = database.ref('gameState');
    gmstateref.on("value", function(data){
         gamestate = data.val();
    } );
  }
updateGameState(state){
    var GameStateREF = database.ref('/');
    GameStateREF.update({
       gameState : state
    });
}
startGame(){
    if(gamestate === 0){
        player = new Player();
        player.getPlayerCount();
        form = new Form();
        form.display();
    }
}
playGame(){
 form.hide();
 text("Game has started", 200,200);
 Player.getallPlayersInfo();
 if(allplayers !== undefined){
    var positiony = 120;
    for(var plr in allplayers){
       if(plr === "player" + player.index){
           fill("red");
       }else{
           fill("black");
       }
       text(allplayers[plr].playername + ":" +allplayers[plr].distance, 100, positiony);
       positiony = positiony + 20;
    }   
  }
  if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance = player.distance + 20;
      player.updatePlayerInfo();
  }
 }
}