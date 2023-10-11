var links = new Array(10) 
links[0] = "https://anotherrealmgames.azurewebsites.net/Ps4_Godofwar.html"
links[1] = "http://anotherrealmgames.azurewebsites.net/Xbox_asc.html"
links[2] = "http://anotherrealmgames.azurewebsites.net/Nin_border.html"
links[3] = "http://anotherrealmgames.azurewebsites.net/Win_witcher.html"
links[4] = "http://anotherrealmgames.azurewebsites.net/Win_ant.html"
links[5] = "http://anotherrealmgames.azurewebsites.net/Win_sniper.html"
links[6] = "http://anotherrealmgames.azurewebsites.net/Nin_mk.html"
links[7] = "http://anotherrealmgames.azurewebsites.net/Ps4_Infamous.html"
links[8] = "http://anotherrealmgames.azurewebsites.net/Win_doom.html"
links[9] = "http://anotherrealmgames.azurewebsites.net/Xbox_cyber.html"
links[10] = "http://anotherrealmgames.azurewebsites.net/Ps4_Spiderman.html"
function go() {
    var a = Math.floor(Math.random() * links.length);
    var i = a
    location = links[i]
}
