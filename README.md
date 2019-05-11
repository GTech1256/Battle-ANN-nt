# Battle skyrim ANN'nt

## RU

> Описание | Во время посиделки с друзьями этот сайт был написан.

### Техническая часть

Этот домашний проект использует ряд проектов с открытым исходным кодом для правильной работы:

* [ArtyomJS] - надежный упаковщик Google Chrome SpeechSynthesis и SpeechRecognition, который позволяет создавать виртуальные помощники. Создавайте удивительные вещи с помощью Artyom, создавайте свои собственные Siri, Google Now или Cortana в своем веб-приложении.

### Установка

* Сконируй репозиторий
* Запусти сервер (я использовал [Live server](https://github.com/ritwickdey/vscode-live-server))
* Повеселись!

Сервер нужент так как Chrome блокирует множество вещей в протоколе file: //, включая API webkitSpeechRecognition, поэтому возможны проблемы с прослушиванием аудио.

### З.Ы.

Чтобы SpeechRecognition работал корректно, пользователь должен совершить действие с сайтом.

Для этого сделана инструкция при открытии сайта, на которую должен нажать пользователь и только после этого основной функционал будет запущен.

## ENG

> Description | During the gatherings with friends, this site was written

### Tech

That pet project uses a number of open source projects to work properly:

* [ArtyomJS] - Artyom is a Robust Wrapper of the Google Chrome SpeechSynthesis and SpeechRecognition that allows you to create a virtual assistent. Create awesome stuff with artyom, build your own Siri,Google Now or Cortana within your web application.

### Installation

* Clone repository
* Start server (i used [Live server](https://github.com/ritwickdey/vscode-live-server))
* Enjoy!

Server need cuz Chrome blocks a lot of stuff on file:// protocol,this includes the webkitSpeechRecognition api, therefore you are unable to access this property in the window.

### P.S

For SpeechRecognition to work correctly, the user must perform an action on the site.

To do this, an instruction was made when opening the site, on which the user should click, and only after that the main functionality will be launched.