import {Injectable} from "@angular/core";

import {SocketService} from "./socket.service";
import {Player} from "@app/models";

@Injectable({
  providedIn: "root"
})
export class PlayersService{
  private _players: Player[];

  lastUpdate = -1;
  searchText = "";

  totalPlayers = 0;
  totalObservers = 0;

  constructor(private socketService: SocketService){
    try{
      this.setPlayers(JSON.parse(localStorage.getItem("playersCache")));
    }catch(err){
    }

    this.socketService.on<Player[]>("players").subscribe((data: Player[]) => this.setPlayers(data));
    this.socketService.emit("players");
  }

  get players(): Player[]{
    return this._players.filter((player) => player.callsign.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  private setPlayers(players: Player[]): void{
    this.totalPlayers = 0;
    this.totalObservers = 0;

    let timestamp = -1;
    for(let i = 0; i < players.length; i++){
      players[i].score = players[i].wins - players[i].losses;

      if(players[i].team === "Observer"){
        this.totalObservers++;
      }else{
        this.totalPlayers++;
      }

      if(players[i].timestamp > timestamp){
        timestamp = players[i].timestamp;
      }
    }

    this._players = players;
    this.lastUpdate = timestamp;

    try{
      localStorage.setItem("playersCache", JSON.stringify(this.players));
    }catch(err){
    }

    console.log("players updated");
  }
}
