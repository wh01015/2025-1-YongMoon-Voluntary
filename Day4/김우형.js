const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    function openModal(type) {
      let content = '';
      if (type === 'dream') {
        content = `
          <h2>나의 꿈</h2>
          <p>저는 사람들이 더 나은 삶을 살 수 있도록 돕는 개발자가 되고 싶어요.  
          예를 들어, 장애인을 위한 접근성 있는 웹 서비스나,  
          사회문제를 해결하는 플랫폼을 만들고 싶어요.</p>
        `;
      } else if (type === 'goal') {
        content = `
          <h2>올해 나의 목표</h2>
          <p>하루에 최소 1시간 이상 공부하고, 한 달에 한 번씩 작은 프로젝트를 완성해보는 것이 목표입니다.  
          예: 미니 게임, 포트폴리오 사이트, API 실험 등</p>
        `;
      } else if (type === 'hobby') {
        content = `
          <h2>나의 취미</h2>
          <p>취미로는 감성적인 사진을 찍는 걸 좋아하고,  
          CSS 실험으로 멋진 인터랙션을 만들어보는 것도 즐겨요.  
          책은 개발서부터 자기계발서까지 다양하게 읽습니다.</p>
        `;
      }
      modalBody.innerHTML = content;
      modal.style.display = 'flex';
    }

    function closeModal() {
      modal.style.display = 'none';
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark');
      const btn = document.querySelector('.toggle');
      btn.textContent = document.body.classList.contains('dark') ? '☀️ 라이트모드' : '🌙 다크모드';
    }

    // ESC 눌렀을 때 모달 닫기
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    // 배경 클릭 시 모달 닫기
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
