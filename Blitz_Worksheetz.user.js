// ==UserScript==
// @name         Blitz Worksheetz
// @version      1.0
// @author       Timur Aliev
// @match        https://*.emsow.com/*
// ==/UserScript==

(function() {
    'use strict';

    function init() {
        if (/#module=app-orders.*/.test(location.hash)) {

            // wait until the interface is built
            setTimeout(function() {
                if (!document.querySelector('#btn-blitz')) {
                    var tbar = document.querySelector('.app-order-tools');

                    var btns = tbar.querySelectorAll('.x-toolbar-cell');
                    var btnLast = btns[btns.length - 1];
                    
                    var html =
                    `<td class="x-toolbar-cell">
                        <table cellspacing="0" class="x-btn x-btn-text-icon" style="width: auto;">
                            <tbody class="x-btn-small x-btn-icon-small-left">
                                <tr>
                                    <td class="x-btn-tl">
                                        <i>&nbsp;</i>
                                    </td>
                                    <td class="x-btn-tc"></td>
                                    <td class="x-btn-tr">
                                        <i>&nbsp;</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="x-btn-ml">
                                        <i>&nbsp;</i>
                                    </td>
                                    <td class="x-btn-mc">
                                        <em class="x-unselectable" unselectable="on">
                                            <button type="button" id="btn-blitz" class="x-btn-text icon-ext-xls">Blitz Worksheetz</button>
                                        </em>
                                    </td>
                                    <td class="x-btn-mr">
                                        <i>&nbsp;</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="x-btn-bl">
                                        <i>&nbsp;</i>
                                    </td>
                                    <td class="x-btn-bc"></td>
                                    <td class="x-btn-br">
                                        <i>&nbsp;</i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>`;

                    btnLast.insertAdjacentHTML('afterend', html);

                    var btnBlitz = tbar.querySelector('#btn-blitz');
                    btnBlitz.addEventListener('click', blitz);
                }
            }, 5000);
        }
    }

    function blitz() {
        var DATE, SUBDOMAIN, ORDER_ID, REF_FACILITY, SERVICE_COUNT;

        // getting DATE

        var now = new Date();
        var yyyy = String(now.getFullYear());
        var mm = String(now.getMonth() + 1);
        var dd = String(now.getDate());

        mm = mm.length === 1 ? '0' + mm : mm;
        dd = dd.length === 1 ? '0' + dd : dd;

        DATE = mm + '/' + dd + '/' + yyyy;

        // getting SUBDOMAIN

        SUBDOMAIN = window.location.hostname.replace('.emsow.com', '');

        // getting ORDER_ID

        var elem = document.querySelectorAll('.app-infopanel-field')[0];
        var txt = elem.textContent;
        var match = txt.match(/Order:\d+/);
        ORDER_ID = match[0].replace(/\D/g, '');

        // getting REF_FACILITY

        elem = document.querySelectorAll('.app-infopanel-field')[6];
        txt = elem.textContent;
        REF_FACILITY = txt.replace('Referring: ', '');

        // getting SERVICE_COUNT

        elem = document.querySelectorAll('.app-infopanel-field')[4];
        SERVICE_COUNT = elem.textContent.replace(/\D/g, '');

        // making the table

        var table = document.createElement('table');
        table.setAttribute('style', 'font-family: Arial');
        var serviceContainerSelector = 'div[id$="service_status_system-performed-bd"] .x-grid3-row ';

        for (var i = 0; i < SERVICE_COUNT; i++) {

            // getting SERVICE_ID
            elem = document.querySelectorAll(serviceContainerSelector + 'div[qtip="Service ID"]')[i];
            var SERVICE_ID = elem.textContent.replace('#', '');

            // getting PATIENT_NAME
            elem = document.querySelectorAll(serviceContainerSelector + 'span[qtip^="Patient ID"]')[i];
            var PATIENT_NAME = elem.textContent;

            // getting STUDIES
            var service = document.querySelectorAll('div[id$="service_status_system-performed-bd"] .x-grid3-row')[i];
            var studies = service.querySelectorAll('img[qtip="Report is not uploaded"] + b');
            studies.map = [].map;
            var STUDIES = studies.map(elem => elem.textContent);

            for (var j = 0; j < STUDIES.length; j++) {
                var STUDY_NAME = STUDIES[j];

                var tr = document.createElement('tr');
                tr.innerHTML = `<td>${DATE}</td><td>${SUBDOMAIN}</td><td>${ORDER_ID}</td><td>${SERVICE_ID}</td><td>${PATIENT_NAME}</td><td>${STUDY_NAME}</td><td>${REF_FACILITY}</td>`;
                table.append(tr);
            }
        }

        var tab = window.open('about:blank', '_blank');

        if (!table.textContent) {
            tab.document.write("Ко всем стадиям в ордере уже приаттачены репорты.");
        } else {
            tab.document.write(table.outerHTML);
        }
        tab.document.close();
    }

    init();

    window.addEventListener('hashchange', function() {
        if (/#module=app-orders.*/.test(location.hash)) {
            init();
        }
    });
})();
