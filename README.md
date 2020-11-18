<h1>Blitz Worksheetz</h1>
<div>Чудо-скрипт, автоматизирующий заполнение одного спредшита.</div>

<div>
  <h2>Инструкция по применению</h2>
  <ol>
    <li>Скопируйте этот код (Protip: кликни три раза, чтобы выделить всё):<br>
      <pre>!function(){var e,t,r,n,o=new Date,d=String(o.getFullYear()),l=String(o.getMonth()+1),a=String(o.getDate());e=(l=1===l.length?"0"+l:l)+"/"+(a=1===a.length?"0"+a:a)+"/"+d,t=window.location.hostname.replace(".emsow.com",""),r=document.querySelectorAll(".app-infopanel-field")[0].textContent.match(/Order:\d+/)[0].replace(/\D/g,"");var i=document.querySelectorAll(".app-infopanel-field")[6].textContent.replace("Referring: ","");n=document.querySelectorAll(".app-infopanel-field")[4].textContent.replace(/\D/g,"");for(var c=document.createElement("table"),p=0;p<n;p++){var m=document.querySelectorAll('div[id$="service_status_system-performed-bd"] .x-grid3-row div[qtip="Service ID"]')[p].textContent.replace("#",""),u=document.querySelectorAll('div[id$="service_status_system-performed-bd"] .x-grid3-row span[qtip^="Patient ID"]')[p].textContent,s=document.querySelectorAll('div[id$="service_status_system-performed-bd"] .x-grid3-row')[p].querySelectorAll('img[qtip="Report is not uploaded"] + b');s.map=[].map;for(var g=s.map(e=>e.textContent),v=0;v<g.length;v++){var f=g[v],w=document.createElement("tr");w.innerHTML=`<td>${e}</td><td>${t}</td><td>${r}</td><td>${m}</td><td>${u}</td><td>${f}</td><td>${i}</td>`,c.append(w)}}var S=window.open("about:blank","_blank");c.textContent?S.document.write(c.outerHTML):S.document.write("Ко всем стадиям в ордере уже приаттачены репорты."),S.document.close()}();<pre>
      </li>
    <li>Находясь на вкладке с ордером, откройте средства разработчика, нажав клавишу F12 или кликнув Inspect в контекстном меню.</li>
    <li>В открывшемся окне перейдите на вкладку Console.</li>
    <li>В поле для ввода текста вставьте скопированный код и нажмите Enter.</li>
    <li>На открывшейся вкладке с таблицей нажмите CTRL+A и вставьте полученную красоту в ваш любимый спредшит.</li>
  </ol>  
</div>
  
<div>
  <h2>Вопросы и ответы</h2>
  
  <div>
    <div><b>Все ли стадии из ордера попадают в результирующую таблицу?</b></div>
    <div><i>Все, у которых нет репортов. Так что если в ордере есть неврологические стадии, их необходимо удалить из спредшита. В будущем сделаю хотя бы вывод предупреждения о наличии таких стадий в ордере.</i></div>
  </div>
  <br>
  <div>
    <div><b>У меня не работает скрипт! Что делать?</b></div>
    <div><i>Заполнять спредшит вручную, что ж ещё. Но сперва лучше всё же сообщить мне об ошибке - возможно там мелкий косяк, который исправляется за пару минут. А может, виноват апдейт эмсы. Сегодня не среда, случайно?</i></div>
  </div>
  <br>
  <div>
    <div><b>Будут ли обновления скрипта?</b></div>
    <div><i>Обязательно. Stay tuned.</i></div>
  </div>
  <br>
  <div>
    <div><b>Я боюсь, что скрипт может получить доступ к моей вебке и нюдсам!</b></div>
    <div><i>Заклейте веб-камеру непрозрачной лентой и удалите все компрометирующие вас фотографии.</i></div>
  </div>
</div>
