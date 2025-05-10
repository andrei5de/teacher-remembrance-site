const people = [
  { name: 'Arfe Simson', image: 'images/Arfe Simson.jpeg', theme: { background: '#f0f8ff', text: '#2c3e50' }},
  { name: 'Dream Rose Malayo', image: 'images/Dream Rose Malayo.jpeg', theme: { background: '#ffe4e1', text: '#8b4513' }},
  { name: 'Harlene May Magdaug', image: './images/Harlene May Magdaug.jpeg', theme: { background: '#f0fff0', text: '#006400' }},
  { name: 'Julie Dollolasa', image: './images/Julie Dollolasa.jpeg', theme: { background: '#fff0f5', text: '#800080' }},
  { name: 'Leda Ortega', image: './images/Leda Ortega.jpeg', theme: { background: '#f5f5dc', text: '#556b2f' }},
  { name: 'Ma, Rowena Tunguia', image: './images/Ma, Rowena Tunguia.jpeg', theme: { background: '#e6e6fa', text: '#4b0082' }},
  { name: 'Martin John Salanatin', image: './images/Martin John Salanatin.jpeg', theme: { background: '#f0ffff', text: '#008b8b' }},
  { name: 'Rhodbe Pandoy', image: 'images/Rhodbe Pandoy.jpeg', theme: { background: '#fff5ee', text: '#8b4513' }},
  { name: 'Richel Hugos', image: './images/Richel Hugos.jpeg', theme: { background: '#f5fffa', text: '#2f4f4f' }},
  { name: 'Sheila Mae Sibugan', image: './images/Sheila Mae Sibugan.jpeg', theme: { background: '#fffaf0', text: '#8b008b' }},
  { name: 'Willsa Alayon', image: './images/Willsa Alayon.jpeg', theme: { background: '#f8f8ff', text: '#191970' }},
  { name: 'Wyeth Ville Ardenio', image: './images/Wyeth Ville Ardenio.jpeg', theme: { background: '#f0f8ff', text: '#006400' }}
];


function displayPerson(person) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <div class="search-result-card" style="background: ${person.theme.background}">
      <img src="${person.image}" alt="${person.name}" 
           onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=200&background=random'">
      <div class="search-result-info">
        <h2 style="color: ${person.theme.text}">${person.name}</h2>
        <a href="profiles/${person.name.replace(/\s+/g, '_')}.html" class="profile-btn">View Profile 👤</a>
      </div>
    </div>
  `;
  document.body.style.backgroundColor = '#f5f5f5'; // Set a default background color
}
function createPersonCard(person) {
  return `
    <div class="person-card" style="background: ${person.theme.background}">
      <img src="${person.image}" alt="${person.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=250&background=random'">
      <h2 style="color: ${person.theme.text}">${person.name}</h2>
      <a href="profiles/${person.name.replace(/\s+/g, '_')}.html" class="profile-btn">View Profile 👤</a>
    </div>
  `;
}

function filterPeople() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const allPeopleDiv = document.getElementById('allPeople');
  allPeopleDiv.innerHTML = ''; // Always clear the people list

  if (searchInput.trim() === '') {
    document.getElementById('result').innerHTML = '';
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    return;
  }

  const filteredPeople = people.filter(p => 
    p.name.toLowerCase().includes(searchInput)
  );

  if (filteredPeople.length > 0) {
    displayPerson(filteredPeople[0]);
  } else {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    document.getElementById('result').innerHTML = '<p>No matches found</p>';
  }
}

function displayAllPersons() {
  const allPeopleDiv = document.getElementById('allPeople');
  allPeopleDiv.innerHTML = ''; // Clear previous results

  people.forEach(person => {
    allPeopleDiv.innerHTML += createPersonCard(person);
  });
}

// Add event listeners
document.getElementById('searchInput').addEventListener('input', filterPeople);
document.getElementById('listButton').addEventListener('click', displayAllPersons);