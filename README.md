

Mit der vorliegenden Applikation kann Volltext nach Personen auf dem Mobiltelefon gesucht werden. 

Eine grundsätzliche Übersicht zur Funktionalität kann hier [a relative link](Files for presentation/mobile_Search_for_employees_poster.pdf), sowie hier [a relative link](other_file.md) gefunden werden. 


Die Android Version funktioniert einwandfrei und fragt das JSON Webserive welches entwickelt wurde ab.
Dieses kann auch hier abgerufen werden: http://199.231.93.151:8080/perssearch/searchPerson/[Suchbegriff]


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
 
