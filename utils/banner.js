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
        .....                  .....       
     .:ok0XXXKOxl,.        .,lxOKXXK0ko;.    
   .lKWWMMMMMMMMMNO:     'o0NMMMMMMMMMWW0l.  
  ,OWMMMXkdlox0NMMWk. ':dXWMMMNOdoodONWWMWO' 
 .OMMMWx,     .,loc..lKWWMMWKo,.     ,kWMMWk.
 :NMMMO.          .;OWWWWMXd'█▀█ █▀▀ █▀█ █░█ █▄▄ █░ █ █▄▀ ∞${Colors.Gold}
 :NMMMO'        .,xXMMMMNO:. █▀▄ ██▄ █▀▀ █▄█ █▄█ █▄ █ █░█ ${Colors.Gold}
 .OWMMWk,..   .;xXWMWWKkl.,l┏━┓ ┏━┓   ,kWMMW┏━┓ ╔═╗             ╔═╗ ┏━┓__            ┏━┓${Colors.Green}
  ,OWWWMNOxoox0NMWWWKo'..'OW┃ ┃ ┃ ┃ ┏━╻━━━┓ ┃ ┃ ┏━┓ ┏━╻━━╻━━━━┓ ┏━┓ ┃ ┏━┛  ┏━━━━╮ ╭━━╹ ┃${Colors.Blue}
   .l0WMMMMMMWMMMNOl.    .cO┃ ┗━┛ ┃ ┃ ┏━┓ ┃ ┃ ┃ ┃ ┃ ┃ ┏━┓ ┏━┓ ┃ ┃ ┃ ┃ ┗━━┓ ┃ ┏━━┛ ┃ ━━ ┃${Colors.Teal}
     .;ok0KXK0Odl,.        l┗━━━ ━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━━━━┛ ┗━━━━┛ ╰━━━━┛
\n${Colors.Teal}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${Colors.Teal}{${Colors.Neon}Rextouin${Colors.Teal}}${Colors.RESET};
\n${Colors.RESET}DEPINED Bot ${Colors.Blue}{ ${Colors.Neon}JS${Colors.Blue} }${Colors.RESET}
\n${Colors.Green}${'―'.repeat(60)}
\n${Colors.Gold}[+]${Colors.RESET} JOIN : ${Colors.Teal}==> 🟦 join channel : https://t.me/UNLXairdop
\n${Colors.Gold}[+]${Colors.RESET} FOLLOW : ${Colors.Teal}==> ⬛ github : https://github.com/Rextouin-R/
\n${Colors.Green}${'―'.repeat(60)}
\n${Colors.Gold}]-> ${Colors.Blue}{ ${Colors.RESET}DEPINED Extension${Colors.Neon} v1.1.4${Colors.Blue} } ${Colors.RESET}
\n${Colors.Gold}]-> ${Colors.Blue}{ ${Colors.RESET}BOT${Colors.Neon} v1.0.0${Colors.Blue} } ${Colors.RESET}
\n${Colors.Green}${'―'.repeat(60)}
                 `
export default banner;
