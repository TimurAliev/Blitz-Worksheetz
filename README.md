# Blitz Worksheetz
Чудо-скрипт, автоматизирующий заполнение одного спредшита.

## Инструкция по применению
1. Скопируйте этот код (**Protip**: кликни три раза, чтобы выделить всё):
```javascript
!function(){var e,t,r,n,o=new Date,d=String(o.getFullYear()),l=String(o.getMonth()+1),a=String(o.getDate());e=(l=1===l.length?"0"+l:l)+"/"+(a=1===a.length?"0"+a:a)+"/"+d,t=window.location.hostname.replace(".emsow.com",""),r=document.querySelectorAll(".app-infopanel-field")[0].textContent.match(/Order:\d+/)[0].replace(/\D/g,"");var i=document.querySelectorAll(".app-infopanel-field")[6].textContent.replace("Referring: ","");n=document.querySelectorAll(".app-infopanel-field")[4].textContent.replace(/\D/g,"");var c=document.createElement("table");c.setAttribute("style","font-family: Arial");for(var p=0;p<n;p++){var m=document.querySelectorAll('div[id$="service_status_system-performed-bd"] .x-grid3-row div[qtip="Service ID"]')[p].textContent.replace("#",""),u=document.querySelectorAll('div[id$="service_status_system-performed-bd"] .x-grid3-row span[qtip^="Patient ID"]')[p].textContent,s=document.querySelectorAll('div[id$="service_status_system-performed-bd"] .x-grid3-row')[p].querySelectorAll('img[qtip="Report is not uploaded"] + b');s.map=[].map;for(var g=s.map(e=>e.textContent),v=0;v<g.length;v++){var f=g[v],y=document.createElement("tr");y.innerHTML=`<td>${e}</td><td>${t}</td><td>${r}</td><td>${m}</td><td>${u}</td><td>${f}</td><td>${i}</td>`,c.append(y)}}var w=window.open("about:blank","_blank");c.textContent?w.document.write(c.outerHTML):w.document.write("Ко всем стадиям в ордере уже приаттачены репорты."),w.document.close()}();
```
2. Находясь на вкладке с ордером, откройте средства разработчика, нажав клавишу F12 или кликнув Inspect в контекстном меню.
2. В открывшемся окне перейдите на вкладку Console.
2. В поле для ввода текста вставьте скопированный код и нажмите Enter.
2. На открывшейся вкладке с таблицей нажмите CTRL+A, CTRL+C и вставьте полученную красоту в ваш любимый спредшит.
  
## Вопросы и ответы

**Все ли стадии из ордера попадают в результирующую таблицу?**  
*Все, у которых нет репортов, независимо от того, был заполнен для них воркшит или нет. Так что если в ордере есть, например, неврологические стадии, их необходимо удалить из спредшита. В будущем в таблицу будут попадать только стадии с заполненными воркшитами.*

**У меня не работает скрипт! Что делать?**  
*Заполнять спредшит вручную, что ж ещё. Но сперва лучше всё же сообщить мне об ошибке - возможно там мелкий косяк, который исправляется за пару минут. А может, виноват апдейт эмсы. Сегодня не среда, случайно?*

**Будут ли обновления скрипта?**  
*Обязательно. Stay tuned.*

**Я боюсь, что скрипт может получить доступ к моей вебке и нюдсам!**  
*Заклейте веб-камеру непрозрачной лентой и удалите все компрометирующие вас фотографии.*
