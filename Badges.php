<?php
// badges.php
header('Content-Type: application/json');

// Simuleer een databasebestand in JSON-formaat.
$response_json = '{
    "123": ["badge1", "badge2"],
    "456": ["badge3"],
    "260451031899570176": ["The_Judge"]
}';

// Converteer de JSON-string naar een PHP-array.
$badges_data = json_decode($response_json, true);

// Definieer de directory waar de badge PNG-bestanden zich bevinden.
$badges_directory = __DIR__ . '/badges/';

if (isset($_GET['id'])) {
    $user_id = $_GET['id'];
    if (array_key_exists($user_id, $badges_data)) {
        echo json_encode($badges_data[$user_id]);
    } else {
        echo json_encode(["error" => "Gebruiker niet gevonden"]);
    }
} elseif (isset($_GET['badge'])) {
    $badge_name = $_GET['badge'];
    // Zorg ervoor dat de extensie overeenkomt met het bestandstype, bijvoorbeeld .png voor PNG-bestanden.
    $badge_file_path = $badges_directory . "{$badge_name}.png";

    if (file_exists($badge_file_path)) {
        // Update de Content-Type header voor PNG-bestanden.
        header('Content-Type: image/png');
        readfile($badge_file_path);
    } else {
        echo json_encode(["error" => "Badge niet gevonden"]);
    }
} else {
    echo json_encode(["error" => "Ongeldige aanvraag"]);
}
?>
