<?php
// badges.php
header('Content-Type: application/json');

// Simuleer een databasebestand in JSON-formaat.
$response_json = '{
    "123": ["badge1", "badge2"],
    "456": ["badge3"]
}';

// Converteer de JSON-string naar een PHP-array.
$badges_data = json_decode($response_json, true);

if (isset($_GET['id'])) {
    $user_id = $_GET['id'];
    if (array_key_exists($user_id, $badges_data)) {
        echo json_encode($badges_data[$user_id]);
    } else {
        echo json_encode(["error" => "Gebruiker niet gevonden"]);
    }
} elseif (isset($_GET['badge'])) {
    $badge_name = $_GET['badge'];
    $badge_file_path = __DIR__ . "/badges/{$badge_name}.png";

    if (file_exists($badge_file_path)) {
        header('Content-Type: image/png');
        readfile($badge_file_path);
    } else {
        echo json_encode(["error" => "Badge niet gevonden"]);
    }
} else {
    echo json_encode(["error" => "Ongeldige aanvraag"]);
}
?>
