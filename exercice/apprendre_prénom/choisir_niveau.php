<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choix du Niveau</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f5;
        }
        .container {
            text-align: center;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .title {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .level-button {
            display: block;
            margin: 10px auto;
            padding: 10px 20px;
            font-size: 18px;
            color: white;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .level-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="title">Choisissez votre niveau de jeu</h1>
        <button class="level-button" onclick="selectLevel(1)">Niveau 1</button>
        <button class="level-button" onclick="selectLevel(2)">Niveau 2</button>
        <button class="level-button" onclick="selectLevel(3)">Niveau 3</button>
    </div>

    <script>
        function selectLevel(level) {
            alert(`Vous avez choisi le Niveau ${level}`);
            // Ici, vous pouvez rediriger vers une autre page ou gérer la logique de sélection
            // Exemple : window.location.href = `level${level}.html`;
        }
    </script>
</body>
</html>