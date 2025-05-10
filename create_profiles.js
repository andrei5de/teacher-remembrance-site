
const fs = require('fs');

const people = [
  { name: "Arfe Simson", image: "./images/Arfe Simson.jpeg", theme: { background: "#f0f8ff", text: "#2c3e50" }},
  { name: "Dream Rose Malayo", image: "./images/Dream Rose Malayo.jpeg", theme: { background: "#ffe4e1", text: "#8b4513" }},
  { name: "Harlene May Magdaug", image: "./images/Harlene May Magdaug.jpeg", theme: { background: "#f0fff0", text: "#006400" }},
  { name: "Julie Dollolasa", image: "./images/Julie Dollolasa.jpeg", theme: { background: "#fff0f5", text: "#800080" }},
  { name: "Leda Ortega", image: "./images/Leda Ortega.jpeg", theme: { background: "#f5f5dc", text: "#556b2f" }},
  { name: "Ma, Rowena Tunguia", image: "./images/Ma, Rowena Tunguia.jpeg", theme: { background: "#e6e6fa", text: "#4b0082" }},
  { name: "Martin John Salanatin", image: "./images/Martin John Salanatin.jpeg", theme: { background: "#f0ffff", text: "#008b8b" }},
  { name: "Rhodbe Pandoy", image: "./images/Rhodbe Pandoy.jpeg", theme: { background: "#fff5ee", text: "#8b4513" }},
  { name: "Richel Hugos", image: "./images/Richel Hugos.jpeg", theme: { background: "#f5fffa", text: "#2f4f4f" }},
  { name: "Sheila Mae Sibugan", image: "./images/Sheila Mae Sibugan.jpeg", theme: { background: "#fffaf0", text: "#8b008b" }},
  { name: "Willsa Alayon", image: "./images/Willsa Alayon.jpeg", theme: { background: "#f8f8ff", text: "#191970" }},
  { name: "Wyeth Ville Ardenio", image: "./images/Wyeth Ville Ardenio.jpeg", theme: { background: "#f0f8ff", text: "#006400" }}
];

if (!fs.existsSync('profiles')) {
  fs.mkdirSync('profiles');
}

people.forEach(person => {
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>${person.name}</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: ${person.theme.background};
            color: ${person.theme.text};
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            text-align: center;
            padding: 20px;
        }
        .profile-img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            margin: 20px auto;
            display: block;
            object-fit: cover;
            border: 5px solid white;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        }
        .back-btn {
            display: inline-block;
            padding: 10px 20px;
            background: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 25px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${person.name}</h1>
        <img src="..${person.image}" alt="${person.name}" class="profile-img" 
             onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=300&background=random'">
        <div>
            <a href="../index.html" class="back-btn">Back to List</a>
        </div>
    </div>
</body>
</html>`;

  fs.writeFileSync(`profiles/${person.name.replace(/\s+/g, '_')}.html`, htmlContent);
});

console.log('Profile pages generated successfully!');
