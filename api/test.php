<?php
// This file is for testing the webhook endpoint
// Access this file in your browser to test if the webhook is working

// Path to the vouches.json file
$vouchesFilePath = __DIR__ . '/../vouches.json';

// Check if the vouches.json file exists
if (file_exists($vouchesFilePath)) {
    $fileContent = file_get_contents($vouchesFilePath);
    $vouchesData = json_decode($fileContent, true);
    
    echo "<h1>Webhook Test</h1>";
    echo "<p>The vouches.json file exists and contains " . $vouchesData['count'] . " vouches.</p>";
    
    // Check if the file is writable
    if (is_writable($vouchesFilePath)) {
        echo "<p style='color: green;'>The vouches.json file is writable. The webhook should work correctly.</p>";
    } else {
        echo "<p style='color: red;'>The vouches.json file is not writable. Please check file permissions.</p>";
    }
    
    // Check if the webhook.php file exists
    if (file_exists(__DIR__ . '/webhook.php')) {
        echo "<p style='color: green;'>The webhook.php file exists.</p>";
    } else {
        echo "<p style='color: red;'>The webhook.php file does not exist.</p>";
    }
} else {
    echo "<h1>Webhook Test</h1>";
    echo "<p style='color: red;'>The vouches.json file does not exist.</p>";
    
    // Try to create the file
    $initialData = ['count' => 0, 'vouches' => []];
    if (file_put_contents($vouchesFilePath, json_encode($initialData, JSON_PRETTY_PRINT))) {
        echo "<p style='color: green;'>Created a new vouches.json file. Please refresh this page.</p>";
    } else {
        echo "<p style='color: red;'>Failed to create vouches.json file. Please check directory permissions.</p>";
    }
}
?>
