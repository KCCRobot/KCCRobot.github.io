(function() {
    const menuHtml = `<aside class="sidebar">
    <a href="index.html" class="sidebar-brand">
        <img src="photos/kccr_logo.png" alt="KCCR 로고" class="brand-logo" onerror="this.src='photos/kccr_logo.jpg';">
        <div class="brand-text">
            한국돌봄로봇협동조합
            <span>Korea Co-op of Care Robots</span>
        </div>
    </a>
    <ul class="sidebar-menu">
        <li><a href="index.html" id="menu-home">조합 소개 (Home)</a></li>
        <li><a href="about.html" id="menu-about">조합 안내 & CI</a></li>
        <li><a href="members.html" id="menu-members">조합원 소개</a></li>
        <li><a href="activities.html" id="menu-activities">주요 활동 및 사업</a></li>
        <li><a href="join.html" id="menu-join">조합 가입 안내</a></li>
        <li style="margin-top: 16px; padding-top: 14px; border-top: 1px solid rgba(255, 255, 255, 0.15);">
            <a href="https://www.kccrobot.com/CareRobot2026/index_kr.html" target="_blank" style="color: #5eead4; font-weight: 600;">Care Robot 2026 ↗</a>
        </li>
    </ul>
    <div class="sidebar-footer">
        <p>Email: contact@kccr.or.kr</p>
        <p>Tel: 02-000-0000</p>
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

        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const linkMap = {
            'index.html': 'menu-home',
            'about.html': 'menu-about',
            'members.html': 'menu-members',
            'activities.html': 'menu-activities',
            'join.html': 'menu-join'
        };

        const activeId = linkMap[currentPath];
        if (activeId) {
            const activeLink = document.getElementById(activeId);
            if (activeLink) activeLink.classList.add('active');
        }
    });
})();