// Voorbeeld JavaScript om te communiceren met het PHP-script

// Functie om badges op te halen voor een specifieke gebruiker
function getBadgesForUser(userId) {
  // De URL naar het PHP-script op GitHub (let op: dit moet de URL zijn naar het PHP-script op je server, niet op GitHub)
  const url = `https://github.com/Judgemite/Enmity-Themes/blob/main/Badges.php?id=${userId}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Badges voor de gebruiker:', data);
      // Verwerk hier de ontvangen data
    })
    .catch(error => console.error('Fout bij het ophalen van badges:', error));
}

// Functie om een specifieke badge afbeelding op te halen
function getBadgeImage(badgeName) {
  // De URL naar het PHP-script op GitHub (let op: dit moet de URL zijn naar het PHP-script op je server, niet op GitHub)
  const url = `https://github.com/Judgemite/Enmity-Themes/blob/main/Badges.php?badge=${badgeName}`;

  fetch(url)
    .then(response => response.blob())
    .then(imageBlob => {
      // Maak een lokale URL voor de afbeelding en toon deze in de browser
      const imageObjectURL = URL.createObjectURL(imageBlob);
      console.log('Badge afbeelding URL:', imageObjectURL);
      // Je kunt deze URL gebruiken om de afbeelding in de browser te tonen
    })
    .catch(error => console.error('Fout bij het ophalen van de badge afbeelding:', error));
}

// Voorbeeld aanroepen met de specifieke gebruikers-ID en badge-naam
getBadgesForUser('260451031899570176'); // Gebruik hetzelfde gebruikers-ID als in het PHP-bestand
getBadgeImage('The_Judge'); // Gebruik dezelfde badge-naam als het PNG-bestand
