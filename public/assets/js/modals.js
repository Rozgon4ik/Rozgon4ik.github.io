$(function() {
    var support='';
    support += '<div style="display: none;">';
    support += '    <div id="support" class="itemmodal" style="width: 600px; padding: 20px;">';
    support += '        <div class="box-modal_close arcticmodal-close mini"></div>';
    support += '        <div style="font-size: 13px; line-height: 17px;">';
    support += '            <div style="line-height: 15px;">';
    support += '                <div style="color: #D3A22C; padding-bottom: 5px; text-transform: uppercase;">Огромная просьба перед тем как задавать вопрос в нашу тех.поддержку прочитайте данный FAQ, где вы вероятнее всего найдете ответы на ваши вопросы.</div>';
    support += '                <hr class="style-two" />';
    support += '                <div style="margin-top: 15px; margin-bottom: 7px; border-bottom: 1px dashed #6A717B; padding-bottom: 7px;">';
    support += '                    <span style="color: #ECA594;">Вопрос:</span> Мне пришли не все предметы после победы!<br>';
    support += '                    <span style="color: #B7E5B7;">Ответ:</span> С каждой игры мы берем комиссию 10%';
    support += '                </div>';
    support += '                <div style="margin-bottom: 7px; border-bottom: 1px dashed #6A717B; padding-bottom: 7px;">';
    support += '                    <span style="color: #ECA594;">Вопрос:</span> Мне не пришел выигрыш!<br>';
    support += '                    <span style="color: #B7E5B7;">Ответ:</span> Отправка предметов может занимать до 30 минут (в зависимости от загруженности ботов), а также обратите внимание на то, что в настройках приватности вашего аккаунта Steam ваш инвентарь должен быть открыт: <a href="http://steamcommunity.com/id/me/edit/settings/" style="color: #86C9EA;" target="_blank">http://steamcommunity.com/id/me/edit/settings/</a>';
    support += '                </div>';
    support += '                <div style="margin-bottom: 7px; border-bottom: 1px dashed #6A717B; padding-bottom: 7px;">';
    support += '                    <span style="color: #ECA594;">Вопрос:</span> Моя вещь на засчиталась, что делать?<br>';
    support += '                    <span style="color: #B7E5B7;">Ответ:</span> Все пришедшие вещи засчитываются. Если вещь не отображается, не стоит волноваться. Мы просто не смогли загрузить из Стима информацию и картинку. Но цена вещи из Стима всегда загружается и вещь участвует на равных правах в играх.';
    support += '                </div>';
    support += '                <div style="padding-bottom: 7px;">';
    support += '                    <span style="color: #ECA594;">Вопрос:</span> Ваш бот отклоняет мой трейд!<br>';
    support += '                    <span style="color: #B7E5B7;">Ответ:</span>';
    support += '                    Запрещено ставить сувенирные предметы и сувенирные наборы, такие трейды отменяются.<br>';
    support += '                    И принимаюся только те предметы, которые есть на <a href="http://steamcommunity.com/market/search?appid=730" style="color: #86C9EA;" target="_blank">торговой площадке Steam</a>,';
    support += '                    т.к. мы не сможем определить цену вашего предмета.<br>';
    support += '                    А также принимается вещи только для CS:GO. Если вы положили в трейд предметы с другой игры, такой трейд тоже будет отклонен нашим ботом.';
    support += '                </div>';
    support += '                <hr class="style-two" style="margin-bottom: 20px;" />';
    support += '                <div style="font-size: 12px; line-height: 12px; text-align: center; color: #ccc;">Если вы здесь не нашли ответа на ваш вопрос, тогда вы можете задать его нашему саппорту<br>через эту форму отправки сообщений в VK.</div>';
    support += '                <a class="vksupBtn" href="#" target="_blank">Отправить сообщение поддержке</a>';
    support += '            </div>';
    support += '        </div>';
    support += '    </div>';
    support += '</div>';


    var fairplay='';
    fairplay += '<div style="display: none;">';
    fairplay += '   <div id="fairplay" class="itemmodal" style="width: 700px; padding: 20px 20px 15px 20px;">';
    fairplay += '       <div class="box-modal_close arcticmodal-close mini"></div>';
    fairplay += '       <div style="color: #D3A22C;padding-bottom: 7px;text-align: center;text-transform: uppercase;font-size: 18px;">Честная игра - как это работает?</div>';
    fairplay += '       <hr class="style-two" />';
    fairplay += '       <div style="line-height: 18px;font-size: 14px;">';
    fairplay += '           <div style="padding-bottom: 10px;">';
    fairplay += '           За каждый внесенную <span style="color: #ccc;">1 копейку</span> вы получаете 1 билет. Например, если вы внесли депозит на 100 руб, то выполучите 10000 билетов <span style="color: #FF8A74;">(т.к. 100р = 10000 копеек, а 1 копейка = 1 билет)</span><br>';
    fairplay += '           </div>';
    fairplay += '           <div style="padding-bottom: 10px;">';
    fairplay += '           В начале каждого раунда наша система берет абсолютно рандомное длинное число от 0 до 1 <span style="color: #ccc;">(например 0.83952926436439157)</span> и шифрует его через md5 , и показывает его в зашифрованом виде в начале раунда.';
    fairplay += '           <span style="color: #ccc;">(если вы не знаете, что такое md5 - можете <a href="https://ru.wikipedia.org/wiki/MD5" style="color: #B7D9FF;" target="_blank">почитать статью на википедии</a>)</span>';
    fairplay += '           </div>';
    fairplay += '           <div style="padding-bottom: 10px;">';
    fairplay += '           Затем, когда раунд завершился, система показывает то число, которое было шифровано вначале <span style="color: #ccc;">(проверить его вы можете на сайте <a href="http://www.md5.cz/" style="color: #B7D9FF;" target="_blank">md5.cz</a>)</span>';
    fairplay += '           и умножает его на банк <span style="color: #ccc;">(в копейках)</span>.';
    fairplay += '           </div>';
    fairplay += '           <div style="padding-bottom: 10px;">';
    fairplay += '           Например, в конце раунда банк составил 1000 рублей';
    fairplay += '           а 1000 рублей = 100000 копеек <span style="color: #ccc;">(1 рубль = 100 копеек)</span>, то нужно будет число 0.83952926436439157 умножить на банк 100000 копеек <span style="color: #ccc;">(это цифры, которые мы брали для примера)</span> и получим число 83952.';
    fairplay += '           То есть <span style="color: #FF8A74;">в раунде победит человек, у которого есть 83952 билет.</span><br>';
    fairplay += '           <span style="color: #E0FFB3">Следовательно, чем на большую сумму депозит вы внесете - тем больше билетов вы получите, а значит выше шанс получить выигрышный билет.</span>';
    fairplay += '           </div>';
    fairplay += '           <div style="padding-bottom: 10px;">';
    fairplay += '           Вот и всё. Принцип работы честной игры заключается в том, что <span style="color: #FF8A74;">мы никак не можем знать какой будет банк в конце игры,';
    fairplay += '           а рандомное число для умножения на банк мы даем в самом начале раунда</span> и следовательно даже если бы мы сильно этого захотели, то никак бы не смогли сделать подставного победителя.';
    fairplay += '           </div>';
    fairplay += '       </div>';
    fairplay += '       <hr class="style-two" />';
    fairplay += '       <div style="text-align: center;">';
    fairplay += '           <div style="text-transform: uppercase;font-size: 16px;line-height: 18px;">Проверка честной игры</div>';
    fairplay += '           <div style="margin-bottom: 5px;"><span style="color: #E0FFB3">Число раунда</span> * <span style="color: #E0FFB3">банк</span> <span style="color: #ccc;">(в копейках)</span> = <span style="color: #E0FFB3">выигрышный билет</span></div>';
    fairplay += '           <input type="text" id="roundHash1" placeholder="Хэш Раунда" style="color: #333; width: 300px; margin-top: 5px"/><br/>';
    fairplay += '           <input type="text" id="roundNumber1" placeholder="Число Раунда" style="color: #333; width: 300px; margin-top: 5px"/><br/>';
    fairplay += '           <input type="text" id="roundPrice1" placeholder="Количество копеек в раунде" style="color: #333; width: 300px; margin-top: 5px"/><br/>';
    fairplay += '           <input type="button" id="checkHash" value="Проверить" style="width: 304px; color: #333; margin-top: 5px"/>';
    fairplay += '           <div id="checkResult" style="margin-top: 5px; padding: 2px 4px; background: #26353C; width: 296px; margin-left: auto; margin-right: auto;"></div>';
    fairplay += '       </div>';
    fairplay += '   </div>';
    fairplay += '</div>';


    $(document.body).append(support);
    $(document.body).append(fairplay);
});