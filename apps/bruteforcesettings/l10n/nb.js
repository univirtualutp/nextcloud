OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Innstillinger for rå makt",
    "Whitelist IPs" : "Hvitlist IP-adresser",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Rå-makt-beskyttelse er ment å beskytte Nextcloud-servere mot forsøk på å\ngjette kontopassord på forskjellige måter. Foruten det åpenbare \"* la oss prøve en stor\nliste over ofte brukte passord *\" angrep, det gjør det også vanskeligere å bruke\nlitt mer sofistikerte angrep via skjemaet for tilbakestilling av passord eller forsøk på å\nfinne app-passord-tokens.\n\nHvis den utløses, sender rå-makt-beskyttelsen forespørsler som kommer fra en IP på en\nrå-makt beskyttet kontroller med samme API tregere i en 24-timers periode.\n\nMed denne appen kan administratoren frita en IP-adresse eller rekkevidde fra denne\nbeskyttelsen som kan være nyttig for testformål eller når det er falske\npositiver på grunn av mange kontoer på én IP-adresse.",
    "Brute-force IP whitelist" : "Rå makt tillatte IP-addresser",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "For å hviteliste IP-områder fra rå-makt-beskyttelsen, spesifiser dem nedenfor. Vær oppmerksom på at alle hvitelistede IP-adresser kan utføre autentiseringsforsøk uten struping. Av sikkerhetsgrunner anbefales det å hviteliste så få verter som mulig eller ideelt sett ingen i det hele tatt.",
    "Add a new whitelist" : "Legg til en ny hviteliste",
    "IP address" : "IP-adresse",
    "Mask" : "Maske",
    "Add" : "Legg til",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Den eksterne adressen ble identifisert som \"{remoteAddress}\" og begrenses for øyeblikket med {delay}ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Den eksterne adressen din ble identifisert som \"{remoteAddress}\" og omgår beskyttelse mot rå-makt.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Den eksterne adressen ble identifisert som \"{remoteAddress}\" og strupes ikke aktivt for øyeblikket.",
    "There was an error adding the IP to the whitelist." : "Det oppstod en feil ved å legge til IP-adressen i hvitelisten.",
    "Delete entry for {subnet}" : "Slett oppføring for {subnet}",
    "Add new whitelist" : "Legg til ny hvitlisting"
},
"nplurals=2; plural=(n != 1);");