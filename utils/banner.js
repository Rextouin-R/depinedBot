const Colors = {
  Gold: "\x1b[38;5;220m",
  Red: "\x1b[31m",
  Teal: "\x1b[38;5;51m",
  Green: "\x1b[32m",
  Neon: "\x1b[38;5;198m",
  Blue: "\x1b[34m",
  Magenta: "\x1b[95m",
  Dim: "\x1b[2m",
  RESET: "\x1b[0m"
};

const banner = `
                                                   .;:;. ${Colors.Red};
 .,.                                               ,OWMWKd:.                                                                      
 ;KXOkxc.                                       .:xXMMMMMMNd.                                                                     
  .dXMMW0;                                    :OXWMMMMMMKd:.                                                                      
    'lOWMNk:.                              .:kNMMMMMMMMWl                                                                         
      .kWMMWKx:..                       'x0XWMMMMMMMMMMM0;                       .'c,                                             
       .c0WMMMWN0d:.               ,kkodKMMMMMMMMMMMMMMMMXd.    ...       ':.   .k0Oc                                             
         .kWMMMMMMWKd'             dMMMMMMMMMMMMMMMMMMMW0xx;  :x0NKOkxdddk0o.   :XWNc                                             
          .dXMMMMMMMM0'.c:        .xMMMMMMMMMMMMMMMMMMMK,    :kc;::;;;clc:.     .k0c'  .:c' ..                                    
          '',OWMMMMMMNkl:'  .      .xNMMMMMMMMMMMMMMMMXo.   .O0:.';codo;         ,l,    l0OkKKkdo'  ,l:.                          
          :d''xWMMMMMMMXc .o0c       oWMMMMMMMMMMMMMMX:    .xWMWNNWKd;.  'cc;;. .cc.   ,cld0WMMWMx. 'oxllxko:'.                   
            .',xNMMMMMMMXkdcok,.,,.  '0MMMMMMMMMMMMMMk.    '0MMWNWW0:    .''''.  ....',:'  .dKNWWK, .cKWMMMMMNKOx, ${Colors.RESET};               
             .:clKWMMMMMMMWc . .lc.   'lldOOxddOXMWXO,     :NMMkoOXMX:       .dx:.c00KKKk;  :KMMMWKxkXMMMMMMMMMMMo             
               . .cONMMMMMK,                    'c;.       .lXMd.,dNMKl.      ,:' .''..;do.  'l;;oOXNWMMMMMMMMMMWl                
                    ;xNMMMK,                                ;XWo  .l0Kx.                          ..';coxKWMMMMMWl                
                      'dxdl'.'''..                          ,dd,     .                           :d.     .oNMMMMWc                
${Colors.Red};█▀█ █▀▀ █▀█ █░█ █▄▄ █░ █ █▄▀${Colors.RESET}; .l0NWWNKxc,'.,cc:,'..'.         .    .dx.      .xMMMMNc
${Colors.Red};█▀▄ ██▄ █▀▀ █▄█ █▄█ █▄ █ █░█${Colors.RESET};  .'ckO0XNNNNNNWMMWNOooc. .;,   .. .  .ol.     .oXMMMMWc
                       ▄▀▄   █   █▀▀▄   █▀▄   █▀▀▄   ▄▀▄   █▀▄KXo;okl.,lol,..clc::::;:;'.,;:x0x,..       ;kOkdlxXl                
                       █▀█   █   █▐█▀   █░█   █▐█▀   █░█   █▄█.;'.':'.colcc:lxooooc:,..':dOkdl:. 
                       ▀░▀   ▀   ▀░▀▀   ▀▀░   ▀░▀▀   ░▀░   ▀░░             .cxOd'      c0Kx;
                                                                 .'.      .'. 
\n${Colors.Teal}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${Colors.Teal}{${Colors.Neon}Rextouin${Colors.Teal}}${Colors.RESET};
\n${Colors.RESET}NODEGO Bot ${Colors.Blue}{ ${Colors.Neon}JS${Colors.Blue} }${Colors.RESET}
\n${Colors.Green}${'―'.repeat(60)}
\n${Colors.Gold}[+]${Colors.RESET} JOIN : ${Colors.Teal}==> 🟦 join channel : https://t.me/UNLXairdop
\n${Colors.Gold}[+]${Colors.RESET} FOLLOW : ${Colors.Teal}==> ⬛ github : https://github.com/Rextouin-R/
\n${Colors.Green}${'―'.repeat(60)}
\n${Colors.Gold}]-> ${Colors.Blue}{ ${Colors.RESET}NODEGO Extension${Colors.Neon} v1.1.4${Colors.Blue} } ${Colors.RESET}
\n${Colors.Gold}]-> ${Colors.Blue}{ ${Colors.RESET}BOT${Colors.Neon} v1.0.0${Colors.Blue} } ${Colors.RESET}
\n${Colors.Green}${'―'.repeat(60)}
                 `
export default banner;
