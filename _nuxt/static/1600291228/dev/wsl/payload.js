__NUXT_JSONP__("/dev/wsl", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{document:{title:"Linux on Windows",description:"The alternative approach to installing Node.js on Windows using WSL.",category:"Development",position:r,toc:[{id:s,depth:p,text:t},{id:u,depth:p,text:v},{id:w,depth:r,text:x},{id:y,depth:p,text:z},{id:A,depth:p,text:B}],body:{type:"root",children:[{type:b,tag:"alert",props:{type:"warning"},children:[{type:a,value:"\nWSL 2 uses Hyper-V, a Microsoft virtualization feature only available on Windows 10 Pro, Enterprise, or Education. Hyper-V may also conflict with other types of virtualization, e.g. VirtualBox.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you are running Windows, it's worth considering the Windows Subsystem for Linux (WSL) for your development experience. The OMC application will be running in a linux production environment meaning some procedures may need to be different for Windows machines. This is not required by any means, but if you are not familiar with Linux it is the least painful way of learning an essential tool."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"WSL 1 is slower than WSL 2, but WSL 2 will require Hyper-V enabled and that you keep files in your Linux directories. Manipulating files that reside within WSL in Windows, or vice versa, have a significant performance drawback. Similarly, some of the development tools are setup to detect changes in code and automatically re-compile. If you run code that is in Windows, e.g. on your desktop, from a WSL 2 Linux terminal, it will be unable to detect file changes and lead to confusing issues."}]},{type:a,value:c},{type:b,tag:q,props:{id:s},children:[{type:b,tag:e,props:{href:"#installation",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Refer to the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fwindows\u002Fwsl\u002Finstall-win10",rel:[g,h,i],target:j},children:[{type:a,value:"Windows Subsystem for Linux Installation Guide for Windows 10"}]},{type:a,value:" as the most up-to-date installation guide. The link also refers to tutorials, FAQs, and some basic troubleshooting tips. Most errors that are possible are likely due to computer-specific issues of V"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When you reach the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fwindows\u002Fwsl\u002Finstall-win10#install-your-linux-distribution-of-choice",rel:[g,h,i],target:j},children:[{type:a,value:"Install your Linux distribution of choice"}]},{type:a,value:" part of the above guide, it's recommended to install the latest version of Ubuntu."}]},{type:a,value:c},{type:b,tag:q,props:{id:u},children:[{type:b,tag:e,props:{href:"#basic-usability",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This guide is not going to cover Linux, as we'd have no time to actually work on the project. I recommend the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fmaker.pro\u002Flinux\u002Ftutorial\u002Fbasic-linux-commands-for-beginners",rel:[g,h,i],target:j},children:[{type:a,value:"Basic Linux Commands for Beginners"}]},{type:a,value:" article by Alok Naushad for a succinct introduction to Linux. However, there are some commands that are unique to WSL."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"From a PowerShell or Command Prompt terminal in Windows you can manipulate and list your Linux distros with the "},{type:b,tag:f,props:{},children:[{type:a,value:"wsl --help"}]},{type:a,value:" command, if you type only "},{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:" it will open your default distro."}]},{type:a,value:c},{type:b,tag:"h3",props:{id:w},children:[{type:b,tag:e,props:{href:"#viewing-linux-files-in-explorer",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's possible to view the Linux directories from within Explorer. Within your Linux terminal, you can run the following command. The "},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:" being the current directory; the command works similarly to the "},{type:b,tag:f,props:{},children:[{type:a,value:"cd"}]},{type:a,value:" command, only that it opens Explorer."}]},{type:a,value:c},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"explorer.exe .\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can also double click on the address bar of explorer and type in "},{type:b,tag:f,props:{},children:[{type:a,value:"\\\\wsl$"}]},{type:a,value:" and your active distros will be shown as network folders you can interact with. Keep in mind, as was warned above, manipulating files in this manner is not ideal and should only be done occasionally."}]},{type:a,value:c},{type:b,tag:q,props:{id:y},children:[{type:b,tag:e,props:{href:"#visual-studio-code",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"VSCode has an extension called "},{type:b,tag:e,props:{href:"https:\u002F\u002Fmarketplace.visualstudio.com\u002Fitems?itemName=ms-vscode-remote.vscode-remote-extensionpack",rel:[g,h,i],target:j},children:[{type:a,value:"Remote Development"}]},{type:a,value:" that allows you to run VSCode from within WSL itself. This has benefits of using your Linux terminal, commands, and Git installation. Once you have the extension installed you can use a command similar to the "},{type:b,tag:f,props:{},children:[{type:a,value:"explorer.exe"}]},{type:a,value:" command to open up code."}]},{type:a,value:c},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,I]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"code .\n"}]}]}]},{type:a,value:c},{type:b,tag:"img",props:{src:"https:\u002F\u002Fmicrosoft.github.io\u002Fvscode-remote-release\u002Fimages\u002Fremote-wsl-open-code.gif"},children:[]},{type:a,value:c},{type:b,tag:q,props:{id:A},children:[{type:b,tag:e,props:{href:"#other-terminals",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When you aren't in your IDE you may want to use a different terminal than the one provided by your Distro. The two I recommend are the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.microsoft.com\u002Fen-us\u002Fp\u002Fwindows-terminal\u002F9n0dx20hk701?activetab=pivot:overviewtab",rel:[g,h,i],target:j},children:[{type:a,value:"Windows Terminal"}]},{type:a,value:", and "},{type:b,tag:e,props:{href:"https:\u002F\u002Fhyper.is\u002F",rel:[g,h,i],target:j},children:[{type:a,value:"Hyper"}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Windows Terminal supports easily switching between PowerShell, Command Prompt, and your Linux Distros in a sleek interface whereas the Hyper terminal is more theme-friendly."}]},{type:a,value:c},{type:b,tag:"video",props:{controls:true},children:[{type:a,value:"\n  "},{type:b,tag:"source",props:{src:".\u002Fvideos\u002Fterminal.webm",type:"video\u002Fwebm"},children:[]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fdev",path:"\u002Fen\u002Fdev\u002Fwsl",extension:".md",slug:C,createdAt:J,updatedAt:J,to:"\u002Fdev\u002Fwsl"},prev:{title:"Install & Setup",slug:"setup",to:"\u002Fdev\u002Fsetup"},next:{title:"Courses",slug:"courses",to:"\u002Fdesign\u002Fcourses"}}],fetch:[],mutations:[]}}("text","element","\n","p","a","code","nofollow","noopener","noreferrer","_blank","true",-1,"span","icon","icon-link",2,"h2",3,"installation","Installation","basic-usability","Basic Usability","viewing-linux-files-in-explorer","Viewing Linux files in Explorer","visual-studio-code","Visual Studio Code","other-terminals","Other Terminals","wsl",".","div","nuxt-content-highlight","pre","language-text","line-numbers","2020-09-16T21:20:12.772Z")));