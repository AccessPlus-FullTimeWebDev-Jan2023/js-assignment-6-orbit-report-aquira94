export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
//    if(this.type === isSpaceDebris){
// 	this.position = message.commands[i].value;
// 	roverStatus.position = this.position;
// 	returnStatement.results[i].roverStatus = roverStatus;
	isSpaceDebris(): boolean {
		if(this.type === "Space Debris"){
			return true
		}
		
   }

}

// TODO 3a: fix isSpaceDebris check
