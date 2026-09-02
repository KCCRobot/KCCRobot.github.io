(function() {
    const menuHtml = `<aside class="sidebar">
    <a href="index_en.html" class="sidebar-brand">
        <img src="photos/kccr_logo.png" alt="KCCR Logo" class="brand-logo" onerror="this.src='photos/kccr_logo.jpg';">
        <div class="brand-text">
            Korea Co-op of Care Robots
            <span>KCCR</span>
        </div>
    </a>
    <ul class="sidebar-menu">
        <li><a href="index_en.html" id="menu-home">Home</a></li>
        <li><a href="about_en.html" id="menu-about">About & CI</a></li>
        <li><a href="members_en.html" id="menu-members">Members</a></li>
        <li><a href="activities_en.html" id="menu-activities">Activities & Projects</a></li>
        <li><a href="join_en.html" id="menu-join">Membership Guide</a></li>
        <li style="margin-top: 16px; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.15);">
            <a href="https://www.kccrobot.com/CareRobot2026/index.html" target="_blank" style="color: #93c5fd; font-weight: 600;">Care Robot 2026 ↗</a>
        </li>
    </ul>
    <div class="sidebar-footer">
        <p>Email: contact@kccr.or.kr</p>
        <p>Tel: +82-2-000-0000</p>
    </div>
</aside>`;

    document.addEventListener('DOMContentLoaded', () => {
        let container = document.getElementById('sidebar-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'sidebar-container';
            document.body.insertBefore(container, document.body.firstChild);
        }
        container.innerHTML = menuHtml;

        const currentPath = window.location.pathname.split('/').pop() || 'index_en.html';
        const linkMap = {
            'index_en.html': 'menu-home',
            'about_en.html': 'menu-about',
            'members_en.html': 'menu-members',
            'activities_en.html': 'menu-activities',
            'join_en.html': 'menu-join'
        };

        const activeId = linkMap[currentPath];
        if (activeId) {
            const activeLink = document.getElementById(activeId);
            if (activeLink) activeLink.classList.add('active');
        }
    });
})();