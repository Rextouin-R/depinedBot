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
                   'dc.                                                                                                                                           ,d,                                   
;c.      .          lXOc.                                                                                                                                      .;kXx.         .       ;:.               
,00l'    cx:.       .cKWXx:.                                                               .c:                                                              .;d0WNd.       .;xo.   .cOKc                
 ;0WNOo;..dXKx:.      ,kKWWXkl,.                                                     ...,:d0W0'                                                         .'cxKWWXOc      .;o0Nk'.,lkXMXc                 
  .oKWMWKkd0NMWXOd:'. .cONMMMMWKxl;.                                             'lox0XXNMMMM0'                                                     .,cx0NMMMMW0l. .':okXWMWKdxKNMMXx'                  
    'okXWMMWMMMMMMMNKkdld0WMMMMMMMWXOdc,.    .                                .;oKMMW0dxXMMMMNx'                                          .    .,cokKWMMMMMMMWKxlox0NWMMMMMMMMMWXOd;                    
    .,o0XWMMMMMMMMMMMMMMWNWMMMMMMMMMMMMWXOxlcodl;.                           '0WWNWMWK0NMMMMMMWO,                                     .,cdocldOKWMMMMMMMMMMMMWNWMMMMMMMMMMMMMMWNKx:.                    
      .:xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNWMWXOxlc;,''....               ,KO;';kWMMMMMMMMMMM0,                        ....'',;:ldkKWMWNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXkc.                      
        ,dk0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNNXK0Okxl:'          .' .,odkNMMMMMMMMMWO'                 .;ldkO0KXNNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKOx;                        
        .l0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNk:.              ;KMMMMMMMMMMWO,              ;xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNKd'                        
          .cxKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO:.            cNMMMMMMMMMMMWkc.          ,xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKkl'                          
            ,x0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0o,.        .dWMMMMMMMMMMMMNXd.      'ckNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKk:.                           
            .;dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0o;.     .OMMMMMMMMMMMMMMMXc   'lkNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKx:.                            
               ,ok0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0o;,,,lKWMMMMMMMMMMMMMMWOclONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0kd;                               
               .:dONWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKxO000OOOO0000000dc:::::::::::::::c0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0dc.                               
                 .;okKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMkoKNNMWWMWWMWNNMWo       ...      .dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXko:.                                 
                 .;okKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMkdOokMMMMMMM0lkMWo   .;ok000Oko;.  dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXko:.                                 
                    ;dOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMkol.oXKOOO0Xk'cNWo  .kWWWMMMMMMWk. dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0x:.                                   
                    .:dOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMkokl'..   ..';OWWo  ,xxdkXMMWK00k, dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWX0xc.                                    
                       .:kXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMkoXW0d'    ,d0XKKx;;::;..dWWNl..   dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0l.                                       
                        .;ldOKXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMkoXMMWo   'xXWWWKd0WWWWl.:ool,.    dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOxo:.                                        
                             .cOXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMOo0NNXOolodk00Ok: ,kOOKo          .xMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXOo'                                             
                                .ckXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0;.,,'''''.c0k:.   .;xKkdOOOOkkkOxckMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOl'.                                               
                                 ..;:lx0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX; 'c:..lc.'0MO'.,..xWXOKX0kooolxOoOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0xlc;'.                                                 
                                      ,oOKXKKNMMMMMMMMMMMMMMMMMMMMMMMMMMMMWl.,clc.cKo.lN0xKWXkOX0xo::lkK0c;ldXMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXKXKOd;.                                                     
                                         ..;d0XXKXWMMMMMMMMMMMMMMMMMMMMMMMM0'.:llc':kxcckXWMWNKOo;cONWWWO;:lkWMMMMMMMMMMMMMMMMMMMMMMMWNKXX0xc'..                                                        
                                            ....'lxxxkXWMMWWMMMMMMMMMMMMMMMWx..;llc;':xdc::dKK0o,dNMWWNk:clxNMMMMMMMMMMMMMMMWWMMMNOxxxo,.....                                                           
                                                    .cddddkXMWNWMMMNKNMMMMMMWk'.,l::c;,cxo.;XMO,lNMNXOlclokNMMMMMMWXXMMMWNWMNOddddl.                                                                    
                                                         'loldOKKOxx0WXKNMMMMMXo'..;llc'   ;XM0::ooolccox0WMMMMWKXWKkxk0X0xoll,                                                                         
                                                            .',...;ll;'oNMMMMMMMXd;..'     ;XMWXOxddxxkKWMMMMMMWx,;cl;...,,.                                                                            
                                                                      '0WMMMMMMMMMW0d:'.   ;KNKOOkO0KNMMMMMMMMMMX:                                                                                      
                                                                      ;XMMMMMMMMMMMMMWN0xoclkOO0XWMMMMMMMMMMMMMMWl                                                                                      
                                                    ,c'               lNMMMMMMMMNKNMMMMMMMMMMMMMMMMMWWXXMMMMMMMMMd.               .:;.                                                                  
                                                .''..dXx;.            '0WMMWWMKd:dWMMMMMMMMMMMMMMMMMMWOlo0WMMMMMWo              ,dXk,.''.                                                               
                                                .:x00KWMWOc.         .cKMW0l:c. '0MMMMMMMMMMMMMMMMMMWMNl .:::dKWW0:          .;kNMMX00xl.                                                               
                                                   'lOWMMMW0l,:o;. .,kNW0c.     oWMMMMMMMMMMMMMMMMMMMMMK;     .oKWNx,.  ,lc,:OWMMMWKo,.                                                                 
                                                     .;kNMMMWWWMW0OKNMMK:      :XMMMMMMMMMMMMMMMMMMMMMMMO.      :KMMN0kONMWWWMMMW0c.                                                                    
                                                        :0WXxOWMMMMMMMMWK,    '0MMMMMMMMMMMMMMMMMMMMMMMMWx.    ,0WMMMMMMMMW0xKWKl.                                                                      
█▀█ █▀▀ █▀█ █░█ █▄▄ █░ █ █▄▀                             .,. ;KMMMMMMMMMWk:'..xWMMMMMMMMMMMMMMMMMMMMMMMMMNd...;kWMMMMMMMMMX: .,.                                                                        
█▀▄ ██▄ █▀▀ █▄█ █▄█ █▄ █ █░█                                   .cdOOOXWMMMMWNKKWMMMMMMMMMMMMMMMMMMMMMMMMMMMN00NWMMMMWX000xl'                                                                             
                            ╔═══╦══╦═══╦═══╦═══╗╔═══╦═══╗           .;lx0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKko:..                                                                                  
                            ║╔═╗╠╣╠╣╔═╗╠╗╔╗║╔═╗║║╔═╗║╔═╗║                ..cKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:'.                                                                                       
                            ║║─║║║║║╚═╝║║║║║╚═╝║║║─║║╚═╝║                 .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;                                                                                         
                            ║╚═╝║║║║╔╗╔╝║║║║╔╗╔╝║║─║║╔══╝               ..dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;                                                                                        
                            ║╔═╗╠╣╠╣║║╚╦╝╚╝║║║╚╗║╚═╝║║───               .dKOxo0WNOdlOWKdxXMXk0MNkoONKxooOXWKddOKO,                                                                                       
                  ▂▃▄▅▆▇█▓▒░╚╝─╚╩══╩╝╚═╩═══╩╝╚═╝╚═══╩╝─── ░▒▓█▇▆▅▄▃▂  .'.  .;c'  .;;.  ;d, .oc.  ,:;.  .::.  .'.                    
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━         
                 
                 `
export default banner;
