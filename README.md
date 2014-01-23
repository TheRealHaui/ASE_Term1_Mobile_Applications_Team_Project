

Mit der vorliegenden Applikation kann Volltext nach Personen auf dem Mobiltelefon gesucht werden.
Sie wurde unter Verwendung des Appcelerator Titanium Frameworks entwickelt. 

Eine grundsätzliche Übersicht zur Funktionalität kann 
[hier (Plakat)](https://github.com/TheRealHaui/ASE_Term1_Mobile_Applications_Team_Project/blob/master/Files%20for%20presentation/mobile_Search_for_employees_poster.pdf?raw=true), 
sowie [hier (Präsentation)](https://github.com/TheRealHaui/ASE_Term1_Mobile_Applications_Team_Project/blob/master/Files%20for%20presentation/mobile_Search_for_employees_presentation.pdf?raw=true) 
gefunden werden. 


Weiters werden 
 - Daten ausschließlich asynchron nachgeladen 
 - die aktuelle Position der BenutzerIn in einem interaktiven Lageplan angezeigt sowie per GPS bestimmt
 - die Beschleunigungssensoren ausgelesen sodass die BenutzerIn mittels Schütteln aktuelle Sucheingaben löschen kann
 - ausgehende Anrufe direkt aus der Applikation heraus unterstützt
 - die Erstellung von eMails direkt aus der Applikation heraus unterstützt
 - das Versenden von SMS direkt aus der Applikation heraus unterstützt
 - nach erfolgreichem Login der BenutzerIn ein Vibrationsalarm ausgelöst
 - der Benutzername des letzten erfolgreichen Logins automatisch im Benutzernamenfeld des Logindialoges angezeigt
 - Deutsch und Englisch als Benutzersprachen unterstützt

Dies alles kann von BenutzerInnen nach erfolgreichem Login durchgeführt werden.


Die von der Appliation verwendeten Daten werden von einer Java EE / Spring Applikation vorgehalten.
Die HTML Benutzerschnittstelle dieser Serveranwendung erlaubt es Personendaten zu erfassen, zu aktualisieren sowie zu löschen. 
Die zugehörende Dokumentation kann [hier](https://github.com/TheRealHaui/ASE_Term1_Mobile_Applications_Exercise_Team_Project_searchServer/blob/master/README.md) eingesehen werden.




Die Android Version der Handyanwendung funktioniert einwandfrei und fragt das JSON Webserive welches entwickelt wurde ab.
Dieses kann auch hier abgerufen werden: http://199.231.93.151:8080/perssearch/searchPerson/[Suchbegriff]


Sie kann [hier](https://github.com/TheRealHaui/ASE_Term1_Mobile_Applications_Team_Project/blob/master/Installable%20Application/Personen%20finden.apk?raw=true) heruntergeladen werden.  



ACHTUNG:
Die mobile auf HTML 5 basierende Webseitenversion zeigt immer, unabhängig von der Sucheingabe der BenutzerIn, die gleiche Ergebnismenge an.
Der Grund hierfür liegt in der in den Browsern umgesetzten same-origin-policy.
Dazu siehe auch: http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.Network.HTTPClient


 
Für Tizen kann derzeit keine Version bereitgestellt werden da der hierfür notwendige Emulator für Windows x64 Fehler beinhaltet durch
welche er nicht startbar ist. Andererseits beinhaltet die aktuelle Version des Appcelerator Titanium Entwicklungsstudios einen
Bug welches verhindert dass dieses momentan auf Linux verwendbar ist.
Genau gesagt ist es ein Benennungsproblem von node.js welches von Titanium verwendet wird (node.js wurde auf Linux auf nodejs umbenannt usw. usf.)


Für iPhone kann keine Version erstellt werden da zur Zeit kein für das Kompilieren notwendiger Apple Computer verfügbar ist. 


Der Download des Blackberry SDK's war trotz zweimaliger Versuche unter Verwendung des Appcelerator Titanium Entwicklungsstudios
nicht möglich. Daher existiert auch für Blackberry keine Version. 
 
