document.addEventListener('DOMContentLoaded', () => {
    const postitBoard = document.getElementById('postit-board');
    const addPostitButton = document.getElementById('add-postit');
    const postitContent = document.getElementById('postit-content');

    // Load post-its from localStorage
    const loadPostits = () => {
        postitBoard.innerHTML = '';
        const postits = JSON.parse(localStorage.getItem('postits')) || [];
        postits.forEach((content, index) => {
            addPostitToBoard(content, index);
        });
    };

    // Add a post-it to the board and save it to localStorage
    const addPostitToBoard = (content, index) => {
        const postitElement = document.createElement('div');
        postitElement.classList.add('postit');
        postitElement.innerHTML = `
            <p>${content}</p>
            <button class="delete-btn" onclick="deletePostit(${index})">x</button>
        `;
        postitBoard.appendChild(postitElement);
    };

    // Save post-it to localStorage
    const savePostit = (content) => {
        const postits = JSON.parse(localStorage.getItem('postits')) || [];
        postits.push(content);
        localStorage.setItem('postits', JSON.stringify(postits));
        loadPostits();
    };

    // Delete post-it from localStorage
    window.deletePostit = (index) => {
        const postits = JSON.parse(localStorage.getItem('postits'));
        postits.splice(index, 1);
        localStorage.setItem('postits', JSON.stringify(postits));
        loadPostits();
    };

    addPostitButton.addEventListener('click', () => {
        if (postitContent.value.trim()) {
            savePostit(postitContent.value.trim());
            postitContent.value = '';
        }
    });

    const toggleButton = document.getElementById('darkModeToggle');

    
    const toggleCheckbox = document.getElementById('darkModeToggle');
    const label = document.getElementById('darkModeLabel');

    toggleCheckbox.addEventListener('change', function() {
      document.body.classList.toggle('dark-mode');

      // Altera o texto do label conforme o tema
      if (toggleCheckbox.checked) {
        label.textContent = 'Desativar Dark Mode';
      } else {
        label.textContent = 'Ativar Dark Mode';
      }
    });

    loadPostits();
});
