// Tab functionality
document.querySelectorAll('.tabs li').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tabs li').forEach(tab => tab.classList.remove('active'));
        // Hide all content
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
});
