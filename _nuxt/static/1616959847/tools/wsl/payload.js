__NUXT_JSONP__("/tools/wsl", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{document:{slug:p,description:"The alternative approach to installing Node.js on Windows using WSL.",title:"Linux on Windows",category:"Tools",version:1,toc:[],body:{type:"root",children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For Windows users it's worth considering the Windows Subsystem for Linux (WSL) for your development experience. The OMC application will be running in a Linux production environment meaning some operations may need to be different for other operating systems. The guides will attempt to be thorough, but some Windows-only workarounds may be overlooked. It can be said with complete confidence that Windows will support running the application, but some occasional weirdness may need to be rectified using a quick Google search."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you are not familiar with Linux, WSL is also a great way of learning this essential skill."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Windows Subsystem for Linux comes in two flavors, WSL v1 or WSL v2. Unless some installation issue is encountered, it's recommended to install WSL v2 as it simplifies the Docker installation."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{type:"warning"},children:[{type:a,value:c},{type:b,tag:g,props:{className:[h,i]},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Manipulating files that reside within WSL from Windows, or vice versa, have significant performance drawbacks. Similarly, some of the development tools are setup to detect changes in code and automatically re-compile. If you run code that is in Windows, e.g. on your desktop, from a WSL 2 Linux terminal, it will be unable to detect file changes and lead to confusing issues. It's recommended if you use WSL you also use Git for WSL, the VSCode WSL extension, and keep your code in the WSL home directory."}]},{type:a,value:c}]},{type:a,value:r},{type:b,tag:g,props:{className:[h,i]},children:[{type:a,value:c},{type:b,tag:o,props:{id:"installation"},children:[{type:b,tag:f,props:{href:"#installation"},children:[{type:a,value:"Installation"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Refer to the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fwindows\u002Fwsl\u002Finstall-win10",rel:[j,k,l],target:m},children:[{type:a,value:"Windows Subsystem for Linux Installation Guide for Windows 10"}]},{type:a,value:" for the installation. The link also refers to tutorials, FAQs, and some basic troubleshooting tips. Most issues encountered are likely due to Virtualization needing to be enabled (or in some cases, disabled) on your machine."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When you reach the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fwindows\u002Fwsl\u002Finstall-win10#install-your-linux-distribution-of-choice",rel:[j,k,l],target:m},children:[{type:a,value:"Install your Linux distribution of choice"}]},{type:a,value:" part of the above guide, it's recommended to install the latest version of Ubuntu. You can install either "},{type:b,tag:e,props:{},children:[{type:a,value:"Ubuntu 20.04"}]},{type:a,value:", which is the latest as of writing this guide, or the generic "},{type:b,tag:e,props:{},children:[{type:a,value:"Ubuntu"}]},{type:a,value:" item from the store. The latter will always update to the latest LTS release of Ubuntu for you."}]},{type:a,value:c},{type:b,tag:o,props:{id:"basic-usability"},children:[{type:b,tag:f,props:{href:"#basic-usability"},children:[{type:a,value:"Basic Usability"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This guide is not going to cover Linux, as we'd have no time to actually work on the project. I recommend the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fmaker.pro\u002Flinux\u002Ftutorial\u002Fbasic-linux-commands-for-beginners",rel:[j,k,l],target:m},children:[{type:a,value:"Basic Linux Commands for Beginners"}]},{type:a,value:" article by Alok Naushad for a succinct introduction to Linux. However, there are some commands that are unique to WSL."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"From a PowerShell or Command Prompt terminal in Windows you can manipulate and list your Linux distros with the "},{type:b,tag:e,props:{},children:[{type:a,value:"wsl --help"}]},{type:a,value:" command, if you type only "},{type:b,tag:e,props:{},children:[{type:a,value:p}]},{type:a,value:" it will open your default distro."}]},{type:a,value:c},{type:b,tag:"h3",props:{id:"viewing-linux-files-in-explorer"},children:[{type:b,tag:f,props:{href:"#viewing-linux-files-in-explorer"},children:[{type:a,value:"Viewing Linux files in Explorer"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's possible to view the Linux directories from within Explorer. Within your Linux terminal, you can run the following command. The "},{type:b,tag:e,props:{},children:[{type:a,value:n}]},{type:a,value:" being the current directory; the command works similarly to the "},{type:b,tag:e,props:{},children:[{type:a,value:"cd"}]},{type:a,value:" command, only that it opens Explorer."}]},{type:a,value:c},{type:b,tag:g,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-text"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"explorer.exe .\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can also double click on the address bar of explorer and type in "},{type:b,tag:e,props:{},children:[{type:a,value:"\\\\wsl$"}]},{type:a,value:" and your active distros will be shown as network folders you can interact with. Keep in mind, as was warned above, manipulating files in this manner is not ideal and should only be done occasionally."}]},{type:a,value:c},{type:b,tag:o,props:{id:"visual-studio-code"},children:[{type:b,tag:f,props:{href:"#visual-studio-code"},children:[{type:a,value:"Visual Studio Code"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{type:"danger"},children:[{type:a,value:c},{type:b,tag:g,props:{className:[h,i]},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you wish to keep your code within WSL, this extension is required! As mentioned above, application will not start correctly if you keep the code in one operating system and run it from another."}]},{type:a,value:c}]},{type:a,value:r},{type:b,tag:g,props:{className:[h,i]},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"VSCode has an extension called "},{type:b,tag:f,props:{href:"https:\u002F\u002Fmarketplace.visualstudio.com\u002Fitems?itemName=ms-vscode-remote.vscode-remote-extensionpack",rel:[j,k,l],target:m},children:[{type:a,value:"Remote Development"}]},{type:a,value:" that allows you to run VSCode from within WSL itself. This has benefits of using your Linux terminal, commands, and Git installation. Once you have the extension installed you can use a command similar to the "},{type:b,tag:e,props:{},children:[{type:a,value:"explorer.exe"}]},{type:a,value:" command to open up code."}]},{type:a,value:c},{type:b,tag:g,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-bash"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"code "},{type:b,tag:"span",props:{className:["token","builtin","class-name"]},children:[{type:a,value:n}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The "},{type:b,tag:e,props:{},children:[{type:a,value:n}]},{type:a,value:" means the current directory in Linux. You can change it to open other directories, e.g. "},{type:b,tag:e,props:{},children:[{type:a,value:"code ~\u002Fomc"}]},{type:a,value:n}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"img",props:{src:"https:\u002F\u002Fmicrosoft.github.io\u002Fvscode-remote-release\u002Fimages\u002Fremote-wsl-open-code.gif"},children:[]},{type:a,value:c},{type:b,tag:g,props:{className:[h,i]},children:[{type:a,value:c},{type:b,tag:o,props:{id:"other-terminals"},children:[{type:b,tag:f,props:{href:"#other-terminals"},children:[{type:a,value:"Other Terminals"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When you aren't in your IDE you may want to use a different terminal than the one provided by your Distro. The two I recommend are the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.microsoft.com\u002Fen-us\u002Fp\u002Fwindows-terminal\u002F9n0dx20hk701?activetab=pivot:overviewtab",rel:[j,k,l],target:m},children:[{type:a,value:"Windows Terminal"}]},{type:a,value:", and "},{type:b,tag:f,props:{href:"https:\u002F\u002Fhyper.is\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"Hyper"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Windows Terminal supports easily switching between PowerShell, Command Prompt, and your Linux Distros in a sleek interface whereas the Hyper terminal is more theme-friendly."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"video",props:{controls:true},children:[{type:a,value:"\n  "},{type:b,tag:"source",props:{src:"\u002Fomc-app\u002Fvideos\u002Fterminal.webm",type:"video\u002Fwebm"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{className:[h,i]},children:[{type:a,value:c}]}]}]}]},dir:"\u002Ftools",path:"\u002Ftools\u002F9.wsl",extension:".md",createdAt:v,updatedAt:v,position:"999900090000",to:"\u002Ftools\u002Fwsl",language:"en",draft:false},prev:{slug:"insomnia",title:"Insomnia",to:"\u002Ftools\u002Finsomnia"},next:{slug:"stack",title:"Stack",to:"\u002Ftutorials\u002Fstack"}}],fetch:{},mutations:void 0}}("text","element","\n","p","code","a","div","prose","dark:prose-dark","nofollow","noopener","noreferrer","_blank",".","h2","wsl","d-alert","\n\n","nuxt-content-highlight","pre","line-numbers","2021-03-28T19:30:29.708Z")));