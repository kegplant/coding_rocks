import {
  Injectable
} from '@angular/core';

@Injectable()
export class AsciiArtService {

  constructor() {}
  printArt() {
    console.log(`                                                  
                          '''                     
                '.'''''''.'.' '''                 
             ''  '....:------:-...''              
              .-....-----------:/:-.'''''         
          '''........'.+syyyyyso/:///-.''         
           '.......'.os+-.....-/os//+:--.'        
          .-://+/: .s/.'''.--. '.:o+++--.'        
         sdmmmmmo..+/.' .o+yyoo' .:o+o/:-.        
        'syyyhhhs:/o/.' +yhmmhd. '-+oyoho:'       
         '...---/://+-'''/+oo+- '.:+s+smmds'      
         '......---:/o/.'' '  ''.:////osyys       
         .......--::-:/++/::::://::::::---'       
        '........--:///-:::::::-://::----.        
        '........-----:+++++++++/:::-----'        
        '........--------::::::::::::----'        
       '.........------:::::::::::::-----'        
       .///yhs:+ss:---------------------:/        
       .:+sdmdhddmy/:---------------::+sys'       
     '.-:/yhhdNMNNdhssssoososssssssyyyyy+:'       
   '.--ydhdddddmNmhssssssssyyyyyyhhhds/:---       
  '..../dddyymmddhyssosyhhyyyyyyyyhhy:--::-'      
  ..--..:o::+yysssososmhhhmdssyyyyyys---:+:.      
   ''  -:::-/oooooosohhymhhmsysyyyyyo:-:/o:-      
       oo+ooooooooosssyhyhhsyyssyyyysosshs/-      
       -+oooooooooosssssssssssssssyyyyyyhs/-      
       '/ooooooooossssssssyyysssyyyyyhhhhs/:'     
         -+osssssyyyysssyyyyyyyyyyyyyyhommdd:     
           .:osyyyyyhhyyyyyhhhyhhhhhs/./mmmd/     
               -ydmmmmdo+ddddmmms:.  -dMNmmdh.    
                :hdmmNy 'dNmmNNh'    .shMNd+:     
                -dNMMN.  hMMMMNNdo'    '/+-       
                odddy/'  '--osyyyy'               
 `);
  }
}
