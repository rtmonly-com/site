<?php
// Set headers to allow for JSON responses
header('Content-Type: application/json');

// Get the secret key from the request headers
$headers = getallheaders();
$authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';
$secretKey = str_replace('Bearer ', '', $authHeader);

// Define your secret key - CHANGE THIS to something secure!
$validSecretKey = 'YOUR_SECRET_KEY_HERE'; // Replace with your actual secret key

// Check if the secret key is valid
if ($secretKey !== $validSecretKey) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

// Get the raw POST data
$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

// Validate the data
if (!isset($data['vouches']) || !is_array($data['vouches'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data format']);
    exit;
}

// Path to the vouches.json file (one directory up from the api folder)
$vouchesFilePath = __DIR__ . '/../vouches.json';

// Create the vouches structure
$vouchesData = [
    'count' => count($data['vouches']),
    'vouches' => $data['vouches']
];

// Write the data to the vouches.json file
if (file_put_contents($vouchesFilePath, json_encode($vouchesData, JSON_PRETTY_PRINT))) {
    echo json_encode(['success' => true, 'message' => 'Vouches updated successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to write vouches to file']);
}
?>
