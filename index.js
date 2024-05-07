document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor', 'bg-red-500', 'bor', 'border-red-700');
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    });
  });
  